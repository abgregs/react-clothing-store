import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { Fragment } from 'react';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleCheckoutClick = () => {
    dispatch(setIsCartOpen(false));
  }

  return (
      <div className={'cart-dropdown-container'}>
        <div className='cart-items'>
          {cartItems.length ? (
            <Fragment>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <Link to='/checkout'>
                <Button buttonType='default' onClick={handleCheckoutClick}>Go to Checkout</Button>
              </Link>
            </Fragment>
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
      </div>
  );
};

export default CartDropdown;
