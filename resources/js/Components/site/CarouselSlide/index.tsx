import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
type Props = {
  data: any;
}

const CarouselSlide = (props: Props) => {
  
  return (
    <div className='container m-auto rounded-md shadow-md p-2 my-4 bg-white'>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {props.data?.map((image: any, idx: number) => (
          <SwiperSlide><img className="w-full h-full object-fill block rounded-md" src={`storage/uploads/${image.featured}`} width={600} /></SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default CarouselSlide