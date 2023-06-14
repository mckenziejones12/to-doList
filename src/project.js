import { popUpNewToDoForm } from "./newToDo";

export const renderProject = (oldContent, project) => {
  // Remove old content
  clearContent(oldContent);

  // Render Project header and toDoListContainer to page
  const content = document.getElementById("content");

  const todoListContainer = document.createElement("div");
  todoListContainer.setAttribute("id", "todoListContainer");

  const projectHeader = document.createElement("div");
  projectHeader.setAttribute("class", "projectHeader");
  projectHeader.textContent = project.name;

  const arrayContainer = document.createElement("ul");
  arrayContainer.setAttribute("id", "arrayContainer");

  const addNewToDoItem = document.createElement("button");
  addNewToDoItem.setAttribute("id", "addNewTodo");
  addNewToDoItem.textContent = "+ New To-Do";
  addNewToDoItem.addEventListener("click", popUpNewToDoForm);

  content.appendChild(todoListContainer);

  todoListContainer.appendChild(projectHeader);
  todoListContainer.appendChild(arrayContainer);
  todoListContainer.appendChild(addNewToDoItem);

  // Render out todo items
  for (const todo of project.todos) {
    const todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todoItem");
    const toDoTitle = document.createElement("li");
    toDoTitle.setAttribute("class", "todoTitle");
    toDoTitle.textContent = todo.name;
    const todoDueDate = document.createElement("div");
    todoDueDate.setAttribute("class", "todoDueDate");
    todoDueDate.textContent = todo.dueDfate;

    arrayContainer.append(todoItem);
    todoItem.appendChild(toDoTitle);
    todoItem.appendChild(todoDueDate);
  }
};

// Remove all children of currentContent
export const clearContent = (currentContent) => {
  const oldContent = currentContent;
  while (oldContent.firstChild) {
    currentContent?.removeChild(oldContent.lastChild);
  }
};

/*
Structure of a Project and its todos.
The shape of the data.

// Project
{
  name: '',
  todos: [
    {},
    {},
    {}
  ]
}

// Todo Item
{
  name: '',
  dueDate: ''
  completed: true/false
}

*/
