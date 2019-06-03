import React from "react";
import materialColor from "material-colors";
import '../inputfield.fx.css';

export default class Select extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			focused: false
		}
	}

	onFocusHandler = () => {
		this.setState({
			focused: true
		});
	};

	onFocusOutHandler = () => {
		this.setState({
			focused: false
		});
		console.log("OUT");
	};

	render() {
		const {label, color, options, onChange, id, hint, selectedOption} = this.props;
		const formattedHint =
			hint &&
			hint.map((elem, i) => {
				return <span key={i}> {elem} </span>;
			});
		return (
			<div style={{margin: "0px 0px 15px 0px"}}>
				<label style={{
					color: "#616161",
					fontSize: "12px",
					fontWeight: "bold"
				}}>
					{label}
				</label>
				<div className={'mdi mdi-chevron-down selector'}
					 onClick={this.onFocusHandler}
					 style={{
						 display: 'table',
						 paddingLeft:'10px',
						 paddingRight:'10px',
						 borderBottom: (this.state.focused ? '1px solid ' + (color ? color : 'dodgerblue') : '1px solid ' + materialColor.grey['400']),
						 backgroundColor: (this.state.focused ? '#FAFAFA' : materialColor.blueGrey["50"]),
						 transition: '0.3s'
					 }}>
					<select onBlur={this.onFocusOutHandler} name={id} id={id} onChange={onChange} defaultValue={selectedOption}
							style={{
								color: materialColor.blueGrey["800"],
								display: 'table-cell',
								backgroundColor: 'transparent',
								fontSize:'16px'
							}}>
						{options.map((option, i) => {
							return <option onClick={this.onFocusOutHandler} key={i} value={option.toLowerCase()}>{option}</option>
						})}

					</select>
					<div style={{display: 'table-cell'}}/>
				</div>
				<span
					style={{
						fontSize: "12px",
						color: "#616161"
					}}
				>
          {formattedHint}
        </span>
			</div>
		);
	}

}