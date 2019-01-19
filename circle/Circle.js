import React from "react";
import colors from "../colors/colors";

export default class Circle extends React.Component {

	constructor(props) {
		super(props);
		this.decideOnRandomColor = this.decideOnRandomColor.bind(this);
		this.state = {
			circleColor: colors.grey["50"]
		};
	}

	componentDidMount() {
		this.decideOnRandomColor();
	}

	decideOnRandomColor() {
		const numberOfColors = Object.keys(colors).length;
		const randomIndex = Math.floor(Math.random() * (numberOfColors));
		const color = Object.keys(colors)[randomIndex];
		let result = colors[color]["50"];
		if (typeof result === "undefined") {
			result = colors.grey["50"];
		}
		this.setState({
			circleColor: result
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
				backgroundColor: this.state.circleColor,
				float: "left",
				color: colors.grey["800"],
				textDecoration: "none",
				border: "1px solid " + colors.grey["50"]
			}}>
				<div style={{
					textAlign: "center",
					marginTop: "8px"
				}}>{title[0].toUpperCase()}</div>
			</a>
		);
	}
}