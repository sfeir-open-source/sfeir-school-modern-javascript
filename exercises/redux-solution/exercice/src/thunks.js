
import { dispatch, thunk } from "./myRedux";
import axios from "axios";

export const users = () => thunk(
    function (res) {
        dispatch({
            type: "GET_USERS",
            users: res.data
        });
    }, (cb) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => cb(response))
            .catch(err => cb({ err:'Error occurred'}))
    },5000 //delay time
)


thunk(
    function (res) {
        if (res.err) {
            dispatch({
                type: "GET_DATA",
                data: res.err
            });
        } else {
            dispatch({
                type: "GET_DATA",
                data:res.title
            })
        }

    },
    cb => networkStop(cb)
);

function networkStop(cb) {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => cb(response.data))
        .catch(err => cb({ err:'Error occurred'}))  // error handling
}