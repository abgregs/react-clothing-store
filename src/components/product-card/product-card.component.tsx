import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import { CategoryItem } from '../../store/categories/category.types';

import { BsBagPlus } from 'react-icons/bs';

import './product-card.styles.scss';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);

  const AddProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <div className='product-card-container' onClick={AddProductToCart}>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <div className='product-details-container'>
          <h3 className='name'>{name}</h3>
          <div className='price'>${price.toFixed(2)}</div>
        </div>
        <div className='add-to-bag-container'>
          <BsBagPlus className='add-to-bag-icon h-5 w-5' />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
