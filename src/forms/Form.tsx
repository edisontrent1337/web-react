import * as React from 'react';
import * as materialColor from 'material-colors';

import InputField from '../input/inputfield/InputField';
import Button from '../button/Button';
import TextArea from '../input/textarea/TextArea';
import Message from '../message/Message';
import Select from '../input/select/Select';

export class Link {
    href: string;
    title: string;
    constructor(href: string, title: string) {
        this.href = href;
        this.title = title;
    }
}

type ChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;
type OnChangeCallback = (event?: ChangeEvent) => void;

type FormInput = {
    label?: string;
    id: string;
    type: string;
    value?: string | JSX.Element;
    onClickOrEnterPress?: () => void;
    onChange?: OnChangeCallback;
    hint?: string;
    mode?: string;
    color?: string;
    triggerOnEnter?: boolean;
    loading?: boolean;
    float?: string;
    width?: string | number;
    pattern?: string;
    maxLength?: number;
    align?: any;
    options?: any;
    showCancelButton?: boolean;
    active?: boolean;
};

type FormProps = {
    inputs: FormInput[];
    color?: string;
    links?: Link[];
    title?: string | JSX.Element;
    error?: string | JSX.Element;
    logo?: JSX.Element;
    onChange?: OnChangeCallback;
};

type FormState = {
    mounted: boolean;
    error: undefined | string;
};

export default class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            mounted: false,
            error: undefined
        };
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    renderInput = (
        input: FormInput,
        i: number,
        externalOnChange?: OnChangeCallback
    ) => {
        let {
            label,
            id,
            type,
            value,
            onClickOrEnterPress,
            onChange,
            active,
            hint,
            mode,
            color,
            triggerOnEnter,
            loading,
            width,
            pattern,
            maxLength,
            align,
            options,
            showCancelButton
        } = input;

        if (mode === undefined) {
            mode = 'regular';
        }

        const finalOnChange = (event: ChangeEvent) => {
            if (onChange) {
                onChange(event);
            }
            if (externalOnChange) {
                externalOnChange(event);
            }
        };

        if (type === 'text' || type === 'password' || type === 'number') {
            return (
                <div style={{ padding: '0 0 15px 0' }} key={i}>
                    <InputField
                        color={color}
                        label={label}
                        id={id}
                        name={id}
                        type={type}
                        onChange={finalOnChange}
                        hint={hint}
                        onEnterPress={
                            triggerOnEnter === true
                                ? onClickOrEnterPress
                                : undefined
                        }
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
                    onClick={onClickOrEnterPress}
                    mode={mode}
                    key={i}
                    value={value}
                    hint={hint}
                    active={active}
                    loading={loading}
                />
            );
        } else if (type === 'textarea') {
            return (
                <div style={{ padding: '0 0 15px 0' }} key={i}>
                    <TextArea
                        color={this.props.color}
                        label={label}
                        onUpdateClick={onClickOrEnterPress}
                        id={id}
                        name={id}
                        onChange={finalOnChange}
                        hint={hint}
                        showCancelButton={showCancelButton}
                    />
                </div>
            );
        } else if (type === 'select') {
            return (
                <Select
                    options={options}
                    key={i}
                    name={id}
                    id={id}
                    hint={hint}
                    onChange={finalOnChange}
                />
            );
        }
    };

    render() {
        const { inputs, onChange } = this.props;
        if (!this.state.mounted) {
            return 'Loading';
        } else {
            let lastFloat = undefined;
            const inputProps = inputs
                .map((input, i) => {
                    lastFloat = input.float;
                    return input;
                })
                .map((input, i) => this.renderInput(input, i, onChange));

            let links = undefined;
            if (this.props.links !== undefined) {
                links = this.props.links.map((link: Link, i: number) => {
                    return (
                        <div key={i}>
                            <a style={{ fontSize: '14px' }} href={link.href}>
                                {link.title}
                            </a>
                        </div>
                    );
                });
            }

            let { title, error, logo } = this.props;
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
                    {title && (
                        <h4
                            className="text-center"
                            style={{
                                color: '#012',
                                fontSize: '30px'
                            }}
                        >
                            {logo && (
                                <div style={{ marginBottom: '20px' }}>
                                    {logo}
                                </div>
                            )}

                            {title}
                        </h4>
                    )}
                    {title && <hr />}

                    <div style={{ marginBottom: '15px' }}>
                        {error && (
                            <Message
                                color={'red'}
                                heading={'An error occurred: '}
                                message={error}
                                icon={'mdi mdi-alert-outline'}
                                dismissIcon={'mdi mdi-close-circle-outline'}
                            />
                        )}
                    </div>
                    {this.props.children}
                    {inputProps}
                    <div style={{ clear: 'both' }} />
                    {links}
                </div>
            );
        }
    }
}
