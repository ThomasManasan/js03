//the creation of variable for lists
//1st
var form, todoList, button;
//1.1 form DOM
form = document.querySelector('form');
//1.2 form DOM
todoList = document.querySelector('ul');
//1.3 form DOM
button = document.getElementById('clear');
//2nd creatting an input form element using DOM
var input = document.getElementById('user-todo');
//2.1 Adding an event listner to the form field
form.addEventListener('submit', function(event) {
    event.preventDefault();
//2.2 Adding function todomaker : this is to carry  out the inputtedd value
    todoMaker(input.value);
    input.value = '';

})
//3rd creating a function for the list item
var todoMaker = function(text) {

    var todo = document.createElement('li');
    todo.textContent = text;
//3.3 append to add a sample inputted list
    todoList.appendChild(todo)
    //3.3 removing the bulleted format
    todo.style.listStyleType = "none";
}

//4th creation of a clear button
//4.1 creation of an event listener     

button.addEventListener('click', function() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }
});