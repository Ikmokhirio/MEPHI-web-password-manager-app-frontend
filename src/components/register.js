import React, {Component} from "react"
import {Link} from "react-router-dom";
import InputField from "./input/inputField";
import InputRadio from "./input/inputRadio";

export default class Register extends Component {


    constructor(props) {
        super(props);

        this.options = [
            {
                name:"gender",
                value:"Male",
                text:"М"
            },
            {
                name:"gender",
                value:"Female",
                text:"Ж"
            }
        ]
    }


    render() {
        return (<form className="input_form">
            <h1>Register</h1>

            <InputField name="Email" type="text" placeholder="E-mail"/>

            <InputField name="Username" type="text" placeholder="Username"/>

            <InputField name="Password" type="password" placeholder="Password"/>

            <InputRadio optionName="Пол" options={this.options}/>

            <div className="btn">
                <button>Register</button>
            </div>


            <div className="bottom_text">
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </form>)
    }
}