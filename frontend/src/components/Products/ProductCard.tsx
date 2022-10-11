import { PageView } from '../../types';
import ButtonAddCart from '../Buttons/ButtonAddCart';
import CustomImg from '../Images/CustomImg';
import Price from './Price';
import Rating from './Rating';
import Stock from './Stock';
import { ProductType } from '../../types';

type ProductCardProps = ProductType & PageView;

const ProductCard = ({
  pageType,
  view,
  inStock,
  imgUrl,
  rating,
  ratingCount,
  title,
  actualPrice,
  sellingPrice,
  discount,
}: ProductCardProps) => {
  return (
    <div className='border border-ecom-01 p-2 flex flex-col'>
      <Stock inStock={inStock} view={view} pageType={pageType} />
      <div
        className={`${
          pageType === 'products' && view === 'list' ? 'flex gap-4' : ''
        }`}
      >
        <div>
          <div
            className={`${
              pageType === 'products' && view === 'list'
                ? 'min-w-[120px] h-32 mb-2 sm:min-w-[160px] sm:h-36 md:min-w-[220px] md:h-40 lg:min-w-[260px] lg:h-48'
                : 'h-32'
            }`}
          >
            <CustomImg src={imgUrl} />
          </div>
          <Rating
            view={view}
            pageType={pageType}
            rating={rating}
            ratingCount={ratingCount}
          />
        </div>
        <div className={`mt-1`}>
          <p className={`leading-tight`}>{title}</p>
          <Price
            view={view}
            actualPrice={actualPrice}
            sellingPrice={sellingPrice}
          />
          <ButtonAddCart
            className={`${
              pageType === 'products' && view === 'list'
                ? 'hidden sm:flex mt-2'
                : 'hidden'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
