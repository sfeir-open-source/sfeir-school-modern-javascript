import { reducer } from './reducers'; //import your reducer

/*
*
* Insert Redux here
*
* */


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