import * as React from 'react';
import './inputfield.fx.css';
import * as materialColor from 'material-colors';
import Button from '../../button/Button';

type InputFieldProps = {
    name?: string;
    value?: string | number;
    type?: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    hint?: string | JSX.Element;
    placeholder?: string;
    onEnterPress?: any;
    clickable?: boolean;
    label?: string | JSX.Element;
    float?: number | string;
    width?: number | string;
    pattern?: any;
    maxLength?: number;
    color?: string;
    showCancelButton?: boolean;
    align?: any;
    valid?: boolean;
    validBorderColor?: string;
    invalidBorderColor?: string;
    clearOnClick?: boolean;
};

type InputFieldState = {
    clicked: boolean;
    mounted: boolean;
    focused: boolean;
    hovering: boolean;
};

export default class InputField extends React.Component<InputFieldProps, InputFieldState> {
    constructor(props: InputFieldProps) {
        super(props);
        this.state = {
            clicked: false,
            mounted: false,
            focused: false,
            hovering: false
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
        if (this.props.onEnterPress) {
            this.setState({
                clicked: true
            });
        }
    };

    onFocusOutHandler = () => {
        this.setState({
            focused: false
        });
        if (this.props.onEnterPress) {
            this.setState({
                clicked: false
            });
        }
    };

    onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        this.onFocusOutHandler();
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        this.onFocusHandler();
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    // FIXME: Introduce value as state so it can be cleared on click

    clearOnClick = () => {

    };

    render() {
        if (!this.state.mounted) {
            return 'Loading';
        }

        const {
            name,
            value,
            type,
            id,
            onChange,
            hint,
            placeholder,
            onEnterPress: onEnterPress,
            clickable,
            label,
            float,
            width,
            pattern,
            maxLength,
            color,
            showCancelButton,
            align,
            onClick,
            valid,
            invalidBorderColor,
            onKeyPress,
            onKeyDown,
            onKeyUp
        } = this.props;

        const formattedHint = hint && <span>{hint}</span>;

        if (clickable && !this.state.clicked) {
            return (
                <span style={{color: color || materialColor.grey['700']}}>
                    {label && (
                        <label
                            style={{
                                color: materialColor.grey['700'],
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}
                        >
                            {label}
                        </label>
                    )}
                    <h5
                        onClick={this.onFocusHandler}
                        onBlur={this.onBlur}
                        onFocus={this.props.onFocus}
                        onMouseOver={() => this.setState({hovering: true})}
                        onMouseLeave={() => this.setState({hovering: false})}
                    >
                        {placeholder}
                        {this.state.hovering && onEnterPress && (
                            <i
                                className="far fa-edit"
                                style={{
                                    fontSize: '14px',
                                    marginLeft: '10px'
                                }}
                            />
                        )}
                    </h5>
                </span>
            );
        }
        return (
            <div
                style={{
                    marginRight: float === 'left' ? '20px' : '0px',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    width: width || '100%'
                }}
            >
                {label && (
                    <label
                        style={{
                            color: materialColor.grey['700'],
                            fontSize: '12px',
                            display: 'block'
                        }}
                    >
                        {clickable ? 'EDIT ' + label : label}
                    </label>
                )}
                <div
                    style={{
                        float: this.state.focused ? 'left' : 'none',
                        width: clickable ? '80%' : width || '100%'
                    }}
                >
                    <input
                        type={type}
                        id={id}
                        style={{
                            backgroundColor: this.state.focused
                                ? materialColor.grey[50]
                                : materialColor.grey[100],
                            textAlign: align,
                            color: valid === false ? (invalidBorderColor || materialColor.red[400]) : materialColor.blueGrey['700'],
                            fontSize: '16px',
                            width: width ? width : '100%',
                            borderBottom: this.getBorderStyle()
                        }}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onClick={onClick}
                        value={value}
                        onChange={onChange}
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                if (onEnterPress) {
                                    onEnterPress(e);
                                }
                            }
                            else {
                                if (onKeyPress) {
                                    onKeyPress(e);
                                }
                            }
                        }}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        name={name}
                        placeholder={placeholder}
                        pattern={pattern}
                        maxLength={maxLength}
                    />
                    <div style={{fontSize: '12px', color: '#616161'}}>
                        {formattedHint}
                    </div>
                </div>
                {this.state.clicked && showCancelButton && (
                    <div style={{marginLeft: '80%', paddingLeft: '20px'}}>
                        <Button
                            value={'Cancel'}
                            color={materialColor.red['600']}
                            onClick={this.onFocusOutHandler}
                        />
                    </div>
                )}

                <div style={{clear: 'both'}}/>
            </div>
        );
    }

    getBorderStyle = () => {
        const {color, valid, invalidBorderColor} = this.props;
        let validColor = materialColor.grey[400];
        return '1px solid ' + (this.state.focused ? (color || 'dodgerblue') :
            (typeof invalidBorderColor !== 'undefined' ? (valid ? validColor : (invalidBorderColor)) : validColor));
    }
}

