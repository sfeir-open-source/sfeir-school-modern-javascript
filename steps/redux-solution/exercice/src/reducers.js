const initalState = {
    num: 0,
    todos: [],
    data: "",
    users: null

};


function reducer(action, state = initalState) {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                num: state.num + 1
            };
        case "DEC":
            return {
                ...state,
                num: state.num - 1
            };
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.text]
            };

        default:
            return state;
    }
}

export {reducer}