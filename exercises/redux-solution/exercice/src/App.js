import React from "react";
import CounterButtons from "./counterbuttons";
import Text from "./text";
import Todo from "./todo";
import FetchData from "./fetch";
import { getState } from "./myRedux";

const App = () => (
    <div className="App">
          <hr />
          <h1>Counter</h1>
          <hr />
          <CounterButtons />
          <hr />
          <Text />
          <h1>Todo</h1>
          <hr />
          <Todo />
          <hr />
        </div>
);

export default App;