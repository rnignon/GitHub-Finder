import User from './User.js';
import { createProfile, createInfos } from './userInfo.js';

const user_container = document.querySelector('.user-container');

search();

async function search(key = 'rnignon') {
  deleteContainer();
  let user = getUser(key);
  if (await user.fetchInfo()) {
    // console.log(user.getInfo());
    await user.fetchRepos();
    loadMain(key, user);
  } else {
    loadEmptyMain(key);
  }
}

function getUser (name = null) {
  if (name == null) return null;
  else return new User(name);
}


function loadMain(key, user) {
  let user_content = document.createElement('div');
  user_content.classList.add('user-content');
  user_content.append(loadInfo(user), loadRepos(user));

  user_container.append(createMessage(key, true), user_content);
}

function loadEmptyMain(key) {
  deleteContainer();

  user_container.appendChild(createMessage(key, false));
}


function loadInfo(user) {
  let user_info = document.createElement('div');
  user_info.classList.add('user-info-container');

  let users_info = user.getInfo();

  user_info.append(createProfile(users_info.name, users_info.login, users_info.avatar_url),
                    createInfos(users_info.public_repos, users_info.public_gists, users_info.followers, users_info.following,
                                users_info.company, users_info.blog, users_info.location, users_info.email,
                                users_info.created_at, users_info.updated_at));

  return user_info;
}

function loadRepos(user) {
  let user_repos = document.createElement('div');
  user_repos.classList.add('user-repos-container');

  return user_repos;
}


/* -------------------------------------------------------- */

function createMessage(key, exist) {
  let message = document.createElement('p');
  message.classList.add('message');
  message.innerText = exist ? `Search result for ${key}` : `'${key}' did not match any users.`;
  return message;
}

function deleteContainer() {
  while(user_container.firstChild) {
    user_container.removeChild(user_container.firstChild);
  }
}