const CHECK_PLEASE = "<button onclick = 'uncrossItem(this)' ><svg viewBox='0 0 448 512' width='13' title='check-square' style='fill: grey'><path d='M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z' /></svg></button>";

const UNCROSS = "<button onclick = 'checkCross(this)'><svg viewBox='0 0 448 512' width='13' title='square'><path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z' /></svg></button>"

const TRASH = "<button class='trash' onclick = 'deleteItem(this)' ><svg viewBox='0 0 448 512' width='13' title='trash-alt'><path d='M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z' /></svg></button>"

let userInput = document.getElementById("user-input");
let list = document.getElementById("list")
if(document.cookie != "") loadItems();

//userInput.focus()

document.addEventListener("keydown",(key) => {
  //console.log(key.code);
  if (key.code == "Enter") addItem(key);
});

document.addEventListener("beforeunload", () => saveItems());


function addItem(event) {
 if (userInput.value != "") {
   let _newItem = userInput.value;
   let _elem = document.createElement("li");
  _elem.innerText = _newItem;
   _elem.innerHTML = UNCROSS + _elem.innerHTML + " " + TRASH;
  list.append(_elem);
  userInput.value = "";
  userInput.focus();
   
 }
}

function clearList(event) {
  list.innerHTML = "";
}

function checkCross(elem) {
  let thisList = elem.parentElement;
  thisList.style.textDecoration = "solid grey 0.1em line-through";
  thisList.style.color = "grey";
  thisList.innerHTML = CHECK_PLEASE + thisList.innerText + " " + TRASH;
  
}

function uncrossItem(elem) {
  let thisList = elem.parentElement;
  thisList.style.textDecoration = "none";
  thisList.style.color = "black";
  thisList.innerHTML = UNCROSS + thisList.innerText + " " + TRASH;
}

function deleteItem(elem) {
 elem.parentElement.innerHTML = "";
}

function saveItems() {
  document.cookie = "items= " + list.innerHTML;
  
}

function loadItems() {
  cookieArr = document.cookie.substring(6);
  list.innerHTML = cookieArr;
}
