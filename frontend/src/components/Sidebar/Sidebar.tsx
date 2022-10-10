import Filters from '../Filters/Filters';
import { FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import { useDispatch } from 'react-redux';
import { toogle } from '../../services/features/Filters/filterToggle';
import BrandFilters from '../Filters/BrandFilters';
import { useEffect } from 'react';

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.filterToggle.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });

  return (
    <div
      className={`absolute top-0 bg-white w-full h-screen z-[100] ${
        isOpen ? 'left-0 visible' : '-left-[100%] invisible'
      } overflow-y-scroll lg:overflow-y-auto lg:static lg:visible lg:h-auto lg:flex lg:flex-col lg:gap-3`}
    >
      <button
        className='absolute right-3 top-3 lg:hidden'
        onClick={() => dispatch(toogle(false))}
      >
        <FiX size='25px' />
      </button>
      <Filters />
      <BrandFilters />
    </div>
  );
};

export default Sidebar;
