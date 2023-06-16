export class Project {
  constructor(nameArg, todosArg) {
    this.name = nameArg;
    this.todos = todosArg;
    this.identifier = Math.floor(Math.random() * 1000);
  }
}
