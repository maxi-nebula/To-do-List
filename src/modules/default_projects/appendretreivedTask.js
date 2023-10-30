/** @format */

import createElement from "../common/createElement";
import "../common/appendtasks.css";

function appendretreivedTask(retreivedData) {
  const olList = document.getElementById("taskList");
  console.log(olList);
  retreivedData.forEach((data) => {
    let listItem = createElement("li", "", "", "");
    const addedTaskDiv = createElement("div", "atask", "added_task", "");
    const checkBox = document.createElement("input");
    const checkBoxDiv = createElement("div", "cdiv", "task_checkbox", "");
    const imageHolder = createElement("div", "idiv", "image_holder", "");
    checkBoxDiv.appendChild(checkBox);
    checkBox.type = "checkbox";
    checkBox.className = "check_box";

    const taskPara = createElement("p", "tpara", "para_title", `${data.title}`);
    const datePara = createElement("p", "dpara", "", ` ${data.dueDate} `);

    const priorityPara = createElement(
      "p",
      "ppara",
      "para_priority",
      ` ${data.priority}`
    );

    if (data.priority == "High") {
      priorityPara.style.color = `rgb(206, 7, 7)`;
    } else if (data.priority == "Medium") {
      priorityPara.style.color = `rgb(247, 103, 50)`;
    } else if (data.priority == "Low") {
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
    listItem.appendChild(addedTaskDiv);

    olList.appendChild(listItem);
  });
}

export default appendretreivedTask;
