class User {
  constructor(username) {
    this.#username = username;
    this.#apiUrl = `https://api.github.com/users/${this.username}`;
  }
}