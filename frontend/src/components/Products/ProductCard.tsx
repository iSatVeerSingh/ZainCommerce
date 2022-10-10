import CustomImg from '../Images/CustomImg';
import Price from './Price';
import Rating from './Rating';
import Stock from './Stock';

type ProductCardProps = {
  view: 'grid' | 'list';
  pageType: string;
};

const ProductCard = ({ view, pageType }: ProductCardProps) => {
  return (
    <div className='border border-ecom-01 p-2 flex flex-col'>
      <Stock
        inStock
        className={`${
          pageType === 'products' && view === 'list' ? 'self-end' : 'self-start'
        }`}
      />
      <div
        className={`${
          pageType === 'products' && view === 'list' ? 'flex' : ''
        }`}
      >
        <div>
          <div
            className={`${
              pageType === 'products' && view === 'list'
                ? 'min-w-[120px] h-32 sm:min-w-[160px] sm:h-36 md:min-w-[220px] md:h-40 lg:min-w-[260px] lg:h-48'
                : 'h-32'
            }`}
          >
            <CustomImg src='/images/pro1.png' />
          </div>
          <Rating view={view} pageType={pageType} />
        </div>
        <div className={`mt-1`}>
          <p className={`leading-tight`}>
            MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th{' '}
          </p>
          <Price view={view} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
