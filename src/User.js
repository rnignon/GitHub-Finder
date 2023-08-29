const accessToken = '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';
export default class User {

  constructor(username) {
    this.username = username;
    this.apiUrl = `https://api.github.com/users/${this.username}`;
    this.userInfo = null;
    this.userRepos = null;
  }

  async fetchInfo() {
    try {
      const info = await fetch(this.apiUrl, {method: 'GET', headers: {'Authorization': `Bearer ${accessToken}`,
                                                                      'Accept' : 'application/vnd.github.v3+json'}});
      // const info = await fetch(this.apiUrl);
      if (info.ok) {
        this.userInfo = await info.json();
        return true;
      } else {
        return false;
      }
    } catch (msg) {
      console.error(msg);
    }
  }

  getInfo() {
    if (this.userInfo) {
      return this.userInfo;
    } else {
      console.log('User data not fetched yet.');
      return null;
    }
  }

  async fetchRepos() {
    try {
      const repos = await fetch(this.userInfo.repos_url, {method: 'GET', headers: {'Authorization': `Bearer ${accessToken}`,
                                                                      'Accept' : 'application/vnd.github.v3+json'}});
      // const repos = await fetch(this.userInfo.repos_url);
      if (repos.ok) {
        this.userRepos = await repos.json();
      }
    } catch (msg) {
      console.error(msg);
    }
  }

  getRepos() {
    if (this.userRepos) {
      return this.userRepos;
    } else {
      console.log('Repos data not fetched yet.');
      return null;
    }
  }
}