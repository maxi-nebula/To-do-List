/** @format */

import "../default_projects/default_project.css";
import createAddButton from "../add_Button/addButton";

function defaultFolder() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main_container");
  const defaultFolder = document.createElement("div");
  const defaultHeader = document.createElement("div");
  const defaultFooter = document.createElement("div");
  defaultHeader.innerText = "Everything";
  defaultHeader.classList.add("default_header");
  defaultFooter.id = "dFooter";
  defaultFooter.classList = "default_footer";
  defaultFolder.id = "dfolder";
  defaultFolder.classList.add("default_folder");

  const container = document.getElementById("container");
  container.appendChild(mainContainer);

  defaultFolder.appendChild(defaultHeader);
  defaultFolder.appendChild(defaultFooter);
  mainContainer.appendChild(defaultFolder);
  createAddButton("+");
}

export default defaultFolder;
