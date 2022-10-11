import { BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { PageView } from '../../types';

type StockProps = PageView & {
  inStock?: boolean;
};

const Stock = ({ inStock, pageType, view }: StockProps) => {
  return (
    <div
      className={`${
        inStock ? 'text-green-500' : 'text-red-500'
      } flex items-center gap-2 text-sm ${
        pageType === 'products' && view === 'list' ? 'self-end' : 'self-start'
      }`}
    >
      {inStock ? <BsFillCheckCircleFill /> : <BsXCircleFill />}
      <span>{inStock ? 'in stock' : 'out of stock'}</span>
    </div>
  );
};

export default Stock;
