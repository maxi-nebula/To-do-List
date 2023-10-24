/** @format */
import retrieveData from "./retrieveData";
const tasksAdded = [];
function storeData() {
  const taskDetails = new Object();

  const title = document.getElementById("ttitle").value;
  taskDetails.title = title;
  const description = document.getElementById("tdescription").value;
  taskDetails.description = description;
  const dueDate = document.getElementById("tdue").value;
  taskDetails.dueDate = dueDate;
  const priority = document.getElementById("tpriority").value;
  taskDetails.priority = priority;
  tasksAdded.push(taskDetails);

  /* localStorage.setItem("title", title);
  localStorage.setItem("description", description);
  localStorage.setItem("duedate", dueDate);
  localStorage.setItem("priority", priority);*/
  localStorage.setItem("taskDetails", JSON.stringify(tasksAdded));
  retrieveData();
}

export default storeData;
