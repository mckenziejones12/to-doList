import { popUpNewToDoForm } from "./todoDisplay";
import { Project } from "./classes/Project";
import { clearChildren } from ".";
import { renderPage } from ".";
import { Storage } from "./classes/Storage";
import { deleteTodo } from "./todoDisplay";

const storage = new Storage();

export const renderProject = (projectIdentifier) => {
  const project = storage
    .get("projects")
    .find((p) => p.identifier === projectIdentifier);
  const oldContent = document.getElementById("content");
  // Remove old content
  clearChildren(oldContent);

  // Render Project header and toDoListContainer to page
  const content = document.getElementById("content");

  const todoListContainer = document.createElement("div");
  todoListContainer.setAttribute("id", "todoListContainer");

  const projectHeader = document.createElement("div");
  projectHeader.setAttribute("class", "projectHeader");
  projectHeader.textContent = project.name;
  projectHeader.setAttribute("data-identifier", project.identifier);

  const arrayContainer = document.createElement("ul");
  arrayContainer.setAttribute("id", "arrayContainer");

  const addNewToDoItem = document.createElement("button");
  addNewToDoItem.setAttribute("id", "addNewTodoBtn");
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
    todoDueDate.textContent = todo.dueDate;
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", () =>
      deleteTodo(project.identifier, todo.identifier)
    );

    arrayContainer.append(todoItem);
    todoItem.appendChild(toDoTitle);
    todoItem.appendChild(todoDueDate);
    todoItem.appendChild(deleteBtn);
  }
};

export const popUpNewProjectForm = () => {
  const newProjectContainer = document.getElementById("newProjectContainer");
  newProjectContainer.style.display = "block";
};

export const addNewProject = (e) => {
  // Prevent default form behavior of submitting
  e.preventDefault();

  // Grab old content to clear
  const oldContent = document.getElementById("content");
  // Grab old nav to clear
  const oldNav = document.getElementById("navBar");

  // Grab new project container
  const newProjectContainer = document.getElementById("newProjectContainer");
  // Grab new project form
  const newProjectForm = document.getElementById("newProjectForm");

  // Get projects from storage if they exist, otherwise default to empty array
  const oldProjects = storage.get("projects") || [];

  // Create a new project
  const newProject = new Project(newProjectForm.newProjectName.value, []);

  // Set projects again in storage
  storage.set("projects", [...oldProjects, newProject]);

  // Hide new project container again
  newProjectContainer.style.display = "none";

  // Clear old content, nav
  clearChildren(oldContent);
  clearChildren(oldNav);

  // Clear form value
  newProjectForm.newProjectName.value = "";

  // Re-render page
  renderPage();
};
