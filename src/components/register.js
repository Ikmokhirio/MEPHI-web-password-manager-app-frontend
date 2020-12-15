import React, {Component} from "react"
import {Redirect, Link} from "react-router-dom";
import InputField from "./input/inputField";

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.generateNewPassword = this.generateNewPassword.bind(this)

        this.state = {
            email: "",
            username: "",
            password: "",
            master_password: "",
            logged: false,
            visible: false,
            master_visible: false
        }
    }

    generateNewPassword(event, master) { // Move it to separate file
        event.preventDefault()

        let len = 20
        let password = "";
        let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
        for (let i = 0; i < len; i++) {
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }

        if (!master) {
            this.setState({password: password})
        } else {
            this.setState({master_password: password})
        }
    }

    handleClick(event) {
        event.preventDefault();

        this.setState({logged: false})
        fetch('/api/users', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password,
                "email": this.state.email,
                "master_password": this.state.master_password
            })
        }).then(res => {

            res.json().then(data => {
                if (data.error_name) {
                    console.error(data.error_name)
                    this.setState({logged: false})
                } else {
                    this.setState({logged: true})
                }
            }).catch(e => {
                console.error((e))
            })

        }).catch(e => {
            console.error((e))
        })

    }

    render() {

        if (this.state.logged) {
            return <Redirect to={"/user"}/>
        }

        return (<form className="input_form">
            <h1>Register</h1>

            <InputField name="Email" type="text" placeholder="E-mail" onChange={e => {
                this.setState({email: e.target.value})
            }}/>

            <InputField name="Username" type="text" placeholder="Username" onChange={e => {
                this.setState({username: e.target.value})
            }}/>

            <div className="password_input">
                <InputField name="Password" type={this.state.visible ? "text" : "password"}
                            placeholder="Password" onChange={e => {
                    this.setState({password: e.target.value})
                }} value={this.state.password}/>
                <button className="password_option"
                        onClick={(e) => {
                            e.preventDefault()
                            this.setState({visible: !this.state.visible}
                            )
                        }}>
                    <i className="fas fa-eye"/>
                </button>
                <button className="password_option"
                        onClick={e => {
                            this.generateNewPassword(e, false) // Make it look better
                        }}>
                    <i className="fas fa-random"/>
                </button>
            </div>

            <div className="password_input">
                <InputField name="master_password" type={this.state.master_visible ? "text" : "password"}
                            placeholder="Master password" onChange={e => {
                    this.setState({master_password: e.target.value})
                }} value={this.state.master_password}/>
                <button className="password_option"
                        onClick={(e) => {
                            e.preventDefault()
                            this.setState({master_visible: !this.state.master_visible}
                            )
                        }}>
                    <i className="fas fa-eye"/>
                </button>
                <button className="password_option"
                        onClick={e => {
                            this.generateNewPassword(e, true)  // Make it look better
                        }}>
                    <i className="fas fa-random"/>
                </button>
            </div>

            <div className="btn">
                <button onClick={this.handleClick}>Register</button>
            </div>


            <div className="bottom_text">
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </form>)
    }
}