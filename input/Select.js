import React from "react";

export default class Select extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {label, options, onChange, id, hint,selectedOption} = this.props;
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

				<select name={id} id={id} onChange={onChange} defaultValue={selectedOption}>
					{options.map((option, i) => {
						return <option key={i} value={option.toLowerCase()}>{option}</option>
					})}

				</select>
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