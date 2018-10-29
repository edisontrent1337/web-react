import React from "react";
import InputField from "../input/InputField.js";
import Button from "../button/Button.js";
import BimbayLogo from "../../components/header/bimbayLogo.js";
import {Alert} from "react-bootstrap";

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
            const {label, id, type, value, handler, hint, validator} = input;
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
            } else {
                return (
                    <Button
                        color={this.props.color}
                        onClick={handler}
                        mode="big"
                        key={i}
                        value={value}
                        hint={hint}
                        validator={validator}
                    />
                );
            }
        });

        const links = this.props.links.map((link, i) => {
            return (
                <div key={i}>
                    <a style={{fontSize: "14px"}} href={link.href}>{link.value}</a>
                </div>
            );
        });

        return (
            <div
                style={{
                    backgroundColor: "#FFF",
                    padding: "30px",
                    borderRadius: "6px",
                    border: "1px solid #CFD8DC"
                }}
            >
                <h4
                    className="text-center"
                    style={{
                        color: "#012",
                        fontSize: "30px"
                    }}
                >
                    <BimbayLogo className=""/>
                    <br/>
                    {this.props.title}
                </h4>
                <hr/>
                <div>
                    {this.props.error ? (
                        <Alert bsStyle="danger">
                            {this.props.error}
                        </Alert>
                    ) : null}
                </div>
                {inputs}
                {links}
            </div>
        );
    }
}
