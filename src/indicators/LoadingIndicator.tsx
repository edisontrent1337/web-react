import * as React from 'react';
// FIXME hmueller: this seems quite hacky, maybe we can find a better solution for this problem
const loading = require('./loading.gif');

type LoadingIndicatorProps = {
  width: number;
  height: number;
};

export default class LoadingIndicator extends React.Component<
  LoadingIndicatorProps
> {
  render() {
    return (
      <div
        style={{
          width: this.props.width + 'px',
          height: this.props.height + 'px',
          margin: '0px auto',
          opacity: 0.66
        }}
      >
        <img src={loading} style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }
}
