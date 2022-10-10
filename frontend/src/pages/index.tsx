import Banner from '../components/Banners/Banner';
import MainLayout from '../components/Layouts/MainLayout';
import Carousel from '../components/Carousel/Carousel';
import ProductsGrid from '../components/Products/ProductsGrid';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Carousel />
      <ProductsGrid pageType='home' />
    </div>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
