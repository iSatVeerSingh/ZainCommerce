import { Swiper, SwiperSlide } from 'swiper/react';
import CustomImg from '../Images/CustomImg';
import 'swiper/css/bundle';
import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';

const ProductImageCarousel = () => {
  const [activeThumb, setActiveThumb] = useState<any>();

  return (
    <div>
      <Swiper
        loop
        className='h-56 md:h-72 lg:h-96'
        navigation
        modules={[Navigation, Thumbs]}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
      >
        <SwiperSlide>
          <CustomImg src='/images/pro1.png' />
        </SwiperSlide>
        <SwiperSlide>
          <CustomImg src='/images/pro1.png' />
        </SwiperSlide>
        <SwiperSlide>
          <CustomImg src='/images/pro1.png' />
        </SwiperSlide>
        <SwiperSlide>
          <CustomImg src='/images/pro1.png' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className='h-20'
        modules={[Navigation, Thumbs]}
        slidesPerView={4}
        onSwiper={setActiveThumb}
        spaceBetween={5}
      >
        <SwiperSlide className='border'>
          <CustomImg src='/images/pro1.png' />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <CustomImg src='/images/pro1.png' />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <CustomImg src='/images/pro1.png' />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <CustomImg src='/images/pro1.png' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductImageCarousel;
