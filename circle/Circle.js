import React from "react";
import colors from "../../ilma-react/colors/colors";

export default class Circle extends React.Component {

	render() {
		const {title, url} = this.props;
		return (
			<a href={url} style={{
				borderRadius: "50%",
				display: "inline-block",
				width: "40px",
				height: "40px",
				backgroundColor: colors.blue["50"],
				float: "left",
				color: colors.grey["800"],
				textDecoration: "none"
			}}>
				<div style={{
					textAlign: "center",
					marginTop: "8px"
				}}>{title[0].toUpperCase()}</div>
			</a>
		);
	}
}