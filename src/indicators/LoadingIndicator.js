import React from "react";
import loading from "./loading.gif";

export default class LoadingIndicator extends React.Component {

    render() {
        return (
            <div style={{
                width: this.props.width +  "px",
                height: this.props.height +  "px",
                margin: "0px auto",
                opacity: "0.66"
            }}>
                <img src={loading} style={{width: "100%", height: "100%"}}/>
            </div>
        );
    }
}
