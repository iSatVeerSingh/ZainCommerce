type PriceProps = {
  view: string;
};

const Price = ({ view }: PriceProps) => {
  return (
    <div className={`mt-2 ${view === 'list' && 'sm:flex sm:items-center sm:gap-3'}`}>
      <p className='text-ecom-03'>
        <del>$9898</del>
      </p>
      <p className='text-xl font-medium'>$9090900</p>
    </div>
  );
};

export default Price;
