import * as React from 'react';

// FIXME hmueller: find correct types
type TagProps = {
    padding?: any;
    fontSize?: any;
    color?: any;
    tag?: any;
};

export default class Tag extends React.Component<TagProps> {
    render() {
        const { padding, fontSize, color, tag } = this.props;
        return (
            <span
                style={{
                    border: '1px solid ' + color,
                    borderRadius: '10px',
                    color: color,
                    fontSize: fontSize || '10px',
                    padding: padding || '5px',
                    fontWeight: 'normal'
                }}
            >
                {tag}
            </span>
        );
    }
}
