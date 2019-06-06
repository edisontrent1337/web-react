import * as React from 'react';
import './button.fx.css';
import LoadingIndicator from '../indicators/LoadingIndicator';

type Maybe<T> = undefined | null | T;

export type OnClickCallback = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

type ValidationFunction = () => boolean;

type ButtonProps = {
  color: string;
  value: string | JSX.Element;
  onClick?: OnClickCallback;
  mode?: 'big' | string;
  hint?: Maybe<string[]>; // FIXME hmueller: shouldn't that be 'hints'? (It is being used as an array)
  loading?: Maybe<boolean>;
  fontSize?: Maybe<React.ReactText>;
  width?: Maybe<string>;
  leftIcon?: Maybe<string>;
  rightIcon?: Maybe<string>;
  validator?: Maybe<ValidationFunction>;
};

type ButtonState = {
  hovering: boolean;
};

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      hovering: false
    };
    this.hoverHandler = this.hoverHandler.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
  }

  componentDidMount() {}

  hoverHandler() {
    this.setState({
      hovering: true
    });
  }

  leaveHandler() {
    this.setState({
      hovering: false
    });
  }

  render() {
    const {
      color,
      mode,
      onClick,
      value,
      hint,
      loading,
      fontSize,
      width,
      leftIcon,
      rightIcon
    } = this.props;
    let validator = this.props.validator;
    const formattedHint =
      hint &&
      hint.map((elem, i) => {
        return <span key={i}> {elem} </span>;
      });
    if (validator === undefined || validator === null) {
      validator = () => true;
    }
    return (
      <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <button
          className="button"
          style={{
            fontSize: fontSize ? fontSize + 'px' : '16px',
            fontWeight: 400,
            backgroundColor: loading
              ? 'white'
              : this.state.hovering
              ? color
              : 'transparent',
            border:
              '1px solid ' + (this.state.hovering ? 'transparent' : color),
            color: this.state.hovering ? '#FFF' : color,
            borderRadius: '4px',
            opacity: loading ? 1.0 : validator() ? 0.8 : 0.3,
            transition: '0.2s',
            display: 'block',
            width: width || (mode === 'big' ? '100%' : 'auto'),
            marginRight: '10px',
            padding: '0'
          }}
          onClick={onClick}
          onMouseLeave={this.leaveHandler}
          onMouseOver={this.hoverHandler}
          disabled={!validator()}
        >
          {leftIcon && (
            <span
              style={{
                display: 'inline-block',
                borderRight:
                  '1px solid ' + (this.state.hovering ? '#FFF' : color),
                padding: '2px 5px 0 5px',
                fontSize: '1.4em',
                marginRight: '6px',
                verticalAlign: 'center',
                textAlign: 'center',
                float: 'left'
              }}
              className={leftIcon}
            />
          )}
          <span
            style={{
              display: 'inline-block',
              paddingTop: '7px',
              paddingRight: '7px',
              paddingBottom: '5px',
              paddingLeft: leftIcon ? 0 : '7px',
              textAlign: 'right'
            }}
          >
            {loading ? <LoadingIndicator width={32} height={32} /> : value}
          </span>

          {rightIcon && (
            <span
              style={{
                display: 'inline-block',
                borderLeft:
                  '1px solid ' + (this.state.hovering ? '#FFF' : color),
                padding: '2px 5px 0 5px',
                textAlign: 'center',
                fontSize: '1.4em',
                float: 'right'
              }}
              className={rightIcon}
            />
          )}
        </button>
        <div style={{ fontSize: '12px', color: '#616161' }}>
          {formattedHint}
        </div>
      </div>
    );
  }
}
