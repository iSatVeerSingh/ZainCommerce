import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import { ProductType } from '../../types';
import ProductCard from './ProductCard';

type ProductsGridProps = {
  pageType: string;
  products?: any[];
};

const ProductsGrid = ({ pageType, products }: ProductsGridProps) => {
  const view = useSelector((state: RootState) => state.filterToggle.view);

  return (
    <div>
      <div
        className={`grid gap-1 ${
          pageType === 'products'
            ? view === 'grid'
              ? 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
        }`}
      >
        {products?.map((product) => (
          <ProductCard
            key={product?.id}
            view={view}
            pageType={pageType}
            inStock={product?.stock ? true : false}
            title={product?.title}
            imgUrl={product?.thumbnail || product?.images[0]}
            id={product?.id}
            actualPrice={product?.price}
            sellingPrice={product?.price}
            rating={product?.rating}
            ratingCount={5}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
