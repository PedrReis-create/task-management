function addTask() {
    let taskText = document.getElementById('tasks').value;

    // if empty
    if (taskText === '') {
        alert('Add a valid text');
        return;
    }

    localStorage.setItem('task1S', taskText);

    createTaskElement(taskText);

    // clean input
    document.getElementById('tasks').value = '';
}

function createTaskElement(task) {

    function capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const taskList = document.getElementById('taskList');

    let taskItem = document.createElement('li');

    taskItem.textContent = capitalizeFirstLetter(task);

    // remove button
    const removeButton = document.createElement('button');

    removeButton.textContent = 'Remove task';
    removeButton.style.padding = '3px';
    removeButton.style.marginLeft = '10px';

    taskItem.appendChild(removeButton);

    removeButton.onclick = function () {
        removeTask(removeButton);
    };

    // done button
    const doneButton = document.createElement('button');

    doneButton.textContent = 'Done';
    doneButton.style.padding = '3px';
    doneButton.style.marginLeft = '10px';

    taskItem.appendChild(doneButton);

    doneButton.onclick = function () {
        completeTask(doneButton);
    };

    taskList.appendChild(taskItem);
}

function loadTask() {
    const savedTask = localStorage.getItem('task1S');

    if (savedTask) {
        createTaskElement(savedTask);
    }
}

loadTask();

function removeTask(button) {
    let buttonParent = button.parentElement;
    buttonParent.remove();
}

function completeTask(button) {
    let buttonParent = button.parentElement;
    buttonParent.style.textDecoration = 'line-through';
}