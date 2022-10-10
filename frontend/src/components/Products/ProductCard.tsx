import { BsFillCheckCircleFill, BsStarFill } from 'react-icons/bs';
import CustomImg from '../Images/CustomImg';

const ProductCard = () => {
  return (
    <div className='border p-3'>
      <div className='flex items-center gap-2'>
        <BsFillCheckCircleFill size='15px' />
        <span>in stock</span>
      </div>
      <div className='h-32'>
        <CustomImg src='/images/pro1.png' />
      </div>
      <div className='flex items-center justify-between mt-2'>
        <div className='flex items-center gap-1 text-yellow-600'>
          <BsStarFill size='15px' />
          <BsStarFill size='15px' />
          <BsStarFill size='15px' />
          <BsStarFill size='15px' />
          <BsStarFill size='15px' />
        </div>
        <p className='text-gray-500'>Reviews (4)</p>
      </div>
      <h4 className='leading-tight my-2'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h4>
      <p className='text-gray-600'> <del>$8900</del></p>
      <p className='font-medium text-xl'>$3455</p>
    </div>
  );
};

export default ProductCard;
