import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import ProductCard from './ProductCard';

type ProductsGridProps = {
  pageType: 'products' | string;
};

const ProductsGrid = ({ pageType }: ProductsGridProps) => {
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
          // pageType === 'products'
          //   ? 'lg:grid-cols-3 xl:grid-cols-4'
          //   : 'lg:grid-cols-4 xl:grid-cols-5'
        }`}
      >
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
        <ProductCard view={view} pageType={pageType} />
      </div>
    </div>
  );
};

export default ProductsGrid;
