import { BsFillCheckCircleFill, BsStarFill } from 'react-icons/bs';

type RatingProps = {
  view: string;
};

const Rating = ({view}: RatingProps) => {
  return (
    <div className={`flex mt-2 ${view === 'list' ? 'flex-col gap-1 md:flex-row': 'gap-2'}`}>
      <div className='flex items-center gap-1 text-yellow-600'>
        <BsStarFill size='10px' />
        <BsStarFill size='10px' />
        <BsStarFill size='10px' />
        <BsStarFill size='10px' />
        <BsStarFill size='10px' />
      </div>
      <p className='text-gray-500 text-sm'>Reviews (4)</p>
    </div>
  );
};

export default Rating;
