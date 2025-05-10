// Incomplate Task & Complete Task Event Heandleing

// Incomplate Task Checked Event Heandleing
function checkedIncompleteTask(e) {
  const checkBox = e.target;
  const taskItem = checkBox.parentNode;
  const label = taskItem.querySelector("label");
  const taskName = label.innerText;

  const taskConpleteTodo = generateComplateTodo(taskName);
  document.querySelector(".complete-list ul").appendChild(taskConpleteTodo);
  let remove = taskItem.parentNode.removeChild(taskItem);
  //   console.log(remove);
  //   console.log("Hi I am click box");
}
// Complate Task Delete Button Event Heandleing

function deleteTask(e) {
  const taskItem = e.target.parentNode;
  let remove = taskItem.parentNode.removeChild(taskItem);
//   console.log(remove);
//   console.log("Hi I am click Deleted Button");
}

// Incomplete Side
//  Generate Incomplate To-Do App element
function generateIncomplateTodo(taskName) {
  //   Create li element
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  //   Create input element
  const inputItem = document.createElement("input");
  inputItem.setAttribute("type", "checkbox");
  inputItem.onchange = checkedIncompleteTask;
  //   Create label element
  const label = document.createElement("label");
  label.innerText = taskName;
  listItem.append(inputItem, label);
  //   let incompleteElement = listItem;
  // console.log(listItem);
  return listItem;
}

// Data input Form Heandleing & Generate Incomplate To-Do
const todoForm = document.querySelector("form");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskInput = document.querySelector("#new-task");
  taskName = taskInput.value;

  const listItemtoAdd = generateIncomplateTodo(taskName);
  const listContainer = document.querySelector("#items");
  listContainer.appendChild(listItemtoAdd);

  taskInput.value = "";
});

// Complete Side
//  Generate complate To-Do App element
function generateComplateTodo(taskName) {
  //   Create li element
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  //   Create button element
  const button = document.createElement("button");
  button.classList.add("delete");
  button.innerText = "Delete";
  button.onclick = deleteTask;
  listItem.append(taskName, " ", button);
  //   let incompleteElement = listItem;
  // console.log(listItem);
  return listItem;
}

// Data Generate Complate To-Do
