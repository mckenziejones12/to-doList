import { popUpNewToDoForm } from "./newToDo";

export const renderProject1ToDoList = (oldContent) => {
  clearContent(oldContent);

  // Render project header and toDoListContainer to page
  const content = document.getElementById("content");

  const toDoListContainer = document.createElement("div");
  toDoListContainer.setAttribute("id", "toDoListContainer");

  const projectHeader = document.createElement("div");
  projectHeader.setAttribute("class", "projectHeader");
  projectHeader.textContent = "Project 1";

  const arrayContainer = document.createElement("ul");
  arrayContainer.setAttribute("id", "arrayContainer");

  const addNewToDoItem = document.createElement("button");
  addNewToDoItem.setAttribute("id", "addNewToDo");
  addNewToDoItem.textContent = "+ New To-Do";
  addNewToDoItem.addEventListener("click", popUpNewToDoForm);

  content.appendChild(toDoListContainer);

  toDoListContainer.appendChild(projectHeader);
  toDoListContainer.appendChild(arrayContainer);
  toDoListContainer.appendChild(addNewToDoItem);

  // create/render to-doList array to toDoListContainer
  class TodoItem {
    constructor(title, dueDate, completed) {
      this.title = title;
      this.dueDate = dueDate;
      this.completed = completed;
    }
  }

  const todoItems = [
    new TodoItem("Thing 1", "6-1-23"),
    new TodoItem("Thing 2", "7-1-23"),
  ];

  for (let i = 0; i < todoItems.length; i++) {
    const currentToDo = todoItems[i];
    currentToDo.toDoId = `toDo${i}`;
    //create div for title and due date in toDo item
    const toDoItem = document.createElement("div");
    toDoItem.setAttribute("class", "toDoItem");
    const toDoTitle = document.createElement("li");
    toDoTitle.setAttribute("class", "toDoTitle");
    toDoTitle.textContent = `${currentToDo.title}`;
    const toDoDueDate = document.createElement("div");
    toDoDueDate.setAttribute("class", "toDoDueDate");
    toDoDueDate.textContent = `${currentToDo.dueDate}`;

    arrayContainer.append(toDoItem);
    toDoItem.appendChild(toDoTitle);
    toDoItem.appendChild(toDoDueDate);
  }
};

export const clearContent = (currentContent) => {
  const oldContent = currentContent;
  while (oldContent.firstChild) {
    currentContent?.removeChild(oldContent.lastChild);
  }
};
