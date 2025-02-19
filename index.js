let inputTask = document.getElementById('input');
let addButton = document.getElementById('add');
let result = document.getElementById('result');

function addTask() {
//создаем переменную, в которой сохраняем значение пользовательского ввода
let taskValue = inputTask.value;
//вызываем функцию, где передаем значение пользовательского ввода
createTask(taskValue);
//result.textContent = taskValue;
//очищаем значение
inputTask.value = "";
} 

function createTask(text) {
    //создаем переменную, которая создает новый элемент
let newTask = document.createElement("li");
//этот новый элемент вставляем в текстовое значение
newTask.textContent = text;
result.append(newTask)
}

addButton.addEventListener("click", addTask);
