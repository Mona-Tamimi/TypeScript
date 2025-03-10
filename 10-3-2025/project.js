var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
var taskNum = tasks.length;
var id = taskNum++;
displayTasks();
var form = document.getElementById("taskForm");
form.addEventListener("submit", function (submission) {
    submission.preventDefault();
    var title = document.getElementById("title").value;
    var status = document.getElementById("status").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var NewTask = { id: id, title: title, status: status, startDate: startDate, endDate: endDate };
    tasks.push(NewTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    form.reset();
    displayTasks();
});
function displayTasks() {
    var container = document.getElementById("taskList");
    if (container) {
        container.innerHTML = "";
        tasks.forEach(function (task) {
            var card = document.createElement("div");
            card.classList.add("task");
            card.innerHTML = "\n                <div class=\"task-info\">\n                    <span class=\"task-title\">".concat(task.title, "</span>\n                    <span class=\"task-dates\">Start: ").concat(task.startDate, " | End: ").concat(task.endDate, "</span>\n                </div>\n                <span class=\"task-status ").concat(task.status, "\">").concat(task.status, "</span>");
            container.appendChild(card);
        });
    }
}
