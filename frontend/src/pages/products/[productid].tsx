import IconButtonOutline from '../../components/Buttons/IconButtonOuline';
import ProductImageCarousel from '../../components/Carousel/ProductImageCarousel';
import MainLayout from '../../components/Layouts/MainLayout';
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi';
import Rating from '../../components/Products/Rating';
import ButtonQuantity from '../../components/Buttons/ButtonQuantity';
import ButtonAddCart from '../../components/Buttons/ButtonAddCart';
import BuyNow from '../../components/Buttons/BuyNow';
import ProductAccordion from '../../components/Accordion/ProductAccordion';
import ProductTab from '../../components/Tabs/ProductTab';

const Product = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 mt-5'>
      <div>
        <ProductImageCarousel />
      </div>
      <div className='px-2'>
        <h4 className='text-xl mb-2'>
          DELL Ryzen 5 Hexa Core 5600H - (8 GB/512 GB SSD/Windows 10/4 GB
          Graphics/NVIDIA GeForce RTX 3050) G15-5515 Gaming Laptop (14.96 Inch,
          Specter Green, 2.5 kg, With MS Office)
        </h4>
        <div className='flex items-center gap-4 mb-3'>
          <Rating rating={4.5} ratingCount={46} />
          <p>Total Reviews (45)</p>
        </div>
        <div className='flex items-end gap-5 justify-between lg:max-w-[300px]'>
          <div>
            <p className='text-xl text-green-600'>36% Off</p>
            <p className='text-xl text-ecom-03'>
              <del>$34566</del>
            </p>
          </div>
          <div>
            <p className='text-3xl leading-none'>$909090</p>
            <span className='text-sm'>Inclusive All Taxes</span>
          </div>
        </div>
        <p className='mt'>Shipping Charges:- $45</p>
        <div className='grid grid-cols-2 gap-5 items-center mb-3 mt-4 lg:max-w-[350px]'>
          <div className='bg-ecom-01 flex items-center rounded-md justify-between h-12'>
            <ButtonQuantity>
              <FiMinus />
            </ButtonQuantity>
            <input
              type='text'
              name='quantity'
              id='quantity'
              className='text-center px-3 py-2 bg-ecom-07 w-full h-full '
              value={3}
              readOnly
            />
            <ButtonQuantity>
              <FiPlus />
            </ButtonQuantity>
          </div>
          <ButtonAddCart />
        </div>
        <BuyNow className='w-full lg:max-w-[350px]' />
      </div>
      <div className='md:col-span-2'>
        <ProductTab />
      </div>
    </div>
  );
};

Product.Layout = MainLayout;

export default Product;
