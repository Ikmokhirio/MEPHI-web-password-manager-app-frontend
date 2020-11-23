import React, {Component} from 'react'
import PasswordCard from "./passwordCard";
import AddPassword from "../input/addPassword";

export default class Passwords extends Component {

    constructor(props) {
        super(props);

        this.updatePassword = this.updatePassword.bind(this)
        this.edit = this.edit.bind(this)

        this.state = {
            edit: false
        }
    }

    updatePassword(passwordData) {
        console.log("SET: " + passwordData)
        console.log("UPDATING FROM SERVER")
    }

    edit() {
        this.setState({edit: !this.state.edit})
    }

    render() {

        return (

                <div className="passwords_container">

                    {this.state.edit ? <AddPassword onClose={this.edit}/> : ""}

                    <PasswordCard title="VK password" login="user" password="1234" updatePassword={this.updatePassword} id={25}/>

                    <PasswordCard title="Mail password" login="user" password="1234567" updatePassword={this.updatePassword} id={26}/>

                    <PasswordCard title="YouTube password" login="user" password="1234dasd567" updatePassword={this.updatePassword} id={27}/>

                    <div className="add_password_button">
                        <button onClick={this.edit}>
                            <h1>ADD NEW PASSWORD</h1>
                        </button>
                    </div>
                </div>

        )
    }
}