import React from "react";
import {dispatch} from './myRedux';


    /*
    *  Dispatch the INC Action
    * */

    /*
    *  Dispatch the DEC Action
    * */

const width = {width: '2rem', fontSize: '1.2rem'};

const CounterButtons = () => (
    <div>
        <button onClick={increment} style={width}>+</button>
        <button onClick={decrement} style={width}>-</button>
    </div>
);

export default CounterButtons;