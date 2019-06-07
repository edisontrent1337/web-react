import * as React from 'react';
import '../inputfield.fx.css';
import * as materialColor from 'material-colors';
import Button from '../../button/Button';

// FIXME hmueller: find correct types for these
type InputFieldProps = {
    name?: any;
    value?: any;
    type?: any;
    id?: any;
    onChange?: any;
    hint?: any;
    placeholder?: any;
    handler?: any;
    clickable?: any;
    label?: any;
    float?: any;
    width?: any;
    pattern?: any;
    maxLength?: any;
    color?: any;
    showCancelButton?: any;
    align?: any;
};

// FIXME hmueller: find correct types for these
type InputFieldState = {
    clicked: boolean;
    mounted: boolean;
    focused: boolean;
    hover: boolean;
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
            });
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
            const {
                name,
                value,
                type,
                id,
                onChange,
                hint,
                placeholder,
                handler,
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
            const formattedHint =
                hint &&
                // FIXME hmueller: find correct types for 'elem'
                hint.map((elem: any, i: number) => {
                    return <span key={i}>{elem}</span>;
                });
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
                            onMouseOver={() => this.setState({ hover: true })}
                            onMouseLeave={() => this.setState({ hover: false })}
                        >
                            {placeholder}
                            {this.state.hover && handler && (
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
