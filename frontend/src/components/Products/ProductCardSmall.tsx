import CustomImg from '../Images/CustomImg';
import Rating from './Rating';
import Stock from './Stock';

type ProductCardSmallProps = {
  view: 'grid' | 'list';
};

const ProductCardSmall = ({ view }: ProductCardSmallProps) => {
  return (
    <div className='border p-3 grid'>
      <Stock
        inStock
        className={view === 'list' ? 'justify-end' : 'justify-start mb-1'}
      />
      <div
        className={`flex ${
          view === 'grid' ? 'flex-col gap-1' : 'flex-row gap-3'
        }`}
      >
        <div className='max-w-[400px] min-w-[100px] sm:min-w-[150px] md:min-w-[200px]'>
          <div
            className={` ${
              view === 'grid' ? 'h-20 md:h-32' : 'h-20 sm:h-28 md:h-36 lg:h-48'
            }`}
          >
            <CustomImg src='/images/pro1.png' />
          </div>
          <Rating view={view} />
        </div>
        <div className='max-w-[600px]'>
          <p className={`${view === 'grid' ? 'leading-tight' : ''}`}>
            MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen
            i7
          </p>
          <div className='mt-2'>
            <p className='text-ecom-03'>
              <del>$88989</del>
            </p>
            <p className='text-xl'>$900900</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSmall;
