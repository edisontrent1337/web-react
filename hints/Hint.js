import React from "react";
import "./hint.fx.css";
import Button from "../button/Button";
import colors from "../colors/colors";

export default class Hint extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {text, buttonText, heading, callback} = this.props;
		return (
			<div className="hintContainer" style={styles.base}>
				<h2>{heading}</h2>
				<p>
					{text}
				</p>
				<div style={{textAlign: "center"}}>
					<div style={{display: "inline-block"}}>
						<Button value={buttonText}
								color={colors.green["800"]}
								onClick={callback}/>
					</div>
				</div>
			</div>
		);
	}

}

const styles = {
	base: {
		backgroundColor: colors.blueGrey["50"],
		color: colors.grey["800"],
		padding: "25px",
		borderRadius: "8px",
		marginTop: "50px",
		overflow: "hidden"
	}
}