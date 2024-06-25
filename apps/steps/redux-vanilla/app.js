import store from './redux/myRedux.js';
import { renderTodoList, renderPendingElements, renderCompleteElements } from './render.js';
import { addTodo } from './Actions/actions.js';

document.addEventListener('DOMContentLoaded', () => {
  // Display state
  console.log(store.getState());

  // Bind Listener to store
  const UnSubscribe = store.subscribe(() => {
    console.log(store.getState());
    /*
    TODO Render the corect methods
    todoList from state.todoList
    pendingList from state.pendingList
    completedList from state.completedList
    */
  });

  // UI Binding
  document.querySelector('form').addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == 'BUTTON') {
      e.preventDefault();
      if (document.getElementById('newTodo').value !== '') {
        //Call Actions
        addTodo({ item: document.getElementById('newTodo').value });
        // clear input text in DOM
        document.getElementById('newTodo').value = '';
      }
    }
  });
});
