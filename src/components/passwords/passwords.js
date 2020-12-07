import React, {Component} from 'react'
import PasswordCard from "./passwordCard";
import AddPassword from "../input/addPassword";

export default class Passwords extends Component {

    constructor(props) {
        super(props);

        this.updatePassword = this.updatePassword.bind(this)
        this.getPasswords = this.getPasswords.bind(this)
        this.edit = this.edit.bind(this)

        this.state = {
            edit: false,
            passwords: []
        }
    }

    updatePassword(passwordData) {
        console.log("CHANGING PASSWORDS")
        console.log(JSON.stringify(passwordData))
        fetch('/api/passwords', {
            method: "put",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(passwordData)
        }).then(res => {
            res.json().then(data => {
                console.log(data)
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
        console.log("UPDATING PASSWORDS")
        fetch('/api/passwords', {
            method: "get",
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            res.json().then(data => this.setState({passwords: data}))
        }).catch(e => {
            console.error((e))
        })
    }

    edit() {
        this.setState({edit: !this.state.edit})
    }

    render() {

        return (

            <div className="passwords_container">

                {this.state.edit ? <AddPassword onAdd={this.getPasswords} onClose={this.edit}/> : ""}

                {
                    this.state.passwords.map((password) => {
                        return (<PasswordCard title={password.title} login={password.login} password={password.password} updatePassword={this.updatePassword}
                                      key={password.id} id={password.id}/>)
                    })
                }

                <div className="add_password_button">
                    <button onClick={this.edit}>
                        <h1>ADD NEW PASSWORD</h1>
                    </button>
                </div>
            </div>

        )
    }
}