import React, {Component} from 'react'
import PasswordCard from "./passwordCard";

export default class Passwords extends Component {

    constructor(props) {
        super(props);

        this.updatePassword = this.updatePassword.bind(this)
    }

    updatePassword(passwordId,newPassword) {
        console.log("SET " + passwordId + " to be " + newPassword)
        console.log("UPDATING FROM SERVER")
    }

    render() {

        return (
            <div className="passwords_container">

                <PasswordCard title="Test password" password="1234" updatePassword={this.updatePassword} id={25}/>




            </div>

        )
    }
}