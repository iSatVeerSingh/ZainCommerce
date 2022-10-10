type PriceProps = {
  view: string;
  actualPrice?: string | number;
  sellingPrice: string | number;
};

const Price = ({ view, actualPrice, sellingPrice }: PriceProps) => {
  return (
    <div
      className={`mt-2 ${
        view === 'list' && 'sm:flex sm:items-center sm:gap-3'
      }`}
    >
      <p className='text-ecom-03'>
        <del>${actualPrice}</del>
      </p>
      <p className='text-xl font-medium'>${sellingPrice}</p>
    </div>
  );
};

export default Price;
