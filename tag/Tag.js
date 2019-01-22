import React from "react";

export default class Tag extends React.Component {

    render() {
        const {padding} = this.props;
        return (
            <span style={{
                border: "1px solid " + this.props.color,
                borderRadius: "10px",
                color: this.props.color,
                fontSize: "10px",
                padding: padding || "5px",
                fontWeight: "normal",
            }}>{this.props.tag}</span>
        );
    }
}