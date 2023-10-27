/** @format */
let fromStorage = [];

function retrieveData(task) {
  let retrievedFromStorage = localStorage.getItem("addedTasks");
  //console.log(JSON.parse(retrievedFromStorage));
  const parsedDate = JSON.parse(retrievedFromStorage);

  return parsedDate;
}

export default retrieveData;
