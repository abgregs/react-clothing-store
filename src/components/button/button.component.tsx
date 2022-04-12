import { ButtonHTMLAttributes, FC } from 'react';

import './button.styles.scss';

export type BUTTON_TYPE_CLASSES = 'google-sign-in' | 'inverted' | 'default';

const ButtonSpinner = () => (
  <div className='button-spinner-overlay'>
    <div className='button-spinner-container'></div>
  </div>
);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps}) => {
  return <button disabled={isLoading} className={`button-container ${buttonType}`} {...otherProps}>{isLoading ? <ButtonSpinner /> : children}</button>;
};

export default Button;
