import * as React from 'react';

type TagProps = {
    padding?: string | number;
    fontSize?: string | number;
    color?: string;
    tag?: string | number | JSX.Element;
};

export default class Tag extends React.Component<TagProps> {
    render() {
        const {padding, fontSize, color, tag} = this.props;
        return (
            <span
                style={{
                    border: '1px solid ' + color,
                    borderRadius: '10px',
                    color: color,
                    fontSize: (typeof fontSize === 'string' ? fontSize : (fontSize === undefined ? '10px' : fontSize)),
                    padding: (typeof padding === 'string' ? padding : (padding === undefined ? '5px' : padding)),
                    fontWeight: 'normal'
                }}
            >
                {tag}
            </span>
        );
    }
}
