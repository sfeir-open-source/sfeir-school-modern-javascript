import React from "react";
import { getState } from "./myRedux";
import { users } from "./thunks";


function Loading() {
    //return <h1 style={{ color: "red" }}>Loading</h1>;
}

class FetchData extends React.Component {
    /*componentDidMount() {
     //   users();
    }*/
/*
    Users = () => {
        if (getState().users) {
            return getState().users.map(user => (
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                </ul>
            ));
        } else {
            return <h1 style={{color:'red'}}>Delaying request for 5seconds</h1>;
        }
    };

    render() {
        return (
            <div>
                <ul>
                    <li>{getState().data ? getState().data : <Loading />}</li>
                </ul>

                <hr />
                <h1>Users</h1>
                <hr />

                {this.Users()}
            </div>
        );
    }*/
}

export default FetchData;