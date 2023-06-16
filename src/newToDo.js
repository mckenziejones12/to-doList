import { Project } from "./classes/Project";
import { Storage } from "./classes/Storage";
import { clearContent } from "./projectDisplay";
import { renderPage } from ".";

const storage = new Storage();

export function popUpNewToDoForm() {
  const newTodoContainer = document.getElementById("newTodoContainer");
  newTodoContainer.style.display = "block";
}

export function popUpNewProjectForm() {
  const newProjectContainer = document.getElementById("newProjectContainer");
  newProjectContainer.style.display = "block";
}

export function addNewProject(e) {
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
  const newProject = new Project(newProjectForm.newProject.value, []);

  // Set projects again in storage
  storage.set("projects", [...oldProjects, newProject]);

  // Hide new project container again
  newProjectContainer.style.display = "none";

  // Clear old content, nav
  clearContent(oldContent);
  clearContent(oldNav);

  // Clear form value
  newProjectForm.newProject.value = "";

  // Re-render page
  renderPage();
}
