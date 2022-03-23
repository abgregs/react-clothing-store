import { useContext, Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview';
import { CategoriesContext } from '../../contexts/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      <div className='categories-container'>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </div>
    </Fragment>
  );
};

export default CategoriesPreview;
