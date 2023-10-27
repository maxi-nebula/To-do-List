/** @format */

import retrieveData from "../common/retrieveData";
import createElement from "./createElement";

function appendTasks(addedTasks, fID) {
  const folder = document.getElementById(`${fID}`);
  const latestTask = addedTasks.slice(-1);

  const latestToBeAppended = createElement(
    "div",
    "",
    "",
    `${latestTask[0].title}`
  );

  folder.appendChild(latestToBeAppended);
}

export default appendTasks;
