import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            clicked: false
        }
    }


    render() {
        return (<div className="header">
            <div className="btn">
                <Link to='/'>
                    <button>HOME</button>
                </Link>
            </div>
            <div className="btn">
                <Link to="/login">
                    <button>LOGIN</button>
                </Link>
            </div>
            <div className="btn">
                <Link to="/register">
                    <button>REGISTER</button>
                </Link>
            </div>
            <div className="btn">
                <Link to="/user">
                    <button>MY PAGE</button>
                </Link>
            </div>


        </div>)
    }
}