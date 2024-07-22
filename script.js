// Function to add a new todo item
function addTodo() {

    // create a an element to fetch user input
    const todoText = document.getElementById('new-todo').value;

    // BASE CASE: If input is empty, do nothing
    if (todoText === '') return;

    // create a an element to reference tasks added
    const todoItem = document.createElement('li');
    // assign todoItem a class
    todoItem.classList.add('todo-item');
    
    // create a an element to mark task as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // check the task if it completed, else not & update task count
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            todoItem.classList.add('completed');
        } else {
            todoItem.classList.remove('completed');
        }
        updateTaskCount();
    });

    // create an element to store the text of todoText
    const text = document.createElement('span');
    text.textContent = todoText;

    // create a delete button and set its text
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '×';

    // when clicked, delete any task and Update task count
    deleteButton.addEventListener('click', function () {
        todoItem.remove();
        updateTaskCount();
    });

    // Append checkbox, text, and delete button to the todo item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoItem.appendChild(deleteButton);

    // create a an element to reference <ul> list & add all tasks (todoItem) to it
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(todoItem);
    document.getElementById('new-todo').value = ''; // Clear input field

    updateTaskCount(); // Update task count
}

// Add a click event listener to the "Add Todo" button
document.getElementById('add-todo').addEventListener('click', addTodo);

// Add a keypress event listener to the input field for adding new todos
document.getElementById('new-todo').addEventListener('keypress',(enter) => {
    // if the user presses the Enter key add the input to ToDo list
    if (enter.key === 'Enter') {
        addTodo();
    }
});

// Function to update the task count display
function updateTaskCount() {
    
    // Get all the tasks in the list
    const totalTasks = document.querySelectorAll('#todo-list li').length;
    
    // Get the number of completed tasks
    const completedTasks = document.querySelectorAll('#todo-list li.completed').length;
    
    // Calculate the number of tasks left
    const tasksLeft = totalTasks - completedTasks;
    
    // Determine the appropriate text based on the number of tasks left
    const taskText = tasksLeft === 1 ? 'Task' : 'Tasks';
    
    // Update the task count display
    document.getElementById('task-count').textContent = `${tasksLeft} ${taskText} Left !!`;
}


// Function to mark all tasks as completed
function completeAllTasks() {

    // create an element to select all <li> elements
    const todoItems = document.querySelectorAll('#todo-list li');

    // create an element to select all <li> elements input type 'checkbox'
    const checkboxes = document.querySelectorAll('#todo-list li input[type="checkbox"]');

    // Check all checkboxes
    checkboxes.forEach(checkbox => checkbox.checked = true);

    // Update task count for all tasks
    updateTaskCount();
}

// Add a click event listener to the "Complete All" button
document.getElementById('complete-all').addEventListener('click', completeAllTasks);

// Function to filter todos based on the selected filter
function filterTodos(filter) {

    // create an elment to select all <li> elements
    const todoItems = document.querySelectorAll('#todo-list li');
    
    // for each todo item...
    todoItems.forEach(item => {
        // if the filter is "All" show all todos
        if (filter === 'all') {
            item.style.display = 'flex';
        }
        // if the filter is "incompleted" show the unchecked todos
        else if (filter === 'incompleted') {
            item.style.display = item.classList.contains('completed') ? 'none' : 'flex';
        }
        // if the filter is "completed" show the checked todos
        else if (filter === 'completed') {
            item.style.display = item.classList.contains('completed') ? 'flex' : 'none';
        }
    });
}

// Add click event listeners to filter buttons: All, Incompleted, and Completed
document.getElementById('filter-all').addEventListener('click',
    function() {
        filterTodos('all');
    }
);
document.getElementById('filter-incompleted').addEventListener('click', 
    function() {
        filterTodos('incompleted'); 
    }
);
document.getElementById('filter-completed').addEventListener('click', 
    function() {
        filterTodos('completed'); 
    }
);

 => Open the HTML file in a web browser.
 => Type a new to-do item in the input field, press Enter, or click the "Add Todo" button.
 => Click the checkbox to mark a to-do item as completed.
 => Click the "×" button to delete a to-do item.
 => Click the "Complete All" button to mark all tasks as  completed.
 => Use the filter buttons to view All, Incompleted, or Completed to-do items.