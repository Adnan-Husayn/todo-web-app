$(document).ready(function() {
    // Selectors
    const todoInput = $('.todoInput');
    const todoButton = $('.addBtn');
    const todoList = $('.todoList');

    // Event Listeners
    todoButton.click(addTodo);
    todoList.on('click', '.delBtn', deleteTodo);
    todoList.on('click', 'li', check);
    // Functions
    function addTodo(event) {
        event.preventDefault();
        // Todo DIV
        const todoDIV = $('<div>');
        todoDIV.addClass("todo");
        // Create li
        const newTodo = $('<li>');
        newTodo.text(todoInput.val()); // Use .val() to get input value
        newTodo.addClass("todoItem");
        todoDIV.append(newTodo);
        // Delete Button
        const delBtn = $('<button>');
        delBtn.text("🗑️");
        delBtn.addClass('delBtn');
        todoDIV.append(delBtn);
        // Appending to list
        todoList.append(todoDIV);
        // Clear Input Value
        todoInput.val(""); // Use .val() to set input value
    }

    function deleteTodo(e) {
        const item = $(e.target);
        if (item.hasClass('delBtn')) {
            const todo = item.closest('.todo');
            todo.remove();
        }
    }
    function check(e) {
        const item = $(e.target);
        if (item.is('li')) { 
            item.toggleClass('checked'); 
        }
    }
});