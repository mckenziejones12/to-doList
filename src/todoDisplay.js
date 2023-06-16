import { Storage } from "./classes/Storage";
import { Todo } from "./classes/Todo";
import { clearChildren } from ".";
import { renderProject } from "./projectDisplay";

const storage = new Storage();

export const popUpNewToDoForm = () => {
  const newTodoContainer = document.getElementById("newTodoContainer");
  newTodoContainer.style.display = "block";
};

export const addNewTodo = (e) => {
  // Prevent default form behavior of submitting
  e.preventDefault();

  const oldContent = document.getElementById("content");
  const oldNav = document.getElementById("navBar");

  const newTodoContainer = document.getElementById("newTodoContainer");
  const newTodoForm = document.getElementById("newTodoForm");

  const oldProjects = storage.get("projects") || [];

  // Create a new todo
  const newTodo = new Todo(
    newTodoForm.newTodo.value,
    newTodoForm.newDueDate.value
  );

  console.log(oldProjects);
  // Find current project
  const projectHeader = document.getElementsByClassName("projectHeader")[0];
  const projectToUpdate = oldProjects.find(
    (oldProject) =>
      oldProject.identifier == parseInt(projectHeader.dataset.identifier)
  );

  // Update the project
  projectToUpdate.todos.push(newTodo);

  // Set projects again in storage with updated project with new todo
  storage.set(
    "projects",
    oldProjects.map((oldProject) =>
      oldProject.identifier === projectToUpdate.identifier
        ? projectToUpdate
        : oldProject
    )
  );

  // Hide new project container again
  newTodoContainer.style.display = "none";

  clearChildren(oldContent);

  // Clear form value
  newTodoForm.newTodo.value = "";
  newTodoForm.newDueDate.value = "";

  // Re-render project page
  renderProject(projectToUpdate);
};
