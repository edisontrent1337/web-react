import * as React from 'react';
import * as materialColor from 'material-colors';
import '../inputfield/inputfield.fx.css';

type SelectProps = {
    name: string;
    label?: string;
    color?: string;
    options: string[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    id?: string;
    hint?: string;
    selectedOption?: string;
    width?: string;
};

type SelectState = {
    focused: boolean;
};

export default class Select extends React.Component<SelectProps, SelectState> {
    constructor(props: SelectProps) {
        super(props);
        this.state = {
            focused: false
        };
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
    };

    render() {
        const {
            label,
            color,
            options,
            onChange,
            id,
            hint,
            width,
            selectedOption
        } = this.props;
        const formattedHint = hint && <span> {hint} </span>;
        return (
            <div style={{
                display: 'inline-block',
                verticalAlign: 'top',
                width: width || '100%'
            }}>
                {label && <label
					style={{
                        color: materialColor.grey['700'],
                        fontSize: '12px',
                        display: 'block'
                    }}
				>
                    {label}
				</label>}
                <div
                    className={'mdi mdi-chevron-down select-overhaul'}
                    onClick={this.onFocusHandler}
                    style={{
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        marginTop: '-1px',
                        color: this.state.focused ? color : materialColor.grey[600],
                        borderBottom: this.state.focused
                            ? '1px solid ' + (color || 'dodgerblue')
                            : '1px solid ' + materialColor.grey['400'],
                        backgroundColor: this.state.focused
                            ? materialColor.grey[50]
                            : materialColor.grey[100],
                        width: width || '100%',
                        transition: '0.3s',
                    }}
                >
                    <select
                        onBlur={this.onFocusOutHandler}
                        name={id}
                        id={id}
                        onChange={(e) => { if(onChange) onChange(e); e.stopPropagation();}}
                        defaultValue={selectedOption}
                        style={{
                            color: this.state.focused ? color : materialColor.grey[800],
                            backgroundColor: 'transparent',
                            fontSize: '16px',
                            height: '37px',
                        }}
                    >
                        {options.map((option: string, i: number) => {
                            return (
                                <option
                                    onClick={this.onFocusOutHandler}
                                    key={i}
                                    value={option}
                                >
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                    <div style={{display: 'table-cell'}}/>
                </div>
                <span
                    style={{
                        fontSize: '12px',
                        color: '#616161'
                    }}
                >
                    {formattedHint}
                </span>
            </div>
        );
    }
}
