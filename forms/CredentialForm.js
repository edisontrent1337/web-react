import React from "react";
import InputField from "../input/InputField.js";
import Button from "../button/Button.js";
import BimbayLogo from "../logo/bimbayLogo.js";
import {Alert} from "react-bootstrap";
import TextArea from "../input/TextArea";
import colors from "../colors/colors";

export default class CredentialForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {


        const inputs = this.props.inputs.map((input, i) => {
            let {label, id, type, value, handler, hint, validator, mode, color} = input;
            if (typeof  mode === 'undefined')
                mode = 'regular';
            if (type === "text" || type === "password") {
                return (
                    <InputField
                        color={this.props.color}
                        label={label}
                        key={i}
                        id={id}
                        name={id}
                        type={type}
                        onChange={this.props.onChange}
                        hint={hint}
                    />
                );
            } else if (type === "button") {
                return (
                    <Button
                        color={this.props.color || color}
                        onClick={handler}
                        mode={mode}
                        key={i}
                        value={value}
                        hint={hint}
                        validator={validator}
                    />
                );
            }
            else if (type === "textarea") {
                return (
                    <TextArea
                        color={this.props.color}
                        label={label}
                        key={i}
                        id={id}
                        name={id}
                        onChange={this.props.onChange}
                        hint={hint}
                    />
                );
            }
        });

        let links = <div></div>;
        if (typeof this.props.links !== 'undefined') {
            links = this.props.links.map((link, i) => {
                return (
                    <div key={i}>
                        <a style={{fontSize: "14px"}} href={link.href}>{link.value}</a>
                    </div>
                );
            });
        }

        let {title, error, logo} = this.props;
        if (typeof logo === "undefined") {
            logo = <BimbayLogo/>;
        }

        return (
            <div
                style={{
                    backgroundColor: "#FFF",
                    padding: "30px",
                    borderRadius: "6px",
                    border: "1px solid " + colors.blueGrey["100"]
                }}
            >
                {title && <h4
                    className="text-center"
                    style={{
                        color: "#012",
                        fontSize: "30px"
                    }}
                >
                    <div style={{marginBottom: "20px"}}>
                        {logo}
                    </div>

                    {title}
                </h4>
                }
                {title && <hr/>}

                <div>
                    {error ? (
                        <Alert bsStyle="danger">
                            {this.props.error}
                        </Alert>
                    ) : null}
                </div>
                {inputs}
                <div style={{clear: "both"}}></div>
                {links}
            </div>
        );
    }
}
