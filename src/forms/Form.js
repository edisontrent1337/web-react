import React from 'react';
import InputField from '../input/inputfield/InputField.js';
import Button from '../button/Button.js';
import TextArea from '../input/textarea/TextArea';
import materialColor from 'material-colors';
import Message from '../message/Message';
import Select from '../input/select/Select';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			mounted: false,
			error: undefined
		};
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		this.setState({
			error: undefined
		});
	}

	componentDidMount() {
		this.setState({mounted: true});
	}

	render() {
		const {inputs} = this.props;
		if (!this.state.mounted) {
			return 'Loading'
		} else {
			let lastFloat = undefined;
			const inputProps = inputs.map((input, i) => {
				let {
					label, id, type, value, handler, hint, validator, mode, color,
					triggerOnEnter, loading, float, width, pattern, maxLength, align, options, showCancelButton
				} = input;
				if (typeof mode === 'undefined')
					mode = 'regular';
				if (type === 'text' || type === 'password' || type === 'number') {
					return (
						<div style={{padding: '0 0 15px 0'}} key={i}
						>
							<InputField
								color={color}
								label={label}
								id={id}
								name={id}
								type={type}
								onChange={this.props.onChange}
								hint={hint}
								handler={triggerOnEnter === true ? handler : undefined}
								width={width}
								pattern={pattern}
								maxLength={maxLength}
								align={align}
							/>
						</div>
					);
				} else if (type === 'button') {
					return (

						<Button
							color={this.props.color || color}
							onClick={handler}
							mode={mode}
							key={i}
							value={value}
							hint={hint}
							validator={validator}
							loading={loading}
						/>
					);
				} else if (type === 'textarea') {
					return (
						<div style={{padding: '0 0 15px 0'}} key={i}>
							<TextArea
								color={this.props.color}
								label={label}
								handler={handler}
								id={id}
								name={id}
								onChange={this.props.onChange}
								hint={hint}
								showCancelButton={showCancelButton}
							/>
						</div>
					);
				} else if (type === 'select') {
					return <Select options={options} key={i} name={id} id={id} hint={hint}
								   onChange={this.props.onChange}/>
				}
				lastFloat = float;
			});

			let links = "";
			if (typeof this.props.links !== 'undefined') {
				links = this.props.links.map((link, i) => {
					return (
						<div key={i}>
							<a style={{fontSize: '14px'}} href={link.href}>{link.value}</a>
						</div>
					);
				});
			}

			let {title, error, logo, hint} = this.props;
			return (
				<div
					style={{
						backgroundColor: '#FFF',
						padding: '20px 25px',
						borderRadius: '6px',
						border: '1px solid ' + materialColor.blueGrey['100'],
						color: materialColor.grey['700']
					}}
				>
					{title && <h4
						className='text-center'
						style={{
							color: '#012',
							fontSize: '30px'
						}}
					>
						{logo && <div style={{marginBottom: '20px'}}>
							{logo}
						</div>}

						{title}
					</h4>
					}
					{title && <hr/>}

					<div style={{marginBottom: '15px'}}>
						{error &&
						<Message color={'red'} heading={'An error occurred: '} message={error}
								 icon={'mdi mdi-alert-outline'} dismissIcon={'mdi mdi-close-circle-outline'}/>
						}
					</div>
					<div>{hint && <Message heading={'Attention:'} message={hint}/>}</div>
					{this.props.children}
					{inputProps}
					<div style={{clear: 'both'}}/>
					{links}
				</div>
			);
		}
	}
}
