import "./style.css";
import { renderProject1ToDoList } from "./project1";

// Create project tabs in the nav bar that show extended
// to -do list in content section when clicked
function defaultPageLoad() {
  const navBar = document.getElementById("navBar");
  const content = document.getElementById("content");

  const navBarContainer = document.createElement("div");
  navBarContainer.setAttribute("id", "navBarContainer");

  const navBarHeader = document.createElement("div");
  navBarHeader.setAttribute("id", "navBarHeader");
  navBarHeader.textContent = "Projects";

  const navBarTabs = document.createElement("div");
  navBarTabs.setAttribute("id", "navBarTabs");

  const project1Tab = document.createElement("button");
  project1Tab.setAttribute("class", "navBarTab");
  project1Tab.textContent = "project 1";
  project1Tab.addEventListener("click", () => renderProject1ToDoList(content));

  const project2Tab = document.createElement("button");
  project2Tab.setAttribute("class", "navBarTab");
  project2Tab.textContent = "project 2";

  const addNewProjectTab = document.createElement("button");
  addNewProjectTab.setAttribute("class", "navBarTab");
  addNewProjectTab.setAttribute("id", "addNewProjectTab");
  addNewProjectTab.textContent = " + New Project";

  navBarTabs.appendChild(project1Tab);
  navBarTabs.appendChild(project2Tab);
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

defaultPageLoad();
