import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../Products/ProductCard';
import SectionHeading from '../Sections/SectionHeading';

type CarouselProps = {
  products?: any[];
};

const Carousel = ({ products }: CarouselProps) => {
  return (
    <div className='mt-2'>
      <SectionHeading />
      <Swiper
        className='mt-2'
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        breakpoints={{
          540: {
            width: 500,
            slidesPerView: 2,
          },
          640: {
            width: 640,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1280: {
            width: 1280,
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product?.id}>
            <ProductCard
              key={product?.id}
              inStock={product?.stock ? true : false}
              title={product?.title}
              imgUrl={product?.thumbnail || product?.images[0]}
              id={product?.id}
              actualPrice={product?.price}
              sellingPrice={product?.price}
              rating={product?.rating}
              ratingCount={5}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
