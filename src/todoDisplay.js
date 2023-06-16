import { Storage } from "./classes/Storage";
import { Todo } from "./classes/Todo";

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

  // Set projects again in storage
  // storage.set("projects", [...oldProjects, newProject]);

  // Hide new project container again
  newTodoContainer.style.display = "none";

  clearChildren(oldContent);
  clearChildren(oldNav);

  // Clear form value
  newTodoForm.newTodo.value = "";
  newTodoForm.newDueDate.value = "";

  // Re-render page
  renderPage();
};
