const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task 🐰");

        return;
    }


    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = `🐇 ${taskText}`;

    span.classList.add("task-text");


    const buttonDiv = document.createElement("div");

    buttonDiv.classList.add("task-buttons");


    const doneBtn = document.createElement("button");

    doneBtn.textContent = "Done";

    doneBtn.classList.add("done-btn");

    doneBtn.addEventListener("click", () => {

        span.classList.toggle("completed");

    });


    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {

        li.remove();

    });

    buttonDiv.appendChild(doneBtn);

    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);

    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    // Clear Input
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        addTask();

    }

});