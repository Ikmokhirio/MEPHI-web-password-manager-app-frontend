import React, {Component} from "react"

export default class InputField extends Component {

    constructor(props) {
        super(props);
        this.inputFocus = this.inputFocus.bind(this);
        this.inputBlur = this.inputBlur.bind(this);
        this.state = {placeholderClass: "placeholder"};
    }

    inputFocus(event) {
        if (!event.target.value) this.inputBlur(event);
        this.setState({placeholderClass: "placeholder_focus"});
    }

    inputBlur(event) {
        if (event.target.value) return;
        this.setState({placeholderClass: "placeholder"});
    }

    render() {
        return (
            <div className="input_text">
                <input name={this.props.name} type={this.props.type} placeholder="" onFocus={this.inputFocus}
                       onBlur={this.inputBlur} onChange={(event) => {
                    this.inputFocus(event)
                    this.props.onChange(event)
                }}/>
                <span className={this.state.placeholderClass}>{this.props.placeholder}</span>
            </div>
        );
    }
}