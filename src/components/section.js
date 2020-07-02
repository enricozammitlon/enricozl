import React, { Component } from "react";


export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({
                active: this.props.active
            })
        }
    }

    toggleClass = toggle => {
        this.props.toggle(toggle, this.props.text)
        this.setState({
            active: 1
        })
    };
    //        	<li class="active" onClick={this.getCurrentSection("aims")}>Aims</li>


    render() {
        return (
            <li
                className={this.state.active ? 'active' : 'inactive'}
                onClick={this.toggleClass}
            >
                {this.props.text}
            </li>
        )
    }
}