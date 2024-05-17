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
      // TODO complete totalItems
      return { ...state, totalItems: undefined };
    // Add new item in to-do list
    case 'ADD_TODO_LIST': {
      // TODO add Todolist (warning need to add a new object to object todoList and not a new object to an array)
      return { ...state, todoList: undefined };
    }
    // Add item to pending list
    case 'ADD_NEW_PENDING_LIST': {
      // TODO add new pendinglist (warning need to add a new object to object pendingList and not a new object to an array)
      return { ...state, pendingList: undefined };
    }

    case 'ADD_PENDING_LIST':
      // TODO add pendinglist
      return { ...state, pendingList: undefined };

    case 'RM_PENDING_LIST': {
      // TODO remove pendinglist (warning need to remove the property from the object and not the object from the array)
      return { ...state, pendingList: undefined };
    }
    // Add to complete list
    case 'ADD_COMPLETE_LIST':
      // TODO add completeList
      return { ...state, completedList: undefined };

    case 'RM_COMPLETE_LIST': {
      //TODO remove completeList (warning need to remove the property from the object and not the object from the array)
      return { ...state, completedList: undefined };
    }

    default:
      return state;
  }
}

export { reducer };
