import React from "react";
import loading from "./loading.gif";

export default class LoadingIndicator extends React.Component {

    render() {
        const mode = this.props.mode;
        return (
            <div style={{
                width: mode === "small" ? 50 : 200 + "px",
                height: mode === "small" ? 50 : 200 + "px",
                margin: "0px auto",
                opacity: "0.66"
            }}>
                <img src={loading} style={{width: "100%", height: "100%"}}/>
            </div>
        );
    }
}
