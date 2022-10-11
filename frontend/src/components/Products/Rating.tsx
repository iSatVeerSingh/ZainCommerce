import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { PageView } from '../../types';

type RatingProps = PageView & {
  rating?: number;
  ratingCount?: string | number;
};

const Rating = ({ view, pageType, rating, ratingCount }: RatingProps) => {
  const full = rating ? Math.floor(rating) : 0;
  const isHalf = rating && rating - Math.floor(rating) !== 0;

  const stars = new Array(full);

  return (
    <div
      className={`${
        pageType === 'products' && view === 'list'
          ? 'md:flex md:items-center md:gap-2'
          : 'flex items-center gap-2'
      }`}
    >
      {full !== 0 && (
        <div className='flex items-center text-ecom-06'>
          {[...stars].map((_, i) => (
            <BsStarFill key={i} />
          ))}
          {isHalf && <BsStarHalf />}
        </div>
      )}
      {ratingCount && (
        <span className='text-ecom-02 text-sm'>Rating ({ratingCount})</span>
      )}
    </div>
  );
};

export default Rating;
