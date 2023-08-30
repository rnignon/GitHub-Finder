import User from './User.js';
import { createProfile, createInfos } from './userInfos.js';
import { createRepos } from './userRepos.js';

const user_container = document.querySelector('.user-container');
const search_form = document.querySelector('.search-container');
const search_form_button = document.querySelector('.search-container-button')
const spinner = document.querySelector('.loading-spinner');

search_form_button.addEventListener('click', (e) => {
  e.preventDefault();
  search(search_form.key.value);
})

async function search(key = null) {
  deleteContainer();
  showSpinner();
  let user = getUser(key);

  if (await user.fetchInfo()) {
    await user.fetchRepos();
    loadMain(key, user);
  } else {
    loadEmptyMain(key);
  }
  hideSpinner();
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
  user_container.appendChild(createMessage(key, false));
}


function loadInfo(user) {
  let user_info = document.createElement('div');
  user_info.classList.add('user-info-container');

  let users_info = user.getInfo();

  user_info.append(createProfile(users_info.name, users_info.login, users_info.html_url, users_info.avatar_url),
                    createInfos(users_info.public_repos, users_info.public_gists, users_info.followers, users_info.following,
                                users_info.company, users_info.blog, users_info.location, users_info.email,
                                users_info.created_at, users_info.updated_at));

  return user_info;
}

function loadRepos(user) {
  let user_repos = document.createElement('div');
  user_repos.classList.add('user-repos-container');

  let user_repos_desc = document.createElement('p');
  user_repos_desc.innerText = 'Repositories';

  let repos = user.getRepos();

  user_repos.append(user_repos_desc, createRepos(repos));

  return user_repos;
}


/* -------------------------------------------------------- */

function createMessage(key, exist) {
  let message = document.createElement('p');
  message.classList.add('message');
  message.innerText = exist ? `Search result for '${key}'` : `'${key}' did not match any users.`;
  return message;
}

function deleteContainer() {
  while(user_container.firstChild) {
    user_container.removeChild(user_container.firstChild);
  }
}

/* -------------------------------------------------------- */

function showSpinner() {
  spinner.style.display = 'block';
}

function hideSpinner() {
  spinner.style.display = 'none';
}