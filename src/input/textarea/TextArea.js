import React from 'react';
import '../inputfield.fx.css';
import materialColor from 'material-colors';
import Button from '../../button/Button';

export default class TextArea extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			mounted: false
		};
	}

	onFocusHandler = () => {
		this.setState({
			clicked: true
		});
	};

	onFocusOutHandler = () => {
		this.setState({
			clicked: false
		});
	};

	componentDidMount() {
		this.setState({
			mounted: true
		});
	}

	render() {
		if (!this.state.mounted) {
			return 'Loading';
		}
		else {
			const {name, value, id, color, onChange, hint, clickable, width, placeholder, handler, label, height, editValidator, loading, showCancelButton, showUpdateButton} = this.props;
			const formattedHint = hint && hint.map((elem, i) => {
				return (<span key={i}>{elem}</span>);
			});
			if (clickable && !this.state.clicked) {
				return <span>
					{label && <label style={{
						color: materialColor.grey['700'],
						fontSize: '12px',
					}}>
						{label}
					</label>
					}<p onClick={this.onFocusHandler} onBlur={this.onFocusOutHandler}>{placeholder}</p>
				</span>;
			}
			else {
				return (
					<div>
						<label style={{
							color: '#616161',
							fontSize: '12px',
						}}>
							{label}
						</label>
						<textarea id={id} style={{
							backgroundColor: (this.state.clicked ? '#FBFBFB' : materialColor.blueGrey['50']),
							display: 'block',
							height: height ? height : 'auto',
							resize: 'none',
							borderBottom: (this.state.clicked ? '1px solid ' + (color ? color : 'dodgerblue') : '1px solid ' + materialColor.grey['400']),
							width: width ? width : '100%',
						}}
								  onFocus={this.onFocusHandler}
								  onBlur={clickable === true ? undefined : this.onFocusOutHandler}
								  value={value}
								  onChange={onChange}
								  name={name}
								  defaultValue={placeholder}
						/>
						<div style={{fontSize: '12px', color: '#616161'}}>{formattedHint}</div>
						{handler &&
						<div style={{marginTop: '20px'}}>
							{showUpdateButton &&
							<Button value={'Update'} color={materialColor.green['600']} onClick={handler}
									validator={editValidator} loading={loading}/>}
							{showCancelButton &&
							<Button value={'Cancel'} color={materialColor.red['600']}
									onClick={this.onFocusOutHandler}/>}
						</div>
						}
					</div>
				);
			}
		}
	}
}
