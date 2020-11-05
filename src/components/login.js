import React, {Component} from "react"
import {Link} from "react-router-dom";
import InputField from "./input/inputField";

export default class Login extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (<form className="input_form">
            <h1>Login</h1>

            <InputField name="Username" type="text" placeholder="Username"/>

            <InputField name="Password" type="password" placeholder="Password"/>

            <div className="btn">
                <button>LOG IN</button>
            </div>


            <div className="bottom_text">
                <p>Don't have account? <Link to="/register">Sign up</Link></p>
            </div>
        </form>)
    }
}