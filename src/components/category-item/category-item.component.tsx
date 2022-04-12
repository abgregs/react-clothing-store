import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { CategoryData } from '../category-list/category-list';

import './category-item.styles.scss';

type CategoryItemProps = {
  category: CategoryData;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div className='category-item-container' onClick={onNavigateHandler}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
