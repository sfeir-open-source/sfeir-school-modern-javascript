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
        case "ADD_TODO":
            /*
            *  ADD_TODO reducer
            * */
        default:
            return state;
    }
}

export {reducer}