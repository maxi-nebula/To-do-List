/** @format */

function createElement(elementName, elementID, elementClass, elementInnerText) {
  const elementCreated = document.createElement(`${elementName}`);
  elementCreated.id = `${elementID}`;
  elementCreated.className = `${elementClass}`;
  elementCreated.innerText = `${elementInnerText}`;

  return elementCreated;
}

export default createElement;
