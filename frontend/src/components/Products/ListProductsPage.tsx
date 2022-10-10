import ProductsHeading from '../Headings/ProductsHeading';
import FilterBox from '../Filters/FiltersBox';
import ItemCount from '../ItemCount/ItemCount';
import ProductsGrid from './ProductsGrid';
import Sidebar from '../Sidebar/Sidebar';

const ListProductsPage = () => {
  return (
    <div className='py-2'>  
      <ProductsHeading />
      <div className='flex flex-col gap-2 mt-2 sm:flex-row-reverse sm:items-center sm:justify-between'>
        <FilterBox />
        <ItemCount />
      </div>
      <div className='mt-2 lg:grid lg:grid-cols-[250px_auto] lg:gap-3'>
        <Sidebar />
        <ProductsGrid pageType='products' />
      </div>
    </div>
  );
};

export default ListProductsPage;
