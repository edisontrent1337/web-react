import * as React from 'react';
import * as materialColor from 'material-colors';
import './message.fx.css';

type MessageProps = {
    message?: string | JSX.Element;
    dismissIcon?: string;
    icon?: string;
    heading?: string;
    color: string;
    width?: string | number;
};

type MessageState = {
    show: boolean;
    fadedOut: boolean;
    hover: boolean;
    fadeProgress: number;
    message?: string | JSX.Element;
    fadeOutInterval?: NodeJS.Timeout;
    fade?: any;
};

export default class Message extends React.Component<MessageProps, MessageState> {
    constructor(props: MessageProps) {
        super(props);
        this.state = {
            show: true,
            fadedOut: false,
            hover: false,
            fadeProgress: 0,
            message: props.message,
            fadeOutInterval: undefined
        };
    }

    componentDidUpdate(prevProps: MessageProps, prevState: MessageState) {
        if (prevProps.message !== this.props.message) {
            if (this.state.fadeOutInterval)
                clearInterval(this.state.fadeOutInterval);
            this.setState({
                show: true,
                fadeProgress: 0
            });
        }
    }

    handleDismiss = () => {
        this.setState({
            show: false,
            fadeOutInterval: setInterval(this.fadeOut, 100)
        });
    };

    fadeOut = () => {
        this.setState({
            fadeProgress: Math.min(1, this.state.fadeProgress + 0.25)
        });
    };

    componentWillUnmount() {
        clearInterval(this.state.fade);
    }

    render() {
        const {
            message,
            dismissIcon,
            icon,
            heading,
            color,
            width
        } = this.props;

        return (
            <div
                className={'message'}
                style={{
                    padding: '10px 15px',
                    border: ('1px solid ' + (materialColor as any)[color]['200']) as any,
                    backgroundColor: (materialColor as any)[color]['100'] as any,
                    color: (materialColor as any)[color]['900'],
                    borderRadius: '6px',
                    width: typeof width === 'number' ? width + 'px' : (width === undefined ? 'auto' : width),
                    opacity: 1 - this.state.fadeProgress,
                    display: this.state.fadeProgress === 1 ? 'none' : 'block'
                }}
            >
                <div style={{fontWeight: 'bold'}}>
                    <div style={{display: 'table'}}>
                        {icon && (
                            <div
                                style={{
                                    display: 'table-cell',
                                    paddingRight: '8px',
                                    fontSize: '1.4em'
                                }}
                                className={icon}
                            />
                        )}
                        <div style={{display: 'table-cell', width: '100%'}}>
                            {heading}
                        </div>
                        {dismissIcon && (
                            <a
                                onMouseEnter={() => {
                                    this.setState({hover: true});
                                }}
                                onMouseLeave={() => {
                                    this.setState({hover: false});
                                }}
                                onClick={this.handleDismiss}
                                style={{
                                    display: 'table-cell',
                                    fontSize: '1.4em',
                                    cursor: this.state.hover
                                        ? 'pointer'
                                        : 'default'
                                }}
                                className={dismissIcon}
                            />
                        )}
                    </div>
                </div>
                <div>{message}</div>
            </div>
        );
    }
}
