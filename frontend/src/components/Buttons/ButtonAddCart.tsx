import { FiShoppingCart } from 'react-icons/fi';

type ButtonAddCartProps = {
  className?: string;
};

const ButtonAddCart = ({ className }: ButtonAddCartProps) => {
  return (
    <button
      className={`flex items-center gap-2 border-2 border-ecom-05 px-3 py-2 rounded-full text-ecom-05 font-medium ${
        className ? className : ''
      }`}
    >
      <FiShoppingCart size='20px' />
      <span>Add To Cart</span>
    </button>
  );
};

export default ButtonAddCart;
