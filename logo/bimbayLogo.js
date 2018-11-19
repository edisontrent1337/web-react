import React from "react";
import {Link} from "react-router-dom";
import logo from "./logo.png";

export default class BimbayLogo extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
        );
    }
}
