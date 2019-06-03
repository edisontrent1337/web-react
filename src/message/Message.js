import React from "react";
import colors from '../colors/colors.js';

export default class Message extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			show: true,
			hover: false
		};
	}

	handleDismiss = () => {
		this.setState({show: false});
	};

	handleShow = () => {
		this.setState({show: true});
	};

	render() {
		if (this.state.show) {
			const {message, dismissIcon, icon, heading, color, width} = this.props;
			return (
				<div
					style={{
						padding: '10px 15px',
						border: '1px solid ' + colors[color]['200'],
						backgroundColor: colors[color]['100'],
						color: colors[color]['900'],
						margin: '10px',
						borderRadius: '6px',
						width: width ? width : 'auto'
					}}>
					<div style={{fontWeight: "bold"}}>

						<div style={{display: 'table'}}>
							{icon &&
							<div
								style={{display: 'table-cell', paddingRight: '8px', fontSize: '1.4em'}}
								className={icon}/>}
							<div style={{display: 'table-cell', width: '100%'}}>{heading}</div>
							{dismissIcon &&
							<a onMouseEnter={() => {
								this.setState({hover: true})
							}} onMouseLeave={() => {
								this.setState({hover: false})
							}} onClick={this.handleDismiss} style={{
								display: 'table-cell',
								fontSize: '1.4em',
								cursor: this.state.hover ? 'pointer' : 'default'
							}}
							   className={dismissIcon}/>}
						</div>
					</div>
					<div>
						{message}
					</div>
				</div>
			);
		}
		else {
			return <span/>;
		}
	}

}