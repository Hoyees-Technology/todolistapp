const button = document.getElementById("add-button");
const input = document.getElementById("user-input");
const listContainer = document.getElementById("list-container");


// // function to return the length of the input
function inputLength(){
    return input.value.length;
}


// // function to add event to list and will allert a message if nothing was in the input box
function addEvent(){
    if(input.value === ""){
        alert("you must write something");
    } else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}


// // function to add the "checked" class to event when clicked and to remove the event too
function doneAndRemove(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}

// // ADD LIST ITEM AFTER ENTER BUTTON IS PRESSED
function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13){
        addEvent();
    }
}




 

button.addEventListener("click", addEvent);
input.addEventListener("keypress", addListAfterKeypress);
listContainer.addEventListener("click", doneAndRemove)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();