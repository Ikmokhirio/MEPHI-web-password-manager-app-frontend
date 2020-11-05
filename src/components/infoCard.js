import React, {Component} from "react"
import {Link} from "react-router-dom";

/*

    Card structure

    {
        title:"имя",
        text:"text",
        link:"ссылка"
    }

 */

export default class InfoCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info_card">
                <h1>{this.props.title}</h1>

                <div className="info_card_content">
                    <p>{this.props.text}</p>
                </div>
                <div className="btn">
                    <Link to={this.props.link}>
                        <button>Learn more</button>
                    </Link>
                </div>
            </div>
        );
    }
}