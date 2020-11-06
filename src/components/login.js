import React, {Component} from "react"
import {Link} from "react-router-dom";
import InputField from "./input/inputField";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleClick(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() {
        return (<form className="input_form">
            <h1>Login</h1>

            <InputField name="Username" type="text" placeholder="Username" onChange={e => {
                this.setState({username: e.target.value})
            }}/>

            <InputField name="Password" type="password" placeholder="Password" onChange={e => {
                this.setState({password: e.target.value})
            }}/>

            <div className="btn">
                <button onClick={this.handleClick}>LOG IN</button>
            </div>


            <div className="bottom_text">
                <p>Don't have account? <Link to="/register">Sign up</Link></p>
            </div>
        </form>)
    }
}