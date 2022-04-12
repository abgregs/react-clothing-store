import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import { CategoryItem } from '../../store/categories/category.types';

import Button from '../button/button.component';
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
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={AddProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
