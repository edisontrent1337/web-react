import React from "react";
import {Alert} from "react-bootstrap";

export default class Message extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.handleDismiss = this.handleDismiss.bind(this);
		this.handleShow = this.handleShow.bind(this);

		this.state = {
			show: true
		};
	}

	handleDismiss() {
		this.setState({show: false});
	}

	handleShow() {
		this.setState({show: true});
	}

	render() {
		if (this.state.show) {
			const {dismissable} = this.props;
			return (
				<Alert bsStyle={this.props.bsStyle} onDismiss={dismissable ? this.handleDismiss : undefined}>
					<i className="fas fa-exclamation-triangle" style={{marginRight: "6px"}}></i>{this.props.heading}
					<br/>
					{this.props.message}
				</Alert>
			);
		}
		else {
			return <span></span>;
		}
	}

}