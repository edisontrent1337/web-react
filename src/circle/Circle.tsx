import * as React from 'react';
import * as materialColor from 'material-colors';

// FIXME hmueller: find correct types
type CircleProps = { title?: any; url?: any; color?: any; fontSize?: any };

export default class Circle extends React.Component<CircleProps> {
    constructor(props: CircleProps) {
        super(props);
        this.state = {
            backgroundColor: undefined,
            fontColor: undefined
        };
    }

    render() {
        const { title, url, color, fontSize } = this.props;
        return (
            <a
                href={url}
                style={{
                    borderRadius: '50%',
                    width: '40px',
                    display: 'block',
                    height: '40px',
                    backgroundColor: color['100'],
                    float: 'left',
                    color: color['400'],
                    textDecoration: 'none',
                    fontSize: fontSize ? fontSize : '24px',
                    border: '1px solid ' + materialColor.grey['50']
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        verticalAlign: 'center'
                    }}
                >
                    {title}
                </div>
            </a>
        );
    }
}
