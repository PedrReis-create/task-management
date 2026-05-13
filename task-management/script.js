function addTask() {
    let taskText = window.document.getElementById('tasks').value; // text typed by user
    // if empty
    if (taskText === '') {
        window.alert('Add a valid text');
        return;
    };

    const taskList = window.document.getElementById('taskList'); // getting the list

    let taskItem = document.createElement('li'); // add to list

    function capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    taskItem.innerText = capitalizeFirstLetter(taskText);

    let add1 = taskList.appendChild(taskItem); // adding to list
    localStorage.setItem('task1S', taskText)
    //when addTask() : clean input
    document.getElementById('tasks').value = ''
    //////////////////-------------------------------------------------

    // remove button variable
    const removeButton = document.createElement('button');

    // removeButton style
    removeButton.textContent = 'Remove task';
    removeButton.style.padding = '3px';
    removeButton.style.marginLeft = '10px';

    // adding
    taskItem.appendChild(removeButton);

    // when clicked, calls function
    removeButton.onclick = function () {
        removeTask(removeButton)
    };

    //////////////////-------------------------------------------------

    // done task button
    const doneButton = document.createElement('button');

    // doneButton style
    doneButton.textContent = 'Done';
    doneButton.style.padding = '3px';
    doneButton.style.marginLeft = '10px';

    // adding
    taskItem.appendChild(doneButton);

    // when clicked, calls function
    doneButton.onclick = function () {
        completeTask(doneButton)
    };

}

function removeTask(button) {
    let buttonParent = button.parentElement;
    buttonParent.remove();

};

function completeTask(button2) {
    let buttonParent2 = button2.parentElement;
    buttonParent2.style.textDecoration = 'line-through';
};

function loadTask () {
    const savedTask = localStorage.getItem('task1S')

    if(savedTask){
        const taskList = window.document.getElementById('taskList')

        let li = document.createElement('li')
        li.textContent = savedTask
        taskList.appendChild(li)
    }
}
loadTask()