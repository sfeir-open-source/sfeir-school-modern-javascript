import React, { useRef } from 'react';
import {getState, dispatch} from './myRedux'

const TODO_ACTION = (val) => ({
    type: 'ADD_TODO',
    text: val
});


const Todo = () => {
    const input = useRef();

    const onAddHandler = () => {
        if (!input.current) return;
        if (input.current.value)
            dispatch(TODO_ACTION(input.current.value));
        input.current.value = ''
    };

    return (
        <div>
            <input placeholder="Some Text" ref={input}
            />
            <button onClick={onAddHandler}>Add Todo</button>
            <ul>
                {getState().todos.map((tod) =>
                    <li key={Math.random()}>{tod}</li>
                )}
            </ul>

        </div>
    )
};

export default Todo;