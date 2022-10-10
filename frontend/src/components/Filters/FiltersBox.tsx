import { useDispatch } from 'react-redux';
import {
  changeView,
  toogle,
} from '../../services/features/Filters/filterToggle';
import { FiGrid, FiList } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';

const FilterBox = () => {
  const view = useSelector((state: RootState) => state.filterToggle.view);
  const dispatch = useDispatch();

  return (
    <div className='grid grid-cols-5 gap-2 text-center sm:w-[400px]'>
      <div
        role={'button'}
        className='py-2 border-ecom-01 border-2 font-medium lg:hidden'
        onClick={() => dispatch(toogle(true))}
      >
        <span>Filter</span>
      </div>
      <div className='py-2 border-ecom-01 border-2 flex gap-1 items-center justify-center col-span-3 lg:col-span-4'>
        <span className='text-sm'>Sortby:</span>
        <select
          name=''
          id=''
          className='w-[120px] font-medium bg-transparent border'
        >
          <option value=''>Popularity</option>
          <option value=''>Price: Low to High</option>
          <option value=''>Price: High to Low</option>
          <option value=''>Featured</option>
        </select>
      </div>
      <div
        role={'button'}
        onClick={() => dispatch(changeView())}
        className='text-center px-5 py-2 border-ecom-01 border-2 font-medium'
      >
        {view === 'grid' ? <FiList size='25px' /> : <FiGrid size='25px' />}
      </div>
    </div>
  );
};

export default FilterBox;
