import React from 'react';
import '../inputfield.fx.css';
import materialColor from "material-colors";
import Button from '../../button/Button';

export default class InputField extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			mounted: false,
			focused: false,
			hover: false
		};
	}

	componentDidMount() {
		this.setState({
			mounted: true
		});
	}

	onFocusHandler = () => {
		this.setState({
			focused: true
		});
		if (this.props.handler) {
			this.setState({
				clicked: true
			})
		}
	};

	onFocusOutHandler = () => {
		this.setState({
			focused: false
		});
		if (this.props.handler) {
			this.setState({
				clicked: false
			});
		}
	};

	render() {
		if (!this.state.mounted) {
			return 'Loading';
		} else {

			const {name, value, type, id, onChange, hint, placeholder, handler, clickable, label, float, width, pattern, maxLength, color, showCancelButton} = this.props;
			const formattedHint = hint && hint.map((elem, i) => {
				return (<span key={i}>{elem}</span>);
			});
			if (clickable && !this.state.clicked) {
				return <span style={{color: color || materialColor.grey['700']}}>
                {label && <label style={{
					color: materialColor.grey['700'],
					fontSize: '12px',
					fontWeight: 'bold'
				}}>
					{label}
				</label>
				}<h5 onClick={this.onFocusHandler}
					 onBlur={this.onFocusOutHandler}
					 onMouseOver={() => this.setState({hover: true})}
					 onMouseLeave={() => this.setState({hover: false})}>
                    {placeholder}
					{this.state.hover && handler &&
					<i className='far fa-edit' style={{fontSize: '14px', marginLeft: '10px'}}/>}
                    </h5>
                    </span>;
			}
			return (
				<div style={{
					marginRight: float === 'left' ? '20px' : '0px',
					width: width + 'px',
					display: 'inline-block',
					paddingRight: '15px',
					verticalAlign: 'top'
				}}>
					{label && <label style={{
						color: materialColor.grey['700'],
						fontSize: '12px',
						display: 'block',
					}}>
						{clickable ? 'EDIT ' + label : label}
					</label>
					}
					<div style={{
						float: (this.state.focused ? 'left' : 'none'),
						width: clickable ? '80%' : 'auto',
					}}>
						<input type={type} id={id} style={{
							backgroundColor: (this.state.focused ? '#FAFAFA' : materialColor.blueGrey["50"]),
							textAlign: this.props.align,
							color: materialColor.blueGrey['800'],
							fontSize: '16px',
							borderBottom: (this.state.focused ? '1px solid ' + (color ? color : 'dodgerblue') : '1px solid ' + materialColor.grey['400'])
						}}
							   onFocus={this.onFocusHandler}
							   onBlur={this.onFocusOutHandler}
							   value={value}
							   onChange={onChange}
							   onKeyPress={(e) => {
								   if (e.key === 'Enter') {
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
						<div style={{fontSize: '12px', color: '#616161'}}>{formattedHint}</div>

					</div>
					{this.state.clicked &&
					showCancelButton && <div style={{marginLeft: '80%', paddingLeft: '20px'}}>
						<Button value={'Cancel'} color={materialColor.red['600']} onClick={this.onFocusOutHandler}/>
					</div>}


					<div style={{clear: 'both'}}/>

				</div>
			);
		}
	}
}
