import "./style.css";
import { renderProject } from "./projectDisplay";
import { Storage } from "./classes/Storage";
import { popUpNewProjectForm } from "./newToDo";
import { addNewProject } from "./newToDo";

const storage = new Storage();

function seedData() {
  storage.set("projects", [
    {
      name: "Project 1",
      todos: [
        {
          name: "Groom dog",
          dueDate: "Today",
        },
      ],
    },
    {
      name: "Project 2",
      todos: [
        {
          name: "Buy groceries",
          dueDate: "Tomorrow",
        },
      ],
    },
    {
      name: "Project 3",
      todos: [
        {
          name: "Mow lawn",
          dueDate: "Saturday",
        },
      ],
    },
    {
      name: "Project 4",
      todos: [
        {
          name: "Make dinner",
          dueDate: "Saturday",
        },
      ],
    },
  ]);
}

// Create project tabs in the nav bar that show extended
// to -do list in content section when clicked
export function renderPage() {
  const navBar = document.getElementById("navBar");
  const content = document.getElementById("content");

  const navBarContainer = document.createElement("div");
  navBarContainer.setAttribute("id", "navBarContainer");

  const navBarHeader = document.createElement("div");
  navBarHeader.setAttribute("id", "navBarHeader");
  navBarHeader.textContent = "Projects";

  const navBarTabs = document.createElement("div");
  navBarTabs.setAttribute("id", "navBarTabs");

  // Get projects from storage
  const projects = storage.get("projects") || [];

  // Create a project tab for each project
  for (const project of projects) {
    const projectTab = document.createElement("button");
    projectTab.setAttribute("class", "navBarTab");
    projectTab.textContent = project.name;
    projectTab.addEventListener("click", () => renderProject(content, project));

    navBarTabs.appendChild(projectTab);
  }

  const addNewProjectTab = document.createElement("button");
  addNewProjectTab.setAttribute("class", "navBarTab");
  addNewProjectTab.setAttribute("id", "addNewProjectTab");
  addNewProjectTab.textContent = " + New Project";
  addNewProjectTab.addEventListener("click", popUpNewProjectForm);
  const submitProjectBtn = document.querySelector("#submitProjectBtn");
  submitProjectBtn.addEventListener("click", addNewProject);

  navBarTabs.appendChild(addNewProjectTab);

  navBarContainer.appendChild(navBarHeader);
  navBarContainer.appendChild(navBarTabs);

  navBar.appendChild(navBarContainer);

  const contentContainer = document.createElement("div");
  contentContainer.setAttribute("id", "contentContainer");

  const selectProjectMessage = document.createElement("div");
  selectProjectMessage.setAttribute("id", "selectProjectMsg");
  selectProjectMessage.textContent = "Select a project to see your to-do list.";

  contentContainer.appendChild(selectProjectMessage);
  content.appendChild(contentContainer);
}

renderPage();
