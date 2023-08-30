function createRepos(repos) {
  let user_repos = document.createElement('ul');
  user_repos.classList.add('user-repos');

  let sorted_repos = repos.sort((a, b) => {
    if (a.stargazers_count < b.stargazers_count) return 1;
    if (a.stargazers_count > b.stargazers_count) return -1;
    return 0;
  })

  for (let repo of repos) {
    user_repos.appendChild(createRepo(repo));
  }

  return user_repos;
}

function createRepo(repo) {
  let user_each_repo = document.createElement('li');
  user_each_repo.classList.add('user-each-repo');
  
  let each_repo_url = document.createElement('a');
  each_repo_url.classList.add('each-repo-url');
  each_repo_url.href = repo.html_url;
  each_repo_url.innerText = repo.name;

  let each_repo_infos = document.createElement('div');
  each_repo_infos.classList.add('each-repo-infos');

  let each_repo_stars = document.createElement('div');
  let each_repo_watchers = document.createElement('div');
  let each_repo_forks = document.createElement('div');

  each_repo_stars.classList.add('each-repo-stars');
  each_repo_watchers.classList.add('each-repo-watchers');
  each_repo_forks.classList.add('each-repo-forks');

  let each_repo_stars_img = document.createElement('img');
  let each_repo_watchers_img = document.createElement('img');
  let each_repo_forks_img = document.createElement('img');

  each_repo_stars_img.classList.add('icon');
  each_repo_watchers_img.classList.add('icon');
  each_repo_forks_img.classList.add('icon');

  each_repo_stars_img.src = './assets/star.svg';
  each_repo_watchers_img.src = './assets/eye.svg';
  each_repo_forks_img.src = './assets/code-fork.svg';

  let each_repo_stars_desc = document.createElement('p');
  let each_repo_watchers_desc = document.createElement('p');
  let each_repo_forks_desc = document.createElement('p');

  each_repo_stars_desc.classList.add('each-repo-desc');
  each_repo_watchers_desc.classList.add('each-repo-desc');
  each_repo_forks_desc.classList.add('each-repo-desc');

  each_repo_stars_desc.innerText = `Stars : ${repo.stargazers_count}`
  each_repo_watchers_desc.innerText = `Watchers : ${repo.watchers_count}`;
  each_repo_forks_desc.innerText = `Forks : ${repo.forks_count}`

  each_repo_stars.append(each_repo_stars_img, each_repo_stars_desc);
  each_repo_watchers.append(each_repo_watchers_img, each_repo_watchers_desc);
  each_repo_forks.append(each_repo_forks_img, each_repo_forks_desc);

  each_repo_infos.append(each_repo_stars, each_repo_watchers, each_repo_forks);

  user_each_repo.append(each_repo_url, each_repo_infos);
  
  return user_each_repo;
}

export {
  createRepos,
};