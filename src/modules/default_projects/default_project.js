/** @format */

import "../default_projects/default_project.css";
import createAddButton from "../add_Button/addButton";
import createElement from "../common/createElement";
import retrieveData from "../common/retrieveData";
const retrievedDataArray = [];
function defaultFolder() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main_container");
  const defaultFolder = createElement("div", "dfolder", "d_folder", "");

  const defaultHeader = document.createElement("div");
  const defaultFooter = document.createElement("div");
  defaultFolder.appendChild(defaultHeader);
  const rData = retrieveData();
  rData.forEach((data) => {
    const dataDiv = createElement("div", "taskAdded", "", `${data.title}`);
    defaultFolder.appendChild(dataDiv);
  });

  defaultHeader.innerText = "Everything";
  defaultHeader.classList.add("default_header");
  defaultFooter.id = "dFooter";
  defaultFooter.classList = "default_footer";
  defaultFolder.id = "dfolder";
  defaultFolder.classList.add("default_folder");

  const container = document.getElementById("container");
  container.appendChild(mainContainer);

  defaultFolder.appendChild(defaultFooter);
  mainContainer.appendChild(defaultFolder);
  createAddButton("+");
}

export default defaultFolder;
