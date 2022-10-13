import { useEffect, useState } from 'react';
import ButtonOutline from '../../components/Buttons/ButtonOutline';
import FilterBox from '../../components/Filters/FiltersBox';
import ProductsHeading from '../../components/Headings/ProductsHeading';
import ItemCount from '../../components/ItemCount/ItemCount';
import MainLayout from '../../components/Layouts/MainLayout';
import Loader from '../../components/Loaders/Loader';
import ProductsGrid from '../../components/Products/ProductsGrid';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useGetAllProductsQuery } from '../../services/api/products/productsApi';

const Products = () => {
  const { data, isFetching, isError, isSuccess } = useGetAllProductsQuery('');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isFetching && isSuccess) {
      setProducts(data?.products);
    }
  }, [isFetching]);

  return (
    <div className='py-2'>
      <ProductsHeading />
      <div className='flex flex-col gap-2 mt-2 sm:flex-row-reverse sm:items-center sm:justify-between'>
        <FilterBox />
        <ItemCount />
      </div>
      <div className='mt-2 lg:grid lg:grid-cols-[250px_auto] lg:gap-3'>
        <Sidebar />
        <div className='w-full'>
          {isFetching ? (
            <Loader />
          ) : (
            <ProductsGrid pageType='products' products={products} />
          )}
          <div className='flex items-center w-full mt-3 justify-center gap-2'>
            <ButtonOutline btnText='<' className='w-12 h-12 font-bold text-ecom-03' />
            <ButtonOutline btnText='1' className='w-12 h-12 font-bold text-ecom-03' />
            <ButtonOutline btnText='2' className='w-12 h-12 font-bold text-ecom-03' />
            <ButtonOutline btnText='3' className='w-12 h-12 font-bold text-ecom-03' />
            <ButtonOutline btnText='4' className='w-12 h-12 font-bold text-ecom-03' />
            <ButtonOutline btnText='5' className='w-12 h-12 font-bold text-ecom-03' />
            <ButtonOutline btnText='6' className='w-12 h-12 font-bold text-ecom-03' />
            <ButtonOutline btnText='7' className='w-12 h-12 font-bold text-ecom-03' />
            <ButtonOutline btnText='>' className='w-12 h-12 font-bold text-ecom-03' />
          </div>
        </div>
      </div>
    </div>
  );
};

Products.Layout = MainLayout;

export default Products;
