import React from "react";
import {Alert} from "react-bootstrap";

export default class Message extends React.Component {


	render() {
		return (
			<Alert bsStyle={this.props.bsStyle}>
				<i className="fas fa-exclamation-triangle" style={{marginRight: "6px"}}></i>{this.props.heading}
				<p>{this.props.message}</p>
			</Alert>
		);
	}

}