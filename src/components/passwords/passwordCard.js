import React, {Component} from 'react'

export default class PasswordCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            copied: false,
            edit: false,
            password: this.props.password,
            title: this.props.title,
            login: this.props.login
        }

        this.copyPassword = this.copyPassword.bind(this)
        this.editPassword = this.editPassword.bind(this)
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
        event.preventDefault()
        this.setState({edit: !this.state.edit})

        if (this.state.edit && this.state.password !== this.props.password) {
            console.log("SENDING TO SERVER")
            this.props.updatePassword({
                id: this.props.id,
                password: this.state.password,
                title: this.state.title,
                login: this.state.login
            })
        }

    }

    render() {
        return (
            <div className="password_card">
                {
                    !this.state.edit ?
                        <>
                            <h1>{this.state.title}</h1>
                            <h2>{this.state.login}</h2>
                        </> :
                        <div className="edit">
                            <input type="text" value={this.state.title} onChange={event => {
                                this.setState({title: event.target.value})
                            }}/>
                            <input type="text" value={this.state.login} onChange={event => {
                                this.setState({login: event.target.value})
                            }}/>
                        </div>
                }


                <div className={this.state.copied ? "copied_visible" : "copied_hidden"}>
                    <h1>COPIED</h1>
                </div>

                <div className="password_field">

                    <input type={this.state.visible ? "text" : "password"} name="password"
                           onChange={event => this.setState({password: event.target.value})}
                           value={this.state.password}
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