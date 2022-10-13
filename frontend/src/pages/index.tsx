import Banner from '../components/Banners/Banner';
import MainLayout from '../components/Layouts/MainLayout';
import Carousel from '../components/Carousel/Carousel';
import ProductsGrid from '../components/Products/ProductsGrid';
import { useGetAllProductsQuery } from '../services/api/products/productsApi';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const { data, isFetching, isError, isSuccess } = useGetAllProductsQuery('');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isFetching && isSuccess) {
      setProducts(data?.products);
    }
  }, [isFetching]);

  return (
    <div>
      <Banner />
      <Carousel products={products} />
      <ProductsGrid pageType='home' products={products} />
    </div>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
