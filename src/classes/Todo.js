export class Todo {
  constructor(nameArg, dueDateArg) {
    this.name = nameArg;
    this.dueDate = dueDateArg;
    this.identifier = Math.floor(Math.random() * 1000);
  }
}
