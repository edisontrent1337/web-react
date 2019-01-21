import React from "react";
import colors from "../colors/colors";

export default class Circle extends React.Component {

    constructor(props) {
        super(props);
        this.decideOnRandomColor = this.decideOnRandomColor.bind(this);
        this.state = {
            backgroundColor: undefined,
            fontColor: undefined
        };
    }

    componentDidMount() {
        this.decideOnRandomColor();
    }

    decideOnRandomColor() {
        const numberOfColors = Object.keys(colors).length;
        let randomIndex = Math.floor(Math.random() * (numberOfColors));
        let color = Object.keys(colors)[randomIndex];
        while (color.includes("black") || color.includes("white") || color.includes("Icon") || color.includes("Text")) {
            randomIndex = Math.floor(Math.random() * (numberOfColors));
            color = Object.keys(colors)[randomIndex];
        }
        let backgroundColor = colors[color]["100"];
        let fontColor = colors[color]["400"];
        this.setState({
            backgroundColor: backgroundColor,
            fontColor: fontColor
        });
    }

    render() {
        const {title, url} = this.props;
        return (
            <a href={url} style={{
                borderRadius: "50%",
                display: "inline-block",
                width: "40px",
                height: "40px",
                backgroundColor: this.state.backgroundColor,
                float: "left",
                color: this.state.fontColor,
                textDecoration: "none",
                border: "1px solid " + colors.grey["50"]
            }}>
                <div style={{
                    textAlign: "center",
                    marginTop: "8px"
                }}>{title}</div>
            </a>
        );
    }
}