import React from "react";
import './inputfield.fx.css';
import colors from "../colors/colors";
import Button from "../button/Button";

export default class InputField extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			mounted: false,
			hover: false
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

			const {name, value, type, id, onChange, hint, placeholder, handler, clickable, label, float, width, pattern, maxLength, color, showCancelButton} = this.props;
			const formattedHint = hint && hint.map((elem, i) => {
				return (<span key={i}>{elem}</span>);
			});
			if (clickable && !this.state.clicked) {
				return <span style={{color: color || colors.grey["700"]}}>
                {label && <label style={{
					color: colors.grey["700"],
					fontSize: "12px",
					fontWeight: "bold"
				}}>
					{label}
				</label>
				}<h5 onClick={this.onFocusHandler}
					 onBlur={this.onFocusOutHandler}
					 onMouseOver={() => this.setState({hover: true})}
					 onMouseLeave={() => this.setState({hover: false})}>
                    {placeholder}
					{this.state.hover && handler &&
					<i className="far fa-edit" style={{fontSize: "14px", marginLeft: "10px"}}></i>}
                    </h5>
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
						fontWeight: "bold",
						display: "block"
					}}>

						{clickable ? "EDIT " + label : label}
					</label>
					}
					<div style={{
						float: (this.state.clicked ? "left" : "none"),
						width: clickable ? "80%" : "auto",
					}}>
						<input type={type} id={id} style={{
							backgroundColor: (this.state.clicked ? "#FFF" : "#f2f2f2"),
							textAlign: this.props.align,
							fontSize: "18px"
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
							   pattern={pattern}
							   maxLength={maxLength}
						/>
						<div style={{fontSize: "12px", color: "#616161"}}>{formattedHint}</div>

					</div>
					{this.state.clicked &&
					showCancelButton && <div style={{marginLeft: "80%", paddingLeft: "20px"}}>
						<Button value={"Cancel"} color={colors.red["600"]} onClick={this.onFocusOutHandler}/>
					</div>}


					<div style={{clear: "both"}}></div>

				</div>
			);
		}
	}
}
