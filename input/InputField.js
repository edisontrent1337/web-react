import React from "react";
import './inputfield.fx.css';
import colors from "../colors/colors";

export default class InputField extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			mounted: false
		};
		this.onFocusHandler = this.onFocusHandler.bind(this);
		this.onFocusOutHandler = this.onFocusOutHandler.bind(this);
	}

	componentDidMount() {
		this.setState({
			mounted: true
		});
	}

	onFocusHandler() {
		if (this.props.handler) {
			this.setState({
				clicked: true
			})
		}
	}

	onFocusOutHandler() {
		if (this.props.handler) {
			this.setState({
				clicked: false
			});
		}
	}

	render() {
		if (!this.state.mounted) {
			return "Loading";
		}
		else {

			const {name, value, type, id, onChange, hint, placeholder, handler, clickable, label, float, width} = this.props;
			const formattedHint = hint && hint.map((elem, i) => {
				return (<span key={i}>{elem}</span>);
			});
			if (clickable && !this.state.clicked) {
				return <span>
					{label && <label style={{
						color: colors.grey["700"],
						fontSize: "12px",
						fontWeight: "bold"
					}}>
						{label}
					</label>
					}<h4 onClick={this.onFocusHandler} onBlur={this.onFocusOutHandler}>{placeholder}</h4>
				</span>;
			}
			return (
				<div style={{
					margin: "0px 0px 15px 0px",
					float: float,
					marginRight: float === "left" ? "20px" : "0px",
					width: width + "px"
				}}>
					{label && <label style={{
						color: colors.grey["700"],
						fontSize: "12px",
						fontWeight: "bold"
					}}>

						{clickable ? label + " BEARBEITEN" : label}
					</label>
					}
					<input type={type} id={id} style={{
						backgroundColor: (this.state.clicked ? "#FFF" : "#f2f2f2"),

					}}
						   onFocus={this.onFocusHandler}
						   onBlur={this.onFocusOutHandler}
						   value={value}
						   onChange={onChange}
						   onKeyPress={(e) => {
							   if (e.key === "Enter") {
								   if (handler) {
									   handler(e);
								   }
							   }
						   }}
						   name={name}
						   placeholder={placeholder}
					/>
					<span style={{fontSize: "12px", color: "#616161"}}>{formattedHint}</span>
				</div>
			);
		}
	}
}
