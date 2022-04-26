import { FC } from 'react';

import { Link } from 'react-router-dom';

import type { CategoryItem } from '../../store/categories/category.types';

import ProductCard from '../product-card/product-card.component';

import Button from '../button/button.component';

import './category-preview.styles.scss';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='preview' to={title}>
          <span className='title'>{title}</span>
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <Link to={title}>
        <Button buttonType='default'>View All</Button>
      </Link>
    </div>
  );
};

export default CategoryPreview;
