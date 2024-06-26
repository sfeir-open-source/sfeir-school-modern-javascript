// Renders Specific DOM items when store is updated
import store from './redux/myRedux.js';
import { toggleTodoItem } from './Actions/actions.js';

export const renderTodoList = (todo) => {
  let tbody_count = document.getElementById('todoBody').childElementCount;
  let tbody = document.getElementById('todoBody');
  let itemID = store.getState()['totalItems']['count'];

  if (store.getState()['totalItems']['count'] > tbody_count && store.getState()['todoList'][itemID]) {
    let tr = document.createElement('tr');

    tr.innerHTML = `
        <td id=todoItem-${itemID}>
            ${store.getState()['todoList'][itemID]['item']}
        </td>
        <td>
            <label>
                <input id="${itemID}" type="checkbox" />
                <span></span>
            </label>
        </td>`;
    tbody.appendChild(tr);

    // Add new listener to the checkbox
    setTimeout(() => {
      document.querySelector(`#todoItem-${itemID} ~ td input`).addEventListener('click', () => {
        toggleTodoItem(document.querySelector(`#todoItem-${itemID} ~ td input`), itemID);
      });
    }, 0);
  }
};

export const renderPendingElements = (pending) => {
  // Delete existing nodes
  document.getElementById('pendingItems').innerHTML = '';

  for (let itemID in pending) {
    if (pending.hasOwnProperty(itemID)) {
      // Make modification to DOM
      var ul = document.getElementById('pendingItems');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(pending[itemID]['item']));
      li.setAttribute('id', `pendingList-${itemID}`);
      ul.appendChild(li);
    }
  }
};

export const renderCompleteElements = (complete) => {
  // Delete existing nodes
  document.getElementById('completedItems').innerHTML = '';

  for (let itemID in complete) {
    if (complete.hasOwnProperty(itemID)) {
      // Make modification to DOM
      var ul = document.getElementById('completedItems');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(complete[itemID]['item']));
      li.setAttribute('id', `completeList-${itemID}`);
      ul.appendChild(li);
    }
  }
};
