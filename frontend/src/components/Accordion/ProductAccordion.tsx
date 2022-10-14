import { FiChevronDown } from 'react-icons/fi';

const ProductAccordion = () => {
  return (
    <div className='border-b border-b-ecom-03'>
      <div className='flex items-center justify-between'>
        <h4 className='text-xl font-semibold'>This is accordion Heading</h4>
        <FiChevronDown size='20px' />
      </div>
    </div>
  );
};

export default ProductAccordion;
