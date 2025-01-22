document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a button to mark as completed
        const completeButton = document.createElement('button');
        completeButton.textContent = '✔️';
        completeButton.onclick = () => {
            li.classList.toggle('completed');
        };
        li.appendChild(completeButton);

        // Create a button to remove the task
        const removeButton = document.createElement('button');
        removeButton.textContent = '❌';
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };
        li.appendChild(removeButton);

        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input
    };

    // Add task on button click
    addTaskButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});