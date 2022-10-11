import { useEffect, useState } from 'react';
import FilterBox from '../../components/Filters/FiltersBox';
import ProductsHeading from '../../components/Headings/ProductsHeading';
import ItemCount from '../../components/ItemCount/ItemCount';
import MainLayout from '../../components/Layouts/MainLayout';
import ProductsGrid from '../../components/Products/ProductsGrid';
import Sidebar from '../../components/Sidebar/Sidebar';

const Products = () => {
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

Products.Layout = MainLayout;

export default Products;
