import React from "react";
import materialColor from "material-colors";

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
				borderBottom: (this.props.active ? "4px solid " + materialColor.blue["400"] : "none"),
				padding: "10px 20px 0 20px",
				height: "40px",
				transition: "0.2s",
				color: materialColor.grey["800"],
				marginRight: "-1px",
				backgroundColor: ("white"),
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