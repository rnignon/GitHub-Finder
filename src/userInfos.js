function createProfile(name, login, home, url){
  let user_profile = document.createElement('div');
  user_profile.classList.add('user-profile');
  
  user_profile.append(createName(name, login, home),
                      createAvatar(url));
  
  return user_profile;
}

function createName(name, login, home) {
  let user_name = document.createElement('div');
  user_name.classList.add('user-name');

  let name_primary = document.createElement('a');
  name_primary.classList.add('user-name-primary');
  name_primary.href = home;

  if (name == null) {
    name_primary.innerText = login;
    user_name.appendChild(name_primary);
  } else {
    name_primary.innerText = name;

    let name_secondary = document.createElement('p');
    name_secondary.classList.add('user-name-secondary');
    name_secondary.innerText = `(${login})`
    user_name.append(name_primary, name_secondary);
  }

  return user_name;
}

function createAvatar(url) {
  let user_avatar = document.createElement('img');
  user_avatar.classList.add('user-avatar');
  user_avatar.src = url;

  return user_avatar;
}

function createInfos(repo, gist, follower, following, company, blog, location, email, since, last) {
  let user_infos = document.createElement('div');
  user_infos.classList.add('user-infos');

  user_infos.append(createCounts(repo, gist, follower, following),
                    createInfo(company, blog, location, email),
                    createDateInfo(since, last));
  return user_infos;
}

function createCounts (repo, gist, follower, following) {
  let user_count = document.createElement('div');
  user_count.classList.add('user-count');

  let user_repo = document.createElement('div');
  let user_gist = document.createElement('div');
  let user_follower = document.createElement('div');
  let user_following = document.createElement('div');

  user_repo.classList.add('user-repo');
  user_gist.classList.add('user-gist');
  user_follower.classList.add('user-follower');
  user_following.classList.add('user-following');

  let user_repo_img = document.createElement('img');
  let user_gist_img = document.createElement('img');
  let user_follower_img = document.createElement('img');
  let user_following_img = document.createElement('img');

  user_repo_img.classList.add('icon');
  user_gist_img.classList.add('icon');
  user_follower_img.classList.add('icon');
  user_following_img.classList.add('icon');

  user_repo_img.src = 'assets/layers.svg';
  user_gist_img.src = 'assets/puzzle-piece.svg';
  user_follower_img.src = 'assets/users.svg';
  user_following_img.src = 'assets/heart.svg';

  let user_repo_desc = document.createElement('p');
  let user_gist_desc = document.createElement('p');
  let user_follower_desc = document.createElement('p');
  let user_following_desc = document.createElement('p');

  user_repo_desc.innerText = `Repositories : ${repo}`;
  user_gist_desc.innerText = `Gists : ${gist}`;
  user_follower_desc.innerText = `Follower : ${follower}`;
  user_following_desc.innerText = `Following : ${following}`;

  user_repo.append(user_repo_img, user_repo_desc);
  user_gist.append(user_gist_img, user_gist_desc);
  user_follower.append(user_follower_img, user_follower_desc);
  user_following.append(user_following_img, user_following_desc);

  user_count.append(user_repo, user_gist, user_follower, user_following);
  return user_count;
}

function createInfo(company, blog, location, email) {
  let user_info = document.createElement('div');
  user_info.classList.add('user-info');

  let user_company = document.createElement('div');
  let user_blog = document.createElement('div');
  let user_location = document.createElement('div');
  let user_email = document.createElement('div');

  user_company.classList.add('user-company');
  user_blog.classList.add('user-blog');
  user_location.classList.add('user-location');
  user_email.classList.add('user-email');

  let user_company_img = document.createElement('img');
  let user_blog_img = document.createElement('img');
  let user_location_img = document.createElement('img');
  let user_email_img = document.createElement('img');

  user_company_img.classList.add('icon');
  user_blog_img.classList.add('icon');
  user_location_img.classList.add('icon');
  user_email_img.classList.add('icon');

  user_company_img.src = 'assets/company.svg';
  user_blog_img.src = 'assets/blog-pencil.svg';
  user_location_img.src = 'assets/navigation.svg';
  user_email_img.src = 'assets/mail.svg';

  let user_company_desc = document.createElement('p');
  let user_blog_desc = document.createElement('p');
  let user_location_desc = document.createElement('p');
  let user_email_desc = document.createElement('p');

  user_company_desc.innerText = `Company : ${company}`;
  user_blog_desc.innerText = `Blog : ${blog}`;
  user_location_desc.innerText = `Location : ${location}`;
  user_email_desc.innerText = `Email : ${email}`;

  user_company.append(user_company_img, user_company_desc);
  user_blog.append(user_blog_img, user_blog_desc);
  user_location.append(user_location_img, user_location_desc);
  user_email.append(user_email_img, user_email_desc);

  user_info.append(user_company, user_blog, user_location, user_email);
  return user_info;
}

function createDateInfo(since, last) {
  let user_dateInfo = document.createElement('div');
  user_dateInfo.classList.add('user-dateInfo');

  let since_s = String(since).substring(0, 10);
  let last_s = String(last).substring(0, 10);

  let user_dateInfo_since = document.createElement('p');
  user_dateInfo_since.innerText = `since : ${since_s}`;
  user_dateInfo_since.classList.add('user-dateInfo-since');

  let user_dateInfo_last = document.createElement('p')
  user_dateInfo_last.innerText = `last : ${last_s}`;
  user_dateInfo_last.classList.add('user-dateInfo-last');

  user_dateInfo.append(user_dateInfo_since, user_dateInfo_last);
  return user_dateInfo;
}

export {
  createProfile,
  createInfos
}