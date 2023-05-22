import "./style.css";
console.log("hello world");

// Create project tabs in the nav bar that show extended
// to -do list in content section when clicked
function navBarLoad() {
  const navBar = document.getElementById("navBar");
  const content = document.getElementById("content");

  const navBarContainer = document.createElement("div");
  navBarContainer.setAttribute("id", "navBarContainer");
  const navBarHeader = document.createElement("div");
  navBarHeader.setAttribute("id", "navBarHeader");
  navBarHeader.textContent = "Projects";
  const navBarTabs = document.createElement("div");
  navBarTabs.setAttribute("id", "navBarTabs");
  const weddingTab = document.createElement("button");
  weddingTab.setAttribute("class", "navBarTab");
  weddingTab.textContent = "Wedding";
  const webDevTab = document.createElement("button");
  webDevTab.setAttribute("class", "navBarTab");
  webDevTab.textContent = "Web Dev";
  const addNewProjectTab = document.createElement("button");
  addNewProjectTab.setAttribute("class", "navBarTab");
  addNewProjectTab.setAttribute("id", "addNewProjectTab");
  addNewProjectTab.textContent = " + New Project";
  navBarTabs.appendChild(weddingTab);
  navBarTabs.appendChild(webDevTab);
  navBarTabs.appendChild(addNewProjectTab);
  navBarContainer.appendChild(navBarHeader);
  navBarContainer.appendChild(navBarTabs);

  navBar.appendChild(navBarContainer);
}

navBarLoad();

//show a default to-do list
