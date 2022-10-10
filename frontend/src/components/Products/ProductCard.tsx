import ButtonAddCart from '../Buttons/ButtonAddCart';
import CustomImg from '../Images/CustomImg';
import Price from './Price';
import Rating from './Rating';
import Stock from './Stock';

type ProductCardProps = {
  imageUrl: string;
  rating?: string | number;
  title: string;
  actualPriceOld?: string | number;
  sellingPrice: string | number;
  inStock?: boolean;
  view: 'grid' | 'list';
  pageType: string;
};

const ProductCard = ({
  view,
  pageType,
  imageUrl,
  rating,
  title,
  actualPriceOld,
  sellingPrice,
  inStock,
}: ProductCardProps) => {
  return (
    <div className='border border-ecom-01 p-2 flex flex-col'>
      <Stock
        inStock={inStock}
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
            <CustomImg src={imageUrl} />
          </div>
          <Rating view={view} pageType={pageType} rating={rating} />
        </div>
        <div className={`mt-1`}>
          <p className={`leading-tight`}>{title}</p>
          <Price
            view={view}
            actualPrice={actualPriceOld}
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
