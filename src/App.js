import React, {Component} from 'react';
import ReactDOM, {createPortal, Redirect} from 'react-dom';
import { Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from './logo.svg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './App.css';
import NewLogin from './newlogin';
import Chart from './chart';

//var GoogleStrategy = require('passport-google-oauth20').Strategy;
//
//passport.use(new GoogleStrategy({
//    clientID: GOOGLE_CLIENT_ID,
//    clientSecret: GOOGLE_CLIENT_SECRET,
//    callbackURL: "http://www.example.com/auth/google/callback"
//  },
//  function(accessToken, refreshToken, profile, cb) {
//    User.findOrCreate({ googleId: profile.id }, function (err, user) {
//      return cb(err, user);
//    });
//  }
//));

class UiLogin extends Component {
    constructor(props) {
        super(props);

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        Cookies.set("survey_session", this.state.username);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-static-top bg-dark navbar-dark">
                    <form className="navbar-form ml-auto" onSubmit={this.handleSubmit}>
                        <input type="text"
                               className="span1"
                               className="userinput"
                               value={this.props.username}
                               onChange={this.handleUsername}
                               placeholder="username"/>
                        <input type="password"
                               className="span1"
                               className="userinput"
                               value={this.props.password}
                               onChange={this.handlePassword}
                               placeholder="password"/>
                        <button type="submit"
                                className="statusbutton">Login
                        </button>
                        <Link to={{pathname: "/", search: "?Signup=true"}}>
                            <button type="button"
                                    className="statusbutton">Sign Up
                            </button>
                        </Link>
                    </form>
                </nav>
                <nav className="navbar navbar-expand-sm navbar-static-top bg-dark navbar-dark">
                    <ul className="navbar ml-auto" style={{height: 25}}>
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label" style={{color: "white"}}>Show password</label>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Forgot?</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

class UiDisplayId extends Component {
    constructor(props) {
        super(props);
        this.username = this.props.username;
        this.handleSignout = this.handleSignout.bind(this);
    }

    handleSignout(event) {
        Cookies.remove("survey_session");
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-static-top bg-dark navbar-dark">
                    <form className="navbar-form ml-auto" onSubmit={this.handleSignout}>
                        <p style={{color: "white"}}>Hello {this.username}</p>
                        <button type="submit" className="statusbutton">Sign Out</button>
                    </form>
                </nav>
            </div>
        )
    }
}

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.username = this.props.username;
    }

    render() {
        if(this.username !== "") {
            return (
                <div className="navbar-inner">
                    <ul className="nav">
                        <li><a className="menuitem" href="#">Surveys</a></li>
                        <li><a className="menuitem" href="#">Predictions</a></li>
                        <li><a className="menuitem" href="#">Profile</a></li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="navbar-inner">
                    <ul className="nav">
                        <li><a className="menuitem" href="#">Surveys</a></li>
                        <li><a className="menuitem" href="#">Predictions</a></li>
                    </ul>
                </div>
            );
        }
    }
}

class UiContent extends Component {
    constructor(props) {
        super(props);
        this.username = this.props.username;
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="header">Surveys</h1>
                </Jumbotron>
                <div className="navbar" className="menu">
                    <Tabs username={this.username} />
                </div>
                <div className="navbar" className="menusearch">
                    <form className="navbar-search">
                        <input type="text"
                               className="search-query"
                               class="menusearchitem"
                               placeholder="Search"/>
                    </form>
                </div>
            </div>
        )
    }
}

class UiHomepage extends Component {
    constructor(props) {
        super(props);
        this.username = this.props.username;
    }

    render() {
        if(this.username !== "")
        {
            return (
                <div>
                    <UiDisplayId username={this.username} />
                    <UiContent username={this.username} />
                </div>
            );
        } else {
            return (
                <div>
                    <UiLogin />
                    <UiContent username={this.username} />
                    <Chart />
                </div>
            );
        }
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }

    componentWillMount() {
        let uname = Cookies.get("survey_session");
        if(uname !== undefined) {
            this.setState({username: uname});
        }
    }

    render() {
        return (
            <Container>
                <UiHomepage username={this.state.username} />
            </Container>
        );
    }
}

export default App;
