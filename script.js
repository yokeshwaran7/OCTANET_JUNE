const taskForm = document.getElementById('newTaskForm');
const taskList = document.getElementById('tasks');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const deadline = document.getElementById('deadline').value;
  const priority = document.getElementById('priority').value;
  const category = document.getElementById('category').value;
  
  // Create task object
  const task = {
    name: taskName,
    description: taskDescription,
    deadline: deadline,
    priority: priority,
    category: category
  };
  
  // Clear form fields
  taskForm.reset();
  
  // Add task to the task list
  addTaskToList(task);
});

function addTaskToList(task) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <h3>${task.name}</h3>
    <p><strong>Description:</strong> ${task.description}</p>
    <p><strong>Deadline:</strong> ${task.deadline}</p>
    <p><strong>Priority:</strong> ${task.priority}</p>
    <p><strong>Category:</strong> ${task.category}</p>
    <button onclick="markAsCompleted(this)">Mark as Completed</button>
  `;
  
  // Assign priority class for styling
  switch (task.priority) {
    case 'high':
      taskItem.classList.add('high-priority');
      break;
    case 'medium':
      taskItem.classList.add('medium-priority');
      break;
    case 'low':
      taskItem.classList.add('low-priority');
      break;
    default:
      break;
  }
  
  // Append task to the task list
  taskList.appendChild(taskItem);
}

function markAsCompleted(button) {
  const taskItem = button.parentNode;
  taskItem.classList.add('completed');
}
