import { BsFillCheckCircleFill, BsStarFill } from 'react-icons/bs';

type StockProps = {
  inStock: boolean;
  className?: string;
};

const Stock = ({ inStock, className }: StockProps) => {
  return (
    <div
      className={`${
        inStock ? 'text-green-500' : 'text-red-500'
      } flex items-center gap-2 text-sm ${className ? className : ''}`}
    >
      <BsFillCheckCircleFill />
      <span>{inStock ? 'in stock' : 'out of stock'}</span>
    </div>
  );
};

export default Stock;
