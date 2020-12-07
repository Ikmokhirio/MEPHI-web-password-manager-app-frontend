import React, {Component} from "react"
import {Link, Redirect} from "react-router-dom";
import InputField from "../input/inputField";

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
        }
    }

    handleClick(event) {
        event.preventDefault();

        fetch('/api/users', {
            method: "put",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.props.user.username,
                password: this.state.current_password,
                new_password: this.state.new_password,
                new_master_password: this.state.new_master_password,
                new_email: this.state.new_email

            })
        }).then(res => {
            this.props.onUpdate()
        }).catch(e => {
            console.error((e))
        })
    }

    render() {
        if (!this.props.user || !this.props.user.username || this.props.user.username === "") return (
            <Redirect to="/login"/>)

        return (
            <div className="user_profile">
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

                        <div className="btn">
                            <Link to='/login'>
                                <button onClick={this.props.logout}>Log Out</button>
                            </Link>
                        </div>

                        <div className="btn">
                            <button onClick={this.props.deleteAccount}>Delete</button>
                        </div>
                    </div>

                </div>

                <div className="right_block">
                    <form className="change_form">
                        <h1>Change data</h1>

                        <InputField name="current_account_password" type="password"
                                    placeholder="Current account password"
                                    onChange={e => {
                                        this.setState({current_password: e.target.value})
                                    }}/>

                        <InputField name="current_master_password" type="password" placeholder="Current master password"
                                    onChange={e => {
                                        this.setState({current_master_password: e.target.value})
                                    }}/>

                        <InputField name="new_master_password" type="password" placeholder="New master password"
                                    onChange={e => {
                                        this.setState({new_master_password: e.target.value})
                                    }}/>

                        <InputField name="new_account_password" type="password" placeholder="New account password"
                                    onChange={e => {
                                        this.setState({new_password: e.target.value})
                                    }}/>

                        <InputField name="Email" type="text" placeholder="E-mail" onChange={e => {
                            this.setState({new_email: e.target.value})
                        }}/>

                        <div className="btn">
                            <button onClick={this.handleClick}>APPLY</button>
                        </div>
                    </form>
                </div>

            </div>)
    }
}