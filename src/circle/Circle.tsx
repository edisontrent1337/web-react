import * as React from 'react';
import * as materialColor from 'material-colors';

type CircleProps = { title: string; url?: string; color: string; fontSize?: any };

export default class Circle extends React.Component<CircleProps> {
    constructor(props: CircleProps) {
        super(props);
        this.state = {
            backgroundColor: undefined,
            fontColor: undefined
        };
    }

    render() {
        let {title, url, color, fontSize} = this.props;

        let convertedColor = materialColor[color];
        if (typeof convertedColor === 'undefined') {
            convertedColor = materialColor['blueGrey'];
        }
        return (
            <a
                href={url}
                style={{
                    borderRadius: '50%',
                    width: '40px',
                    display: 'block',
                    height: '40px',
                    backgroundColor: convertedColor[100],
                    float: 'left',
                    color: convertedColor[400],
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
                    {title.charAt(0)}
                </div>
            </a>
        );
    }
}
