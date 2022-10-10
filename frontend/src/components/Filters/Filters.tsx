import colorsFilters from '../../../demodata/colorsFilters';
import filters from '../../../demodata/filters';
import ButtonFill from '../Buttons/ButtonFill';
import ButtonOutline from '../Buttons/ButtonOutline';
import ColorFilterMenuItem from './ColorFilterMenuItem';
import FilterMenuItem from './FilterMenuItem';

const Filters = () => {
  return (
    <div className='bg-ecom-04 p-3 rounded-md'>
      <h3 className='text-xl mb-2 text-left lg:text-center'>Filters</h3>
      <ButtonOutline btnText='Clear Filter' className='w-full' />
      <div>
        {filters.map((filter) => (
          <FilterMenuItem
            key={filter.id}
            filterName={filter.filterName}
            filterOptions={filter.filterOptions}
          />
        ))}
        <ColorFilterMenuItem
          filterName={colorsFilters.filterName}
          filterOptions={colorsFilters.filterOptions}
        />
        <ButtonFill btnText='Apply Filters' className='w-full mt-3' />
      </div>
    </div>
  );
};

export default Filters;
