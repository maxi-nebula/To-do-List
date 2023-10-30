/** @format */

import retrieveData from "../common/retrieveData";
import createElement from "./createElement";
import "../common/appendtasks.css";

function appendTasks(addedTasks, fID) {
  const folder = document.getElementById(`${fID}`);
  const latestTask = addedTasks.slice(-1);
  const addedTaskDiv = createElement("div", "atask", "added_task", "");
  const checkBox = document.createElement("input");
  const checkBoxDiv = createElement("div", "cdiv", "task_checkbox", "");
  const imageHolder = createElement("div", "idiv", "image_holder", "");
  checkBoxDiv.appendChild(checkBox);
  checkBox.type = "checkbox";
  checkBox.className = "check_box";

  const taskPara = createElement(
    "p",
    "tpara",
    "para_title",
    `${latestTask[0].title}`
  );
  const datePara = createElement(
    "p",
    "dpara",
    "",
    ` ${latestTask[0].dueDate} `
  );

  const priorityPara = createElement(
    "p",
    "ppara",
    "para_priority",
    ` ${latestTask[0].priority}`
  );

  if (latestTask[0].priority == "High") {
    priorityPara.style.color = `rgb(206, 7, 7)`;
  } else if (latestTask[0].priority == "Medium") {
    priorityPara.style.color = `rgb(247, 103, 50)`;
  } else if (latestTask[0].priority == "Low") {
    priorityPara.style.color = `rgb(208, 211, 39)`;
  }

  const editImg = createElement("img", "editimage", "task_images", "");
  editImg.src =
    "/home/madhumathi/repos/Intermediate-Javascript/To-do-List/src/modules/images/editing.png";
  const deleteImg = createElement("img", "deleteimage", "task_images", "");
  deleteImg.src =
    "/home/madhumathi/repos/Intermediate-Javascript/To-do-List/src/modules/images/bin.png";
  imageHolder.appendChild(editImg);
  imageHolder.appendChild(deleteImg);
  addedTaskDiv.appendChild(checkBoxDiv);
  addedTaskDiv.appendChild(taskPara);
  addedTaskDiv.appendChild(datePara);
  addedTaskDiv.appendChild(priorityPara);
  addedTaskDiv.appendChild(imageHolder);
  //ddedTaskDiv.appendChild(deleteImg);

  const latestToBeAppended = createElement("li", "", "", "");
  latestToBeAppended.appendChild(addedTaskDiv);

  // folder.appendChild(latestToBeAppended);
  const olList = document.getElementById("taskList");
  olList.appendChild(latestToBeAppended);
}

export default appendTasks;
