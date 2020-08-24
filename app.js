var input = document.getElementById("input");
var list = document.getElementById("list");

var todos = [];

function Add() {

 if(input.value !== "") {
     todos.push(input.value);
     input.value = "";
     render();

 }
    else{
     alert('Fill tha input')
 }
}

function render() {
    list.innerHTML = "";
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = todos[i] + '<button onclick="setValueForEdit(' + i + ')"> Edit </button>' + '<button onclick="removeTodo(' + i + ')">Delete</button>';
        list.appendChild(li);
}

}

function removeTodo(i) {
    todos.splice(i, 1);
    render();
}

var btn = document.getElementsByClassName('btn');
var indexForEdit;

function editTodo() {
if(input.value !== ""){

    todos.splice(indexForEdit, 1, input.value);
    render();
    btn[0].style.display = "inline";
    btn[1].style.display = "none";
    input.value = "";
}
    else{
    alert('fill tha input');
}
}

function setValueForEdit(i) {
    btn[0].style.display = "none";
    btn[1].style.display = "inline";
    indexForEdit = i;
    input.value = todos[i];
}




























