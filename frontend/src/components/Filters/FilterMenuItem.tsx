type FilterMenuItemProps = {
  filterName: string;
  filterOptions: {
    filterOptionsName: string;
    filterValue: string;
  }[];
};

const FilterMenuItem = ({ filterName, filterOptions }: FilterMenuItemProps) => {
  return (
    <div className='mt-3'>
      <h4 className='font-medium'>{filterName}</h4>
      <div className='pl-3'>
        {filterOptions.map((option, index) => (
          <div className='flex items-center gap-2' key={index}>
            <input
              type='radio'
              name={filterName}
              id={filterName + index}
              value={option.filterValue}
            />
            <label htmlFor={filterName + index} className='text-sm'>
              {option.filterOptionsName}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMenuItem;
