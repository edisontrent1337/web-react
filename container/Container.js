import React from "react";
import colors from "../colors/colors";

export default class Container extends React.Component {

	render() {
		return (
			<div style={{
				padding: "20px",
				marginBottom: "30px",
				border: "1px solid " + colors.blueGrey["50"],
				borderRadius: "8px",
				width: "100%",
				height:this.props.height + "px"
			}}>
				{this.props.children}
			</div>
		);
	}
}