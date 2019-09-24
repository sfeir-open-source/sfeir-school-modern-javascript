import React from 'react';
import {getState, dispatch} from './myRedux'

const TODO_ACTION = (val) => ({
    type: 'ADD_TODO',
    text: val
});

class Todo extends React.Component {
    OnAddHandler = () => {
        if (this.input.value)
            dispatch(TODO_ACTION(this.input.value));
        this.input.value = ''
    };

    render() {
        return (
            <div>
                <input placeholder="Some Text" ref={node => {
                    this.input = node
                }}
                />
                <button onClick={this.OnAddHandler}>Add Todo</button>
                <ul>
                    {getState().todos.map((tod) =>
                        <li key={Math.random()}>{tod}</li>
                    )}
                </ul>

            </div>
        )

    }
}

export default Todo;