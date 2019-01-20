import React from "react";
import "./button.fx.css";
import LoadingIndicator from "../indicators/LoadingIndicator";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        };
        this.hoverHandler = this.hoverHandler.bind(this);
        this.leaveHandler = this.leaveHandler.bind(this);
    }

    componentDidMount() {
    }

    hoverHandler() {
        this.setState({
            hovering: true
        });
    }

    leaveHandler() {
        this.setState({
            hovering: false
        });
    }

    render() {
        const {color, mode, onClick, value, hint, loading, fontSize, width} = this.props;
        let validator = this.props.validator;
        const formattedHint =
            hint &&
            hint.map((elem, i) => {
                return <span key={i}> {elem} </span>;
            });
        if (typeof validator === "undefined") {
            validator = () => true;
        }
        return (
            <div>
                <button
                    className="button"
                    style={{
                        fontSize: (fontSize ? fontSize + "px" : "18px"),
                        fontWeight: "400",
                        backgroundColor: loading ? "white" : this.state.hovering ? color : "transparent",
                        border:
                            "1px solid " +
                            (this.state.hovering ? "transparent" : this.props.color),
                        color: this.state.hovering ? "#FFF" : color,
                        padding: mode === "icon" ? "0" : "5px 15px 5px 15px",
                        borderRadius: "6px",
                        opacity: loading ? "1.0" : validator ? "0.8" : "0.3",
                        transition: "0.2s",
                        display: "block",
                        width: width || (mode ==="big" ? "100%" : "auto"),
                        float: 'left',
                        marginRight: "10px"
                    }}
                    onClick={onClick}
                    onMouseLeave={this.leaveHandler}
                    onMouseOver={this.hoverHandler}
                    disabled={!validator}
                >
                    {loading ? <LoadingIndicator width={32} height={32}/> : value}
                </button>
                <span
                    style={{
                        fontSize: "12px",
                        color: "#616161"
                    }}
                >
          {formattedHint}
        </span>
            </div>
        );
    }
}
