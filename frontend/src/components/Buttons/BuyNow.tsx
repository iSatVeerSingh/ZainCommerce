import { MouseEventHandler } from 'react';

type BuyNowProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const BuyNow = ({ className, onClick }: BuyNowProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-ecom-06 text-white py-2 px-4 text-xl rounded-full ${
        className ? className : ''
      }`}
    >
      Buy Now
    </button>
  );
};

export default BuyNow;
