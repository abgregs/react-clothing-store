import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

import { BsHandbag } from 'react-icons/bs';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className='relative flex justify-center items-center cursor-pointer' onClick={toggleIsCartOpen}>
      <BsHandbag className='h-8 w-8' aria-hidden="true"/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
