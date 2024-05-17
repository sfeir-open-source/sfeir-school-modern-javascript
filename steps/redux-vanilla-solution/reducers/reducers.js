const initalState = {
  totalItems: { count: 0 },
  completedList: {},
  pendingList: {},
  todoList: {},
};

function reducer(action, state = initalState) {
  switch (action.type) {
    // Add total to-do items
    case 'ADD_TOTAL_ITEMS':
      return { ...state, totalItems: { ...state.totalItems, count: state.totalItems.count + 1 } };
    // Add new item in to-do list
    case 'ADD_TODO_LIST': {
      let newTodo = {};
      newTodo[action.payload.count] = action.payload.todo;
      return { ...state, todoList: { ...state.todoList, ...newTodo } };
    }
    // Add item to pending list
    case 'ADD_NEW_PENDING_LIST': {
      let pendingTodo = {};
      pendingTodo[action.payload.count] = action.payload.todo;
      return { ...state, pendingList: { ...state.pendingList, ...pendingTodo } };
    }

    case 'ADD_PENDING_LIST':
      return { ...state, pendingList: { ...state.pendingList, ...action.payload } };

    case 'RM_PENDING_LIST': {
      let newState = action.payload.state;
      for (let id in action.payload['item']) {
        delete newState[id];
      }
      return { ...state, pendingList: newState };
    }
    // Add to complete list
    case 'ADD_COMPLETE_LIST':
      return { ...state, completedList: { ...state.completedList, ...action.payload } };

    case 'RM_COMPLETE_LIST': {
      let newState = action.payload.state;
      console.info(action.payload['item']);
      for (let id in action.payload['item']) {
        delete newState[id];
      }
      return { ...state, completedList: newState };
    }

    default:
      return state;
  }
}

export { reducer };
