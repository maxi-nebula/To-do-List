/** @format */

function retrieveData() {
  let retreivedStorage = localStorage.getItem("tasksAdded");

  return retreivedStorage;
}

export default retrieveData;
