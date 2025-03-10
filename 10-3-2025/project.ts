interface Task {
    id:number;
    title: string;
    status:string;
    startDate:string;
    endDate:string;
}

let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
let taskNum = tasks.length;
let id = taskNum++;
displayTasks();

const form = document.getElementById("taskForm") as HTMLFormElement;
form.addEventListener("submit",(submission)=>{
    submission.preventDefault();

    const title = (document.getElementById("title") as HTMLInputElement).value;
    const status = (document.getElementById("status") as HTMLInputElement).value;
    const startDate = (document.getElementById("startDate") as HTMLInputElement).value;
    const endDate = (document.getElementById("endDate") as HTMLInputElement).value;

    const NewTask: Task ={id, title, status, startDate, endDate};

    tasks.push(NewTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    form.reset();

    displayTasks();

})

function displayTasks(): void {
    const container = document.getElementById("taskList");
    if (container) {
        container.innerHTML = ""; 

        tasks.forEach((task) => {
            const card = document.createElement("div");
            card.classList.add("task");

            card.innerHTML = `
                <div class="task-info">
                    <span class="task-title">${task.title}</span>
                    <span class="task-dates">Start: ${task.startDate} | End: ${task.endDate}</span>
                </div>
                <span class="task-status ${task.status}">${task.status}</span>`;

            container.appendChild(card); 
        });
    }
}

