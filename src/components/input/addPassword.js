import React, {Component} from 'react'
import InputField from "./inputField";
import passwords from "../passwords/passwords";

export default class AddPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            login: "",
            password: "",
            visible: false
        }

        this.addNewPassword = this.addNewPassword.bind(this)
        this.generateNewPassword = this.generateNewPassword.bind(this)
    }

    generateNewPassword(event) {
        event.preventDefault()

        let len = 20
        let password = "";
        let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
        for (let i = 0; i < len; i++) {
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }

        this.setState({password: password})
    }

    addNewPassword(event) {
        event.preventDefault()
        fetch('/api/passwords', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: this.state.title,
                login: this.state.login,
                password: this.state.password
            })
        }).then(res => {
            res.json().then(data => {
                if (data.error_name) {
                    console.error(data.error_name)
                }
                this.props.onAdd()
                this.props.onClose()
            })

        }).catch(e => {
            console.error((e))
        })
    }

    render() {
        return (
            <div className="add_password_popup">

                <form className="input_form">
                    <h1>Add new password</h1>

                    <InputField name="title" type="text" placeholder="Title" onChange={e => {
                        this.setState({title: e.target.value})
                    }}/>

                    <InputField name="login" type="text" placeholder="Login" onChange={e => {
                        this.setState({login: e.target.value})
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
                    </div>


                    <div className="btn">
                        <button onClick={this.addNewPassword}>Add</button>
                    </div>

                    <div className="btn">
                        <button onClick={this.generateNewPassword}>Generate</button>
                    </div>

                    <div className="close_button">
                        <button onClick={this.props.onClose}><i className="fas fa-times-circle"/></button>
                    </div>


                </form>

            </div>)
    }
}