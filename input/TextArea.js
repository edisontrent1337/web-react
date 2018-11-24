import React from "react";
import './inputfield.fx.css';
import colors from "../colors/colors";

export default class TextArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onFocusOutHandler = this.onFocusOutHandler.bind(this);
    }

    onFocusHandler() {
        this.setState({
            clicked: true
        })
    }

    onFocusOutHandler() {
        this.setState({
            clicked: false
        })
    }

    render() {
        const {name, value, id, onChange, hint} = this.props;
        const formattedHint = hint && hint.map((elem, i) => {
            return(<span key={i}>{elem}</span>);
        });
        return (
            <div style={{margin: "0px 0px 15px 0px"}}>
                <label style={{
                    color: "#616161",
                    fontSize: "12px",
                    fontWeight: "bold"
                }}>
                    {this.props.label}
                </label>
                <textarea id={id} style={{
                    backgroundColor: (this.state.clicked ? "#FFF" : colors.blueGrey["50"]),
                }}
                       onFocus={this.onFocusHandler}
                       onBlur={this.onFocusOutHandler}
                       value={value}
                       onChange={onChange}
                       name={name}
                />
                <span style={{fontSize: "12px", color: "#616161"}}>{formattedHint}</span>
            </div>
        );
    }
}
