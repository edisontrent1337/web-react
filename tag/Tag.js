import React from "react";

export default class Tag extends React.Component{

	render() {
		return(
			<span style={{
				border: "1px solid " + this.props.color,
				borderRadius: "10px",
				color: this.props.color,
				fontSize: "10px",
				padding: "5px",
				fontWeight: "normal",
				marginRight:"10px",
			}}>{this.props.tag}</span>
		);
	}
}