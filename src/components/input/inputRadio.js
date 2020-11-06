import React, {Component} from "react"

/*

    Option structure

    {
        name:"имя",
        value:"value",
        text:"Бесполезная опция"
    }

 */

export default class InputRadio extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input_select">
                <p>{this.props.optionName}</p>
                <div className="input_radio">
                    {
                        this.props.options.map(option => {
                            return (
                                <div className="options" key={option.value}><input name={option.name} type="radio"
                                                                                   value={option.value}
                                                                                   onChange={this.props.onChange}/>
                                    <label htmlFor={option.value}> {option.text}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}