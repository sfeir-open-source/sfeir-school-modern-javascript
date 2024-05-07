import React from "react";
import {dispatch} from './myRedux';

const increment = () => {
    dispatch({type: 'INC'})
};

const decrement = () => {
    dispatch({type: 'DEC'})
};

const width = {width: '2rem', fontSize: '1.2rem'};

const CounterButtons = () => (
    <div>
        <button onClick={increment} style={width}>+</button>
        <button onClick={decrement} style={width}>-</button>
    </div>
);

export default CounterButtons;