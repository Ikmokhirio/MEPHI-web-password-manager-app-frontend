import React, {Component} from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            clicked: false
        }
    }


    render() {
        return (<div className="footer">
            <div className="links">
                <a href="https://github.com/Ikmokhirio" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://vk.com/demon_crab_programmer" target="_blank"><i className="fab fa-vk"></i></a>
            </div>

            <p className="rights-text">© 2020 Created By Ikmokhirio All Rights Reserved</p>

        </div>)
    }
}