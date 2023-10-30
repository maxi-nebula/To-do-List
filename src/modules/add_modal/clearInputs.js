/** @format */

function clearInputs(titleField, descriptionField) {
  const tField = document.getElementById(`${titleField}`);
  const dField = document.getElementById(`${descriptionField}`);

  tField.value = "";
  dField.value = "";
  // return clearInputs;
}

export default clearInputs;
