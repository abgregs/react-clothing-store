import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import {
  removeItemInCart,
  incrementItemInCart,
  decrementItemInCart,
} from '../../store/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, quantity, price } = cartItem;

  const removeItemHandler = () =>
    dispatch(removeItemInCart(cartItems, cartItem));
  const decrementItemHandler = () =>
    dispatch(decrementItemInCart(cartItems, cartItem));
  const incrementItemHandler = () =>
    dispatch(incrementItemInCart(cartItems, cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decrementItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={incrementItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={removeItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
