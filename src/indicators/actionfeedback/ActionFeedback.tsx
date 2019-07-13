import * as React from 'react';
import './actionfeedback.css';

interface ActionFeedbackState {
}

interface ActionFeedbackProps {
    backgroundColor?: string,
    actionFeedbackMessage?: string
}

export default class ActionFeedback extends React.Component<ActionFeedbackProps, ActionFeedbackState> {

    render() {
        return (
            <div style={{backgroundColor: this.props.backgroundColor}}
                className={'actionFeedbackMessage ' + (this.props.actionFeedbackMessage === undefined ? 'hidden' : 'visible')}>
                <span className={'mdi mdi-information-outline'}/>{this.props.actionFeedbackMessage}
            </div>
        );
    }

}