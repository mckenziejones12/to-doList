export class Storage {
  constructor() {
    this.storage = localStorage;
  }

  get(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
