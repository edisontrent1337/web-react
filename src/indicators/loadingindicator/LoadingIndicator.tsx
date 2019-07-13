import * as React from 'react';
// FIXME hmueller: this seems quite hacky, maybe we can find a better solution for this problem
const loading = require('./loading.gif');

type LoadingIndicatorProps = {
  width: number | string;
  height: number| string;
};

export default class LoadingIndicator extends React.Component<
  LoadingIndicatorProps
> {
  render() {
      const width = this.props.width;
      const height = this.props.height;
      return (
      <div
        style={{
          width: (typeof width === "number" ? width  + 'px' : width),
          height: (typeof height === "number" ? height  + 'px' : height),
          margin: '0px auto',
          opacity: 0.66
        }}
      >
        <img src={loading} style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }
}
