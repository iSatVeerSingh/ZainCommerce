import { PageView } from '../../types';
import ButtonAddCart from '../Buttons/ButtonAddCart';
import CustomImg from '../Images/CustomImg';
import Price from './Price';
import Rating from './Rating';
import Stock from './Stock';
import { ProductType } from '../../types';
import IconButtonOutline from '../Buttons/IconButtonOuline';
import { FiHeart } from 'react-icons/fi';

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
    <div className='border border-ecom-01 p-2 flex flex-col relative'>
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
                ? 'min-w-[120px] h-32 sm:min-w-[160px] sm:h-36 md:min-w-[220px] md:h-40 lg:min-w-[260px] lg:h-48'
                : 'h-32'
            } mb-2`}
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
          <p className={`leading-tight`}>
            {view !== 'list' && title?.length > 30
              ? title.substring(0, 30)
              : title}
          </p>
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
      <div className='absolute bottom-2 right-2 z-20'>
        <IconButtonOutline>{<FiHeart size='20px' />}</IconButtonOutline>
      </div>
    </div>
  );
};

export default ProductCard;
