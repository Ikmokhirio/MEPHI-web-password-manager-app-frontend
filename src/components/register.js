import React, {Component} from "react"
import {Link} from "react-router-dom";
import InputField from "./input/inputField";
import InputRadio from "./input/inputRadio";

export default class Register extends Component {


    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            email: "",
            username: "",
            password: "",
            gender: ""
        }

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

    handleClick(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state));
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

            <InputRadio optionName="Пол" options={this.options} onChange={e => {
                console.log(e.target.value);
                this.setState({gender: e.target.value})
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