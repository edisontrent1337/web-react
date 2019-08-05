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
            selectedOption
        } = this.props;
        const formattedHint = hint && <span> {hint} </span>;
        return (
            <div style={{
                display: 'inline-block',
                verticalAlign: 'top',
            }}>
                <label
                    style={{
                        color: '#616161',
                        fontSize: '12px',
                    }}
                >
                    {label}
                </label>
                <div
                    className={'mdi mdi-chevron-down selector'}
                    onClick={this.onFocusHandler}
                    style={{
                        display: 'table',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        marginLeft: '-10px',
                        color: color,
                        borderBottom: this.state.focused
                            ? '1px solid ' + (color || 'dodgerblue')
                            : '1px solid ' + materialColor.grey['400'],
                        backgroundColor: this.state.focused
                            ? '#FAFAFA'
                            : materialColor.blueGrey['50'],
                        transition: '0.3s'
                    }}
                >
                    <select
                        onBlur={this.onFocusOutHandler}
                        name={id}
                        id={id}
                        onChange={onChange}
                        defaultValue={selectedOption}
                        style={{
                            color: materialColor.blueGrey['800'],
                            display: 'table-cell',
                            backgroundColor: 'transparent',
                            fontSize: '16px',
                            padding: '0'
                        }}
                    >
                        {options.map((option: string, i: number) => {
                            return (
                                <option
                                    onClick={this.onFocusOutHandler}
                                    key={i}
                                    value={option.toLowerCase()}
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
