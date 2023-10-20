/** @format */

import "../default_projects/default_project.css";

function defaultFolder() {
  const defaultFolder = document.createElement("div");
  const defaultHeader = document.createElement("div");
  defaultHeader.innerText = "Everything";
  defaultFolder.id = "dfolder";
  defaultFolder.classList.add("default_container");

  const container = document.getElementById("container");
  defaultFolder.appendChild(defaultHeader);
  container.appendChild(defaultFolder);
}

export default defaultFolder;
