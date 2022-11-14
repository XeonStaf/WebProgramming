(function () {
    let items = JSON.parse(localStorage.getItem("tasks"))
    if (items == undefined) {
        const tasks =
            [
                {
                    'id': Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                    'name': "test",
                    'status': 0
                },
                {
                    'id': Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                    'name': "test2",
                    'status': 1
                },
            ];

        localStorage.setItem('tasks', JSON.stringify(tasks));
} })();


function generateTask(text, status, id) {
    return `<span id="task_${id}" class="task-item ${status ? "task-item-done": ""}"> 
            ${ status ? " ": "<button onclick='markAsDone(" + id + ")'>mark as done</button>" }${text}</span>` + '\n'
}


function outputTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let result = ""
    for(let i = 0; i < tasks.length; i++)
    {
        result += generateTask(tasks[i].name, tasks[i].status, tasks[i].id);
    }
    console.log(result)
    document.getElementById("task-list").innerHTML = result;
}

outputTasks();



function addTask() {
    let text = document.getElementById('input-task-form').value
    let restoredTasks = JSON.parse(localStorage.getItem('tasks'));
    restoredTasks.push({
        'name': text,
        'status': 0,
        'id':  Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    })

    localStorage.setItem('tasks', JSON.stringify(restoredTasks));
    outputTasks()
}

function markAsDone(id) {
    let element = document.getElementById("task_" + id);
    element.classList.add("task-item-done");
    element.innerHTML = element.innerHTML.split("</button>")[1];

    let restoredTasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < restoredTasks.length; i++) {
        if (restoredTasks[i].id === id) {
            restoredTasks[i].status = 1
        }
    }
    localStorage.setItem('tasks', JSON.stringify(restoredTasks));

}