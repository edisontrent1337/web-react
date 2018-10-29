import React from "react";
import './inputfield.fx.css';

export default class InputField extends React.Component {

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
        const {name, value, type, id, onChange, hint} = this.props;
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
                <input type={type} id={id} style={{
                    border: "1px solid #CFD8DC",
                    backgroundColor: (this.state.clicked ? "#FFF" : "#f2f2f2"),
                    display: "block",
                    width: "100%",
                    margin: "0px 0px 0px 0px",
                    padding: "8px 12px 8px 12px",
                    borderRadius: "6px",
                    transition: "0.3s"
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
