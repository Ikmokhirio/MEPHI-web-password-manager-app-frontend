import React, {Component} from "react"
import {Link} from "react-router-dom";
import InputField from "./input/inputField";

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            email: "",
            username: "",
            password: "",
            master_password: ""
        }
    }

    handleClick(event) {
        event.preventDefault();

        console.log("SENDING")

        fetch('/api/users', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username" : this.state.username,
                "password" : this.state.password,
                "email" : this.state.email,
                "master_password" : this.state.master_password
            })
        }).then(res => {
            res.text().then(data => console.log(data))
            this.props.onUpdate()
        }).catch(e => {
            console.error((e))
        })

    }

    render() {
        return (<form className="input_form">
            <h1>Register</h1>

            <InputField name="Email" type="text" placeholder="E-mail" onChange={e => {
                this.setState({email: e.target.value})
            }}/>

            <InputField name="Username" type="text" placeholder="Username" onChange={e => {
                this.setState({username: e.target.value})
            }}/>

            <InputField name="Password" type="password" placeholder="Password" onChange={e => {
                this.setState({password: e.target.value})
            }}/>

            <InputField name="master_password" type="password" placeholder="Master password" onChange={e => {
                this.setState({master_password: e.target.value})
            }}/>

            <div className="btn">
                <button onClick={this.handleClick}>Register</button>
            </div>


            <div className="bottom_text">
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </form>)
    }
}