import { FC } from 'react';

import './cart-item.styles.scss';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  item: TCartItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
