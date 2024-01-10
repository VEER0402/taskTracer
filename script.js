document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const deadline = document.getElementById('task-deadline').value;

        if (title.trim() === '') {
            alert('Task title cannot be empty.');
            return;
        }

        const taskItem = createTaskItem(title, description, deadline);
        taskList.appendChild(taskItem);

        taskForm.reset();
    });

    function createTaskItem(title, description, deadline) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;

        const deadlineElement = document.createElement('p');
        deadlineElement.textContent = `Deadline: ${deadline}`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function () {
            taskItem.classList.toggle('completed');
        });

        taskItem.appendChild(titleElement);
        taskItem.appendChild(descriptionElement);
        taskItem.appendChild(deadlineElement);
        taskItem.appendChild(completeButton);

        return taskItem;
    }
});
