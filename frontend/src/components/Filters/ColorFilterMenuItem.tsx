type ColorFilterMenuItemProps = {
  filterName: string;
  filterOptions: {
    filterOptionsName: string;
    filterValue: string;
  }[];
};

const ColorFilterMenuItem = ({
  filterName,
  filterOptions,
}: ColorFilterMenuItemProps) => {
  return (
    <div className='mt-3'>
      <h4 className='font-medium'>{filterName}</h4>
      <div className='pl-3 flex items-center gap-2'>
        {filterOptions.map((option, index) => (
          <div className='flex items-center gap-2' key={index}>
            <input
              type='radio'
              name={filterName}
              id={filterName + index}
              value='red'
              className='peer'
              hidden
            />
            <label
              htmlFor={filterName + index}
              className='cursor-pointer w-5 h-5 peer-checked:outline outline-1 outline-offset-2 outline-slate-800' 
              style={{backgroundColor: option.filterValue}}
            >
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorFilterMenuItem;
