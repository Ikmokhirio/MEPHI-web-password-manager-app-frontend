import React, {Component} from 'react'

export default class PasswordCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            copied: false,
            edit: false,
            new_password: this.props.password
        }

        this.copyPassword = this.copyPassword.bind(this)
        this.editPassword = this.editPassword.bind(this)
        this.setPassword = this.setPassword.bind(this)
    }

    copyPassword(event) {
        navigator.clipboard.writeText(this.props.password).then(
            () => {
                this.setState({copied: true})
                setTimeout(() => {
                    this.setState({visible: false, copied: false})
                }, 1000);
            }
        ).catch(e => {
            console.log(e)
            this.setState({visible: false, copied: false, edit: false})
        });
    }

    editPassword(event) {
        this.setState({edit: !this.state.edit})

        if (this.state.edit && this.state.new_password !== this.props.password) {
            console.log("SENDING TO SERVER")
            this.props.updatePassword(this.props.id, this.state.new_password)
        }

    }

    setPassword(event) {
        this.setState({new_password: event.target.value})
    }

    render() {
        return (
            <div className="password_card">
                <h1>{this.props.title}</h1>
                <div className={this.state.copied ? "copied_visible" : "copied_hidden"}>
                    <h1>COPIED</h1>
                </div>
                <div className="password_field">
                    <input type={this.state.visible ? "text" : "password"} name="new_password"
                           onChange={this.setPassword} value={this.state.new_password}
                           disabled={!this.state.edit}/>
                    <button className="show_password" onClick={(e) => this.setState({visible: !this.state.visible})}><i
                        className="fas fa-eye"/></button>
                    <button className="copy_password" onClick={this.copyPassword}><i className="fas fa-copy"/></button>
                    <button className="edit_password" onClick={this.editPassword}><i className="fas fa-edit"/></button>
                </div>

            </div>
        )
    }

}