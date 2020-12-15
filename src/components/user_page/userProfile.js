import React, {Component} from "react"
import {Link, Redirect} from "react-router-dom";
import InputField from "../input/inputField";

export default class UserProfile extends Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.updateUserData = this.updateUserData.bind(this)
        this.logout = this.logout.bind(this)
        this.deleteAccount = this.deleteAccount.bind(this)

        this.state = {
            username: "",
            role: "",
            email: "",
            new_email: "",
            current_master_password: "",
            new_master_password: "",
            current_password: "",
            new_password: "",
            logged: true
        }
    }

    handleClick(event) {
        event.preventDefault();

        fetch('/api/users', {
            method: "put",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.current_password,
                new_password: this.state.new_password,
                new_master_password: this.state.new_master_password,
                new_email: this.state.new_email

            })
        }).then(res => {
            this.onUpdate()
        }).catch(e => {
            console.error((e))
        })
    }

    updateUserData() {

        this.setState({logged: true})
        fetch('/api/users', {
            method: "get",
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            res.json().then(data => {
                if (data.error_name) {
                    console.error(data.error_name)
                    this.setState({logged: false})
                } else {
                    this.setState({
                        email: data.email,
                        username: data.username,
                        role: data.role
                    })
                }
            }).catch(e => {
                console.error(e)
            })
        }).catch(e => {
            console.error(e)
        })
    }

    logout() {
        fetch('/api/user/logout', {
            method: "get",
            headers: {'Content-Type': 'application/json'}
        })
    }

    deleteAccount() {

        fetch('/api/users', {
            method: "delete",
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            this.setState({
                username: "",
                role: "",
                email: ""
            })
        }).catch(e => {
            console.error((e))
        })
        this.logout()
    }

    componentDidMount() {
        this.updateUserData()
    }

    render() {
        if (!this.state.logged) {
            return <Redirect to={"/login"}/>
        }
        return (
            <div className="user_profile">

                <div className="left_block">
                    <div className="user_data">
                        <h1>{this.state.username}</h1>
                        <p>{this.state.role}</p>
                        <p>{this.state.email}</p>

                        <div className="btn">
                            <Link to='/passwords'>
                                <button>My passwords</button>
                            </Link>
                        </div>

                        <div className="btn">
                            <Link to='/login'>
                                <button onClick={this.logout}>Log Out</button>
                            </Link>
                        </div>

                        <div className="btn">
                            <button onClick={this.deleteAccount}>Delete</button>
                        </div>
                    </div>

                </div>

                <div className="right_block">
                    <form className="change_form">

                        <h3>To change user data enter your current password and new data</h3>

                        <h3>To change master password enter your current master password</h3>

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