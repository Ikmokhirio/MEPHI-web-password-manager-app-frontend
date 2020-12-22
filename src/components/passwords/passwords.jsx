import React, {Component} from 'react'
import PasswordCard from "./passwordCard";
import AddPassword from "../input/addPassword";
import PasswordNotification from "./passwordNotification";

export default class Passwords extends Component {

    constructor(props) {
        super(props)

        this.updatePassword = this.updatePassword.bind(this)
        this.getPasswords = this.getPasswords.bind(this)
        this.deletePassword = this.deletePassword.bind(this)
        this.edit = this.edit.bind(this)

        this.state = {
            edit: false,
            passwords: [],
            loading: false
        }
    }

    updatePassword(passwordData) {
        fetch('/api/passwords', {
            method: "put",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(passwordData)
        }).then(res => {

            res.json().then(data => {
                if (data.error_name) {
                    console.error(data.error_name)
                }
                this.getPasswords()
            }).catch(e => {
                console.error(e)
            })

        }).catch(e => {
            console.error(e)
        })
    }

    deletePassword(passwordData) {
        fetch('/api/passwords', {
            method: "delete",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(passwordData)
        }).then(res => {
            res.json().then(data => {
                this.getPasswords()
            })

        }).catch(e => {
            console.error((e))
        })
    }

    componentDidMount() {
        this.getPasswords()
    }

    getPasswords() {
        this.setState({
            loading: true
        })
        fetch('/api/passwords', {
            method: "get",
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            res.json().then(data => {
                    this.setState({
                        loading: false
                    })
                    this.setState({passwords: data})
                }
            )
        }).catch(e => {
            console.error((e))
        })
    }

    edit() {
        this.setState({edit: !this.state.edit})
    }

    render() {

        if (this.state.loading) {
            return (
                <div className="passwords_container">
                    <div className="add_password_button">
                        <PasswordNotification message="Loading..."/>
                    </div>
                </div>
            )
        }

        return (

            <div>
                {this.state.edit ? <AddPassword onAdd={this.getPasswords} onClose={this.edit}/> : ""}
                <div className="passwords_container">


                    {
                        this.state.passwords.map((password) => {
                            return (
                                <PasswordCard title={password.title} login={password.login} password={password.password}
                                              updatePassword={this.updatePassword}
                                              key={password.id} id={password.id} deletePassword={this.deletePassword}/>)
                        })
                    }

                    <div className="add_password_button">
                        <button onClick={this.edit}>
                            <h1>ADD NEW PASSWORD</h1>
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}