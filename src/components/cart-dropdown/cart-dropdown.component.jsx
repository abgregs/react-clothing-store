import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={'cart-dropdown-container'}>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
        <Link to='/checkout'>
          <Button buttonType='default'>Go to Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
