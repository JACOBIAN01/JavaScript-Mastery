document.getElementById("AddTaskButton").addEventListener('click',addTask);

function addTask(){
    const taskInput = document.getElementById("taskinput");
    const taskText = taskInput.value.trim()

    if(taskText){
        const taskList = document.getElementById("taskList");
        const li = document.createElement('li');
        li.textContent = taskText;

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
