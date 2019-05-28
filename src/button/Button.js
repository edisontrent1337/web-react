import React from "react";
import "./button.fx.css";
import LoadingIndicator from "../indicators/LoadingIndicator";

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hovering: false
		};
		this.hoverHandler = this.hoverHandler.bind(this);
		this.leaveHandler = this.leaveHandler.bind(this);
	}

	componentDidMount() {
	}

	hoverHandler() {
		this.setState({
			hovering: true
		});
	}

	leaveHandler() {
		this.setState({
			hovering: false
		});
	}

	render() {
		const {color, mode, onClick, value, hint, loading, fontSize, width, leftIcon, rightIcon} = this.props;
		let validator = this.props.validator;
		const formattedHint =
			hint &&
			hint.map((elem, i) => {
				return <span key={i}> {elem} </span>;
			});
		if (typeof validator === "undefined") {
			validator = () => true;
		}
		return (
			<div style={{display: "inline-block", verticalAlign: 'top'}}>
				<button
					className="button"
					style={{
						fontSize: (fontSize ? fontSize + "px" : "16px"),
						fontWeight: "400",
						backgroundColor: loading ? "white" : this.state.hovering ? color : "transparent",
						border:
							"1px solid " +
							(this.state.hovering ? "transparent" : this.props.color),
						color: this.state.hovering ? "#FFF" : color,
						borderRadius: "4px",
						opacity: loading ? "1.0" : validator ? "0.8" : "0.3",
						transition: "0.2s",
						display: "block",
						width: width || (mode === "big" ? "100%" : "auto"),
						marginRight: "10px"
					}}
					onClick={onClick}
					onMouseLeave={this.leaveHandler}
					onMouseOver={this.hoverHandler}
					disabled={!validator}
				>
					{leftIcon &&
					<span style={{
						display: 'inline-block',
						borderRight: '1px solid ' + (this.state.hovering ? "#FFF" : color),
						padding: '2px 5px 0 0',
						fontSize: '1.4em',
						marginRight: '6px',
						verticalAlign: 'center',
						float: 'left',
					}} className={leftIcon}></span>
					}
					<span style={{
						display: 'inline-block',
						padding: mode === "icon" ? "0" : "7px 10px 5px 10px",
					}}>
					{loading ? <LoadingIndicator width={32} height={32}/> : value}
					</span>

					{rightIcon &&
					<span style={{
						display: 'inline-block',
						borderLeft: '1px solid ' + (this.state.hovering ? "#FFF" : color),
						padding: '2px 0 0 5px',
						fontSize: '1.4em',
						marginLeft: '6px',
						float: 'right',
					}} className={rightIcon}></span>
					}
				</button>
				<div style={{fontSize: "12px", color: "#616161"}}>
					{formattedHint}
				</div>
			</div>
		);
	}
}
