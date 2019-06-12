import * as React from 'react';
import '../inputfield.fx.css';
import * as materialColor from 'material-colors';
import Button from '../../button/Button';

type InputFieldProps = {
    name?: string;
    value?: string;
    type?: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    hint?: string;
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
};

type InputFieldState = {
    clicked: boolean;
    mounted: boolean;
    focused: boolean;
    hovering: boolean;
};

export default class InputField extends React.Component<
    InputFieldProps,
    InputFieldState
> {
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

    render() {
        if (!this.state.mounted) {
            return 'Loading';
        } else {
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
                align
            } = this.props;
            const formattedHint = hint && <span>{hint}</span>;
            if (clickable && !this.state.clicked) {
                return (
                    <span style={{ color: color || materialColor.grey['700'] }}>
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
                            onBlur={this.onFocusOutHandler}
                            onMouseOver={() =>
                                this.setState({ hovering: true })
                            }
                            onMouseLeave={() =>
                                this.setState({ hovering: false })
                            }
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
                        verticalAlign: 'top'
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
                            width: clickable ? '80%' : 'auto'
                        }}
                    >
                        <input
                            type={type}
                            id={id}
                            style={{
                                backgroundColor: this.state.focused
                                    ? '#FAFAFA'
                                    : materialColor.blueGrey['50'],
                                textAlign: align,
                                color: materialColor.blueGrey['800'],
                                fontSize: '16px',
                                width: width ? width : '100%',
                                borderBottom: this.state.focused
                                    ? '1px solid ' +
                                      (color ? color : 'dodgerblue')
                                    : '1px solid ' + materialColor.grey['400']
                            }}
                            onFocus={this.onFocusHandler}
                            onBlur={this.onFocusOutHandler}
                            value={value}
                            onChange={onChange}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    if (onEnterPress) {
                                        onEnterPress(e);
                                    }
                                }
                            }}
                            name={name}
                            placeholder={placeholder}
                            pattern={pattern}
                            maxLength={maxLength}
                        />
                        <div style={{ fontSize: '12px', color: '#616161' }}>
                            {formattedHint}
                        </div>
                    </div>
                    {this.state.clicked && showCancelButton && (
                        <div style={{ marginLeft: '80%', paddingLeft: '20px' }}>
                            <Button
                                value={'Cancel'}
                                color={materialColor.red['600']}
                                onClick={this.onFocusOutHandler}
                            />
                        </div>
                    )}

                    <div style={{ clear: 'both' }} />
                </div>
            );
        }
    }
}
