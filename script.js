// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        // Add event listener for task deletion
        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
}

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);

// Event listener for pressing Enter key
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
