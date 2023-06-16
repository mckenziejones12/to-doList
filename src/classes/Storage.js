export class Storage {
  constructor() {
    this.storage = localStorage;
  }

  get(key) {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
