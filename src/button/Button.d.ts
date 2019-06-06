import * as React from 'react';
type Maybe<T> = undefined | null | T;

type OnClickCallback =
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | (() => void);

type ValidationFunction = () => boolean;

type ButtonProps = {
  color: string;
  value: string;
  onClick?: Maybe<OnClickCallback>;
  mode?: 'big' | string;
  hint?: Maybe<string[]>; // FIXME hmueller: shouldn't that be 'hints'? (It is being used as an array)
  loading?: Maybe<boolean>;
  fontSize?: Maybe<React.ReactText>;
  width?: Maybe<string>;
  leftIcon?: Maybe<string>;
  rightIcon?: Maybe<string>;
  validator?: Maybe<ValidationFunction>;
};

declare class Button extends React.Component<ButtonProps> {}

export default Button;
