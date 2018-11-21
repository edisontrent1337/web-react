import React from "react";
import './inputfield.fx.css';

export default class InputField extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		this.onFocusHandler = this.onFocusHandler.bind(this);
		this.onFocusOutHandler = this.onFocusOutHandler.bind(this);
	}

	onFocusHandler() {
		this.setState({
			clicked: true
		})
	}

	onFocusOutHandler() {
		this.setState({
			clicked: false
		})
	}

	render() {
		const {name, value, type, id, onChange, hint, placeholder} = this.props;
		const formattedHint = hint && hint.map((elem, i) => {
			return (<span key={i}>{elem}</span>);
		});
		return (
			<div style={{margin: "0px 0px 15px 0px"}}>
				{this.props.label && <label style={{
					color: "#616161",
					fontSize: "12px",
					fontWeight: "bold"
				}}>
					{this.props.label}
				</label>
				}
				<input type={type} id={id} style={{
					backgroundColor: (this.state.clicked ? "#FFF" : "#f2f2f2"),
				}}
					   onFocus={this.onFocusHandler}
					   onBlur={this.onFocusOutHandler}
					   value={value}
					   onChange={onChange}
					   name={name}
					   placeholder={placeholder}
				/>
				<span style={{fontSize: "12px", color: "#616161"}}>{formattedHint}</span>
			</div>
		);
	}
}
