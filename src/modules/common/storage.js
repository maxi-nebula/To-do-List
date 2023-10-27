/** @format */
import appendTasks from "./appendtasks";
import retrieveData from "./retrieveData";
const tasksAdded = [];
function storeData() {
  const taskDetails = new Object();
  const folderId = document.getElementById("dfolder").id;

  const title = document.getElementById("ttitle").value;
  taskDetails.title = title;
  const description = document.getElementById("tdescription").value;
  taskDetails.description = description;
  const dueDate = document.getElementById("tdue").value;
  taskDetails.dueDate = dueDate;
  const priority = document.getElementById("tpriority").value;
  taskDetails.priority = priority;

  tasksAdded.push(taskDetails);

  localStorage.setItem("addedTasks", JSON.stringify(tasksAdded));

  appendTasks(tasksAdded, folderId);
}

export default storeData;
