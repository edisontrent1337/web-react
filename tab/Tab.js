import React from "react";
import colors from "../colors/colors";

export default class Tab extends React.Component {

	constructor(props) {
		super(props);
		this.setActive = this.setActive.bind(this);
		this.setInactive = this.setInactive.bind(this);
	}

	render() {
		const {title, url} = this.props;
		return (
			<a className={"tab"} style={{
				fontSize: "16px",
				display: "inline-block",
				textAlign: "left",
				border: ("1px solid " + colors.grey["200"]),
				borderBottom: (this.props.active ? "2px solid " + colors.blue["600"] : "none"),
				padding: "10px 20px 0 20px",
				height: "40px",
				transition: "0.2s",
				color: colors.grey["800"],
				marginRight: "-1px",
				backgroundColor: (this.props.active ? "rgba(30,30,30,0.05)" : "white"),
				borderRadius: "8px 8px 0 0",
			}}
			   href={url}
			   onClick={this.setActive}
			   onBlur={this.setInactive}
			>
				{title}
			</a>
		);
	}

	setActive() {
		this.setState({active: true});
	}

	setInactive() {
		this.setState({active: false});
	}
}