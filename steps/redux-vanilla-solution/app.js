import store from './redux/myRedux.js';
import { renderTodoList, renderPendingElements, renderCompleteElements } from './render.js';
import { addTodo } from './Actions/actions.js';

// We init actions state
//defineStore(store);

document.addEventListener('DOMContentLoaded', () => {
  // Display state
  console.log(store.getState());

  // Bind Listener to store
  const UnSubscribe = store.subscribe(() => {
    console.log(store.getState());
    renderTodoList(store.getState().todoList);
    renderPendingElements(store.getState().pendingList);
    renderCompleteElements(store.getState().completedList);
  });

  // UI Binding
  document.querySelector('form').addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == 'BUTTON') {
      //Call Actions
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
