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

type FormInput = {
    label?: string;
    id: string;
    type: string;
    value?: string | JSX.Element;
    handler?: () => void;
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
    onChange: () => void;
    color?: string;
    links?: Link[];
    title?: string | JSX.Element;
    error?: string | JSX.Element;
    logo?: JSX.Element;
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
        this.setState({mounted: true});
    }

    render() {
        const {inputs} = this.props;
        if (!this.state.mounted) {
            return 'Loading';
        } else {
            let lastFloat = undefined;
            const inputProps = inputs.map((input, i) => {
                let {
                    label,
                    id,
                    type,
                    value,
                    handler,
                    active,
                    hint,
                    mode,
                    color,
                    triggerOnEnter,
                    loading,
                    float,
                    width,
                    pattern,
                    maxLength,
                    align,
                    options,
                    showCancelButton,
                } = input;

                if (typeof mode === 'undefined') {
                    mode = 'regular'
                }

                if (
                    type === 'text' ||
                    type === 'password' ||
                    type === 'number'
                ) {
                    return (
                        <div style={{padding: '0 0 15px 0'}} key={i}>
                            <InputField
                                color={color}
                                label={label}
                                id={id}
                                name={id}
                                type={type}
                                onChange={this.props.onChange}
                                hint={hint}
                                handler={
                                    triggerOnEnter === true
                                        ? handler
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
                            onClick={handler}
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
                    return (
                        <Select
                            options={options}
                            key={i}
                            name={id}
                            id={id}
                            hint={hint}
                            onChange={this.props.onChange}
                        />
                    );
                }
                lastFloat = float;
            });

            let links = undefined;
            if (typeof this.props.links !== 'undefined') {
                links = this.props.links.map((link: Link, i: number) => {
                    return (
                        <div key={i}>
                            <a style={{fontSize: '14px'}} href={link.href}>
                                {link.title}
                            </a>
                        </div>
                    );
                });
            }

            let {title, error, logo} = this.props;
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
                                <div style={{marginBottom: '20px'}}>
                                    {logo}
                                </div>
                            )}

                            {title}
                        </h4>
                    )}
                    {title && <hr/>}

                    <div style={{marginBottom: '15px'}}>
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
                    <div style={{clear: 'both'}}/>
                    {links}
                </div>
            );
        }
    }
}
