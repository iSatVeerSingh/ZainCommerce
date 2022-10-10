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
        }`}
      >
        <ProductCard
          view={view}
          pageType={pageType}
          imageUrl='/images/pro1.png'
          title='MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th'
          inStock={true}
          sellingPrice={12348}
          actualPriceOld={32232}
          rating={5}
        />
        <ProductCard
          view={view}
          pageType={pageType}
          imageUrl='/images/pro1.png'
          title='MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th'
          inStock={true}
          sellingPrice={12348}
          actualPriceOld={32232}
          rating={5}
        />
        <ProductCard
          view={view}
          pageType={pageType}
          imageUrl='/images/pro1.png'
          title='MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th'
          inStock={true}
          sellingPrice={12348}
          actualPriceOld={32232}
          rating={5}
        />
        <ProductCard
          view={view}
          pageType={pageType}
          imageUrl='/images/pro1.png'
          title='MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th'
          inStock={true}
          sellingPrice={12348}
          actualPriceOld={32232}
          rating={5}
        />
      </div>
    </div>
  );
};

export default ProductsGrid;
