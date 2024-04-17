function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev, targetColumn) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var task = document.getElementById(data);
    ev.target.appendChild(task);
  
    // Update task status based on the target column
    task.dataset.status = targetColumn;
    updateTaskBackgroundColor(task);
  }
  
  function shiftTask(taskId, targetColumnId) {
    var task = document.getElementById(taskId);
    var targetColumn = document.getElementById(targetColumnId);
    targetColumn.appendChild(task);
  
    // Update task status based on the target column
    task.dataset.status = targetColumnId.replace("-column", "");
    updateTaskBackgroundColor(task);
  }
  
  function updateTaskBackgroundColor(task) {
    var status = task.dataset.status;
    switch (status) {
      case "todo":
        task.classList.remove("bg-warning", "bg-success");
        task.classList.add("bg-primary");
        break;
      case "inprogress":
        task.classList.remove("bg-primary", "bg-success");
        task.classList.add("bg-warning");
        break;
      case "done":
        task.classList.remove("bg-primary", "bg-warning");
        task.classList.add("bg-success");
        break;
    }
  }
  