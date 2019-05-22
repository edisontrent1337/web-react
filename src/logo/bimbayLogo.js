import React from "react";
import logo from "./logo.png";

export default class BimbayLogo extends React.Component {
    render() {
        return (
            <div>
                <a href="/">
                    <img src={logo} />
                </a>
            </div>
        );
    }
}
