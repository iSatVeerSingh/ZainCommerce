import { AiFillStar } from 'react-icons/ai';

type RatingProps = {
  pageType: string;
  view: string;
};

const Rating = ({ view, pageType }: RatingProps) => {
  return (
    <div
      className={`${
        pageType === 'products' && view === 'list'
          ? 'md:flex md:items-center md:gap-2'
          : 'flex items-center gap-2'
      }`}
    >
      <div className='flex items-center text-ecom-06'>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <span className='text-ecom-02 text-sm'>Rating (5)</span>
    </div>
  );
};

export default Rating;
