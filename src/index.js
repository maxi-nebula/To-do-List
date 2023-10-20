/** @format */
import loadMain from "./modules/main_page/main_page";
import defaultFolder from "./modules/default_projects/default_project";

function loadComponents() {
  loadMain();
  defaultFolder();
}

loadComponents();
