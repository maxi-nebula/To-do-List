/** @format */

import retrieveData from "../common/retrieveData";

function appendTasks() {
  const dataToBeAppended = JSON.parse(retrieveData());
  return dataToBeAppended;
}

export default appendTasks;
