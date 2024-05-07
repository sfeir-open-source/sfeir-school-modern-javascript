import { reducer } from './reducers'; //import your reducer

let state;
const getState = () => state;

const listeners = [];

const dispatch = action => {
    state = reducer(action, state);
    listeners.forEach(listener => listener())
};

const subscribe = (listener) => {
    listeners.push(listener);
    return () => listeners.filter(lis => lis !== listener)
};


function Async(cb, request) {
    request(cb);
}

//helps to do async things
const thunk = function(cb, request, delay) {
    if (delay) {
        return setTimeout(() => {
            Async(cb, request);
        }, delay);
    }
    Async(cb, request);
};

export { getState, dispatch, thunk, subscribe};