import React from "react";
import colors from "../../ilma-react/colors/colors";
import "./tab.fx.css";

export default class Tab extends React.Component {

	render() {
		const {title, url} = this.props;
		return (
			<a className={"tab"} style={{
				fontSize: "16px",
				fontWeight: "bold",
				display: "inline-block",
				textAlign: "left",
				borderBottom: "2px solid " + colors.blue["600"],
				padding: "10px 10px 0 10px",
				height: "40px",
				transition: "0.2s",
				color:colors.grey["800"]
			}}
			   href={url}
			>
				{title}
			</a>
		);
	}
}