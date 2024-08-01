import React from 'react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type Props = {
  data: any;
}

const CarouselSlide = (props: Props) => {
  
  return (
    <div className='container m-auto'>
      <Swiper
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {props.data?.map((image: any, idx: number) => (
          <SwiperSlide><img src={`storage/uploads/${image.featured}`} width={600} /></SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default CarouselSlide