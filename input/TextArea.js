import React from "react";
import './inputfield.fx.css';
import colors from "../colors/colors";
import Button from "../button/Button";

export default class TextArea extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			mounted: false
		};
		this.onFocusHandler = this.onFocusHandler.bind(this);
		this.onFocusOutHandler = this.onFocusOutHandler.bind(this);
	}

	onFocusHandler() {
		this.setState({
			clicked: true
		});
	}

	onFocusOutHandler() {
		this.setState({
			clicked: false
		});
	}

	componentDidMount() {
		this.setState({
			mounted: true
		});
	}

	render() {
		if (!this.state.mounted) {
			return "Loading";
		}
		else {
			const {name, value, id, onChange, hint, clickable, placeholder, handler, label, height, editValidator, loading, showCancelButton, showUpdateButton} = this.props;
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
					}<p onClick={this.onFocusHandler} onBlur={this.onFocusOutHandler}>{placeholder}</p>
				</span>;
			}
			else {
				return (
					<div style={{margin: "0px 0px 15px 0px"}}>
						<label style={{
							color: "#616161",
							fontSize: "12px",
							fontWeight: "bold"
						}}>
							{label}
						</label>
						<textarea id={id} style={{
							backgroundColor: (this.state.clicked ? "#FFF" : colors.blueGrey["50"]),
							height: height ? height : "auto",
							resize: "none"
						}}
								  onFocus={this.onFocusHandler}
								  onBlur={clickable === true ? undefined : this.onFocusOutHandler}
								  value={value}
								  onChange={onChange}
								  name={name}
								  defaultValue={placeholder}
						/>
						<span style={{fontSize: "12px", color: "#616161"}}>{formattedHint}</span>
						{handler &&
						<div style={{marginTop: "20px"}}>
							{showUpdateButton && <Button value={"Update"} color={colors.green["600"]} onClick={handler}
									validator={editValidator} loading={loading}/>}
							{showCancelButton && <Button value={"Cancel"} color={colors.red["600"]} onClick={this.onFocusOutHandler}/>}
						</div>
						}
					</div>
				);
			}
		}
	}
}
