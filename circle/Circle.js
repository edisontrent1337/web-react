import React from "react";
import colors from "../colors/colors";

export default class Circle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: undefined,
            fontColor: undefined
        };
    }

    render() {
        const {title, url, color, fontSize} = this.props;
        return (
            <a href={url} style={{
                borderRadius: "50%",
                width: "40px",
                display:"block",
                height: "40px",
                backgroundColor: color["100"],
                float: "left",
                color: color["400"],
                textDecoration: "none",
                fontSize: fontSize ? fontSize : "24px",
                border: "1px solid " + colors.grey["50"],
            }}>
                <div style={{
                    textAlign: "center",
                    verticalAlign:"center"
                }}>{title}</div>
            </a>
        );
    }
}