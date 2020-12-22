import React, {Component} from 'react'

export default class PasswordNotification extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let message = this.props.message
        if (!message || message === "") message = "Loading..."
        return (
            <div className="password_card">
                <div className="message">
                    <h1>{message}</h1>
                </div>
            </div>
        )
    }

}