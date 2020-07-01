import React, { Component } from 'react';
import { Redirect } from 'react-dom';

const UserContext = React.createContext(true);
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export default class Login extends Component {
    render() {
        const user = this.props.username;
        const pass = this.props.password;
        alert('user: ' + user + ', pass: ' + pass);
        return <Redirect to="/" />
    }
}