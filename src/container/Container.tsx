import * as React from 'react';
import * as materialColor from 'material-colors';

// FIXME hmueller: find correct types
type ContainerProps = {
    height?: any;
    minHeight?: any;
};

export default class Container extends React.Component<ContainerProps> {
    render() {
        return (
            <div
                style={{
                    padding: '20px',
                    marginBottom: '30px',
                    border: '1px solid ' + materialColor.blueGrey['50'],
                    borderRadius: '8px',
                    width: '100%',
                    minHeight: this.props.minHeight + 'px',
                    height: this.props.height + 'px'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        overflowY: 'auto'
                    }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
