import React, {Component} from "react"
import {Link} from "react-router-dom";
import InputField from "../input/inputField";
import InputRadio from "../input/inputRadio";

export default class UserProfile extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            new_email: "",
            current_master_password: "",
            new_master_password: "",
            current_password: "",
            new_password: "",
            gender: ""
        }

        this.options = [
            {
                name: "gender",
                value: "Male",
                text: "M"
            },
            {
                name: "gender",
                value: "Female",
                text: "F"
            }
        ]
    }

    handleClick(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() {
        return (<div className="user_profile">
            <div className="left_block">
                <div className="user_data">
                    <h1>{this.props.user.username}</h1>
                    <p>{this.props.user.role}</p>
                    <h2>Email</h2>
                    <p>{this.props.user.email}</p>

                    <div className="btn">
                        <Link to='/passwords'>
                            <button>My passwords</button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="right_block">
                <form className="change_form">
                    <h1>Change data</h1>

                    <InputField name="current_master_password" type="password" placeholder="Current master password"
                                onChange={e => {
                                    this.setState({current_master_password: e.target.value})
                                }}/>

                    <InputField name="new_master_password" type="password" placeholder="New master password"
                                onChange={e => {
                                    this.setState({new_master_password: e.target.value})
                                }}/>

                    <InputField name="current_account_password" type="password" placeholder="Current account password"
                                onChange={e => {
                                    this.setState({current_password: e.target.value})
                                }}/>

                    <InputField name="new_account_password" type="password" placeholder="New account password"
                                onChange={e => {
                                    this.setState({new_password: e.target.value})
                                }}/>

                    <InputField name="Email" type="text" placeholder="E-mail" onChange={e => {
                        this.setState({email: e.target.value})
                    }}/>

                    <InputRadio optionName="Gender" options={this.options} onChange={e => {
                        this.setState({gender: e.target.value})
                    }}/>

                    <div className="btn">
                        <button onClick={this.handleClick}>APPLY</button>
                    </div>
                </form>
            </div>

        </div>)
    }
}