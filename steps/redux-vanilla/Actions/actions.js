import store from '../redux/myRedux.js';

const ADD_TODO_LIST = 'ADD_TODO_LIST';
const ADD_TOTAL_ITEMS = 'ADD_TOTAL_ITEMS';
const ADD_NEW_PENDING_LIST = 'ADD_NEW_PENDING_LIST';
const ADD_PENDING_LIST = 'ADD_PENDING_LIST';
const ADD_COMPLETE_LIST = 'ADD_COMPLETE_LIST';
const RM_PENDING_LIST = 'RM_PENDING_LIST';
const RM_COMPLETE_LIST = 'RM_COMPLETE_LIST';

// Dispatch binding functions
// TODO Dispatch binding functions to store
const bindAddTotalItems = () => undefined;
const bindAddTodoList = (todo) => undefined;
const bindAddPendingList = (todo) => undefined;

export function addTodo(todo) {
  bindAddTotalItems();
  bindAddTodoList(todo);
  bindAddPendingList(todo);
}

// Increase total todo count
function addTotalItems() {
  return {
    type: ADD_TOTAL_ITEMS,
  };
}

// Add new to-do item
function addTodoList(todo) {
  return {
    type: ADD_TODO_LIST,
    payload: {
      count: store.getState()['totalItems']['count'],
      todo,
    },
  };
}

// Toggle Todo
export function toggleTodoItem(cb, id) {
  if (cb.checked) {
    // Get the list from pending and move it to complete
    let item = {};
    item[id] = store.getState()['pendingList'][id];

    // Add new item to completeList
    // TODO dispatch to correct list -> add complete and remove pending
  } else {
    // Get the list from completed and move it to pending
    let item = {};
    item[id] = store.getState()['completedList'][id];

    // Remove item from completeList
    // TODO dispatch to correct list -> remove complete and add pending
  }
}

// Add pending to-do item
function addPendingList(todo, item = null) {
  // If new item is added
  if (todo) {
    return {
      type: ADD_NEW_PENDING_LIST,
      payload: {
        count: store.getState()['totalItems']['count'],
        todo,
      },
    };
  }
  // If existing item is toggled
  else {
    return {
      type: ADD_PENDING_LIST,
      payload: item,
    };
  }
}

// Add new item to complete List
function addCompleteList(item) {
  return {
    type: ADD_COMPLETE_LIST,
    payload: item,
  };
}

// Remvoe from pending list
function removePendingList(item) {
  return {
    type: RM_PENDING_LIST,
    payload: {
      state: store.getState()['pendingList'],
      item,
    },
  };
}

// Remove from complete list
function removeCompleteList(item) {
  return {
    type: RM_COMPLETE_LIST,
    payload: {
      state: store.getState()['completedList'],
      item,
    },
  };
}
