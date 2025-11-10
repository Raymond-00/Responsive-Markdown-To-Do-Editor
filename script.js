// Markdown Preview
const markdownInput = document.getElementById("markdownInput");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
  preview.innerHTML = marked.parse(markdownInput.value);
});

// To-Do List with localStorage
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  todoList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(${index})">❌</button>`;
    todoList.appendChild(li);
  });
}

function addTask() {
  const task = todoInput.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    todoInput.value = "";
    loadTasks();
  }
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

loadTasks();
