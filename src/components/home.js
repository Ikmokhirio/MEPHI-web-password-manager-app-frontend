import React, {Component} from "react"
import InfoCard from "./infoCard";

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis congue rhoncus. " +
            "Donec vulputate arcu eu erat dignissim sagittis. Aliquam ultrices ante in bibendum pharetra. " +
            "Nam iaculis augue luctus pretium ultrices. Proin hendrerit vestibulum nulla eget laoreet. " +
            "Integer vehicula tortor in augue feugiat hendrerit. Maecenas et finibus arcu. Cras nec lacus nisi. M" +
            "auris eros metus, placerat eget nunc quis, egestas semper justo. "
    }


    render() {
        return (
            <div className="content">

                <InfoCard title="Sample" text={this.lorem} link="/"/>

                <InfoCard title="Sample" text={this.lorem} link="/"/>

                <InfoCard title="Sample" text={this.lorem} link="/"/>

                <InfoCard title="Sample" text={this.lorem} link="/"/>

            </div>
        )
    }
}