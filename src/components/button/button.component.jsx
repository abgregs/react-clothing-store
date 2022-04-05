import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const ButtonSpinner = () => (
  <div className='button-spinner-overlay'>
    <div className='button-spinner-container'></div>
  </div>
);

const Button = ({ children, buttonType, isLoading, ...otherProps}) => {
  return <button disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{isLoading ? <ButtonSpinner /> : children}</button>;
};

export default Button;
