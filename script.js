// CheckBox Click Hendeling & Complete Element Generate

function completeTask(e) {
  const checkBox = e.target.parentNode;
  const label = checkBox.querySelector("label");
  const labelData = label.innerText;
  const completeElement = generateComplateElement(labelData);
  const ulElement = document.querySelector(".complete-list ul");
  ulElement.appendChild(completeElement);

  checkBox.parentNode.removeChild(checkBox);
}

// Delete Button Event Hendeling & Remove Complete Element
function deleteTask(e) {
  const deleteButton = e.target
  const liElement = deleteButton.parentNode
  const removeBtn = liElement.parentNode.removeChild(liElement)

  // console.log(removeBtn)
  // console.log("Hello I am Delete Button");
}

// Generate Incomplate Element
function generateIncomplateElement(taskName) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  const inputItem = document.createElement("input");
  inputItem.setAttribute("type", "checkbox");
  inputItem.onchange = completeTask;
  const label = document.createElement("label");
  label.innerText = taskName;
  listItem.append(inputItem, label);
  return listItem;
}

// Generate Complate Element
function generateComplateElement(taskName) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  const button = document.createElement("button");
  button.classList.add("delete");
  button.innerText = "Delete";
  button.onclick = deleteTask;
  listItem.append(taskName, " ", button);
  // console.log(listItem);
  return listItem;
}

// Data Input Field Hendeling
const inputForm = document.querySelector("form");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputData = inputForm.querySelector("#new-task");
  const taskData = inputData.value;
  const taskName = taskData;
  const incompleteTask = generateIncomplateElement(taskName);
  document.querySelector("#items").appendChild(incompleteTask);

  inputData.value = "";
});
