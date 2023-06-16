import { Storage } from "./classes/Storage";

const storage = new Storage();

export function popUpNewToDoForm() {
  const newTodoContainer = document.getElementById("newTodoContainer");
  newTodoContainer.style.display = "block";
}
