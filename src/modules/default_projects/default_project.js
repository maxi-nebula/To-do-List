/** @format */

import "../default_projects/default_project.css";
import createAddButton from "../add_Button/addButton";
import createElement from "../common/createElement";
import retrieveData from "../common/retrieveData";
import appendTasks from "../common/appendtasks";
import appendretreivedTask from "../default_projects/appendretreivedTask";

function defaultFolder() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main_container");
  const defaultFolder = createElement("div", "dfolder", "d_folder", "");

  const defaultHeader = document.createElement("div");
  const defaultFooter = document.createElement("div");
  defaultFolder.appendChild(defaultHeader);
  const rData = retrieveData();

  const tList = createElement("ol", "taskList", "", "");
  tList.type = "1";

  /* rData.forEach((data) => {
    const dataListItem = createElement("li", "", "", `${data.title}`);
    tList.appendChild(dataListItem);
  });*/

  defaultHeader.innerText = "Everything";
  defaultHeader.classList.add("default_header");
  defaultFooter.id = "dFooter";
  defaultFooter.classList = "default_footer";
  defaultFolder.id = "dfolder";
  defaultFolder.classList.add("default_folder");

  const container = document.getElementById("container");
  container.appendChild(mainContainer);
  defaultFolder.appendChild(tList);
  console.log(tList);

  defaultFolder.appendChild(defaultFooter);
  mainContainer.appendChild(defaultFolder);
  createAddButton("+");
  appendretreivedTask(rData);
}

export default defaultFolder;
