const todoList= ["I am fasting" , "food"];

localStorage.setItem("todos" , JSON.stringify(todoList));
const retrieve = JSON.parse(localStorage.getItem("todos"));
console.log(retrieve);