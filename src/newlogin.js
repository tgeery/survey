import React, { Component } from "react";
import Modal from './modal';
import './App.css';

export default class NewLogin extends Component {
    constructor() {
        super();
        this.el = document.createElement("div");
    }

    componentDidMount = () => {
        document.getElementById("root").appendChild(this.el);
    }

    componentDidUnmount = () => {
        document.getElementById("root").removeChild(this.el);
    }

    render() {
        let params = new URLSearchParams(this.props.location.search);
        return (params.get("Signup") && (
            <Modal>
                <form style={{ margin: "0 auto", width: "25%", backgroundColor: "white", padding: "20px" }}>
                    <label style={{ color: "black" }}>Sign Up</label>
                    <div class="form-group">
                        <input class="form-control-sm" type="text" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                        <input class="form-control-sm" type="text" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <input class="form-control-sm" type="text" placeholder="password1" />
                    </div>
                    <div className="form-group">
                        <input class="form-control-sm" type="text" placeholder="password2" />
                    </div>
                    <div className="form-group">
                        <button className="form-control-sm" type="submit" className="loginbutton"  onClick={() => {
                            this.props.history.push('/');
                        }}>Cancel</button>
                        <button class="form-control-sm" type="submit" className="loginbutton" onClick={() => {
                            this.props.history.push('/');
                        }}>Submit</button>
                    </div>
                </form>
            </Modal>
            )
        );
    }
}