import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { removeItemInCart, decrementItemInCart, incrementItemInCart } =
    useContext(CartContext);
  const { imageUrl, name, quantity, price } = cartItem;

  const removeItemHandler = () => removeItemInCart(cartItem);
  const decrementItemHandler = () => decrementItemInCart(cartItem);
  const incrementItemHandler = () => incrementItemInCart(cartItem);

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
