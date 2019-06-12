import * as React from 'react';
import './hint.fx.css';
import Button from '../button/Button';
import * as materialColor from 'material-colors';

type HintProps = {
    icon?: string;
    text?: string | JSX.Element;
    buttonText?: string;
    buttonColor?: string;
    heading?: string;
    callback?: any;
    button?: Button;
};

export default class Hint extends React.Component<HintProps> {

    render() {
        const {
            icon,
            text,
            buttonText,
            buttonColor,
            heading,
            callback,
            button
        } = this.props;
        return (
            <div className="hintContainer" style={styles.base}>
                <h1>
                    <i className={icon}/>
                </h1>
                <h2>{heading}</h2>
                <div>
                    <p>{text}</p>
                    {this.props.children}
                </div>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                        {buttonText && (
                            <Button
                                value={buttonText}
                                color={
                                    buttonColor || materialColor.green['800']
                                }
                                onClick={callback}
                            />
                        )}
                        {button}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    base: {
        backgroundColor: materialColor.blueGrey['50'],
        color: materialColor.grey['800'],
        padding: '25px',
        borderRadius: '8px',
        marginTop: '50px',
        marginBottom: '50px',
        overflow: 'hidden'
    }
};
