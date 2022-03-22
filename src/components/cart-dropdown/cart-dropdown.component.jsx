import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({isOpen}) => {
  return (
    <div className={'cart-dropdown-container'}>
      <div className='cart-items' />
      <Button buttonType='default'>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown;