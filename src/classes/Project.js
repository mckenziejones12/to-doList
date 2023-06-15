export class Project {
  constructor(name, todos) {
    this._name = name;
    this._todos = todos;
  }

  get todos() {
    return this._todos;
  }

  get name() {
    return this._name;
  }
}
