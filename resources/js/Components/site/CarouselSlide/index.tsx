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
import { Link } from "@inertiajs/react";
type Props = {
  data: any;
}

const CarouselSlide = (props: Props) => {

  return (
    <div className="bg-gray-100 py-4">
      <div className='container m-auto rounded shadow-md p-1 bg-white'>
        <Swiper
          effect="fade"
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {props.data?.map((image: any, idx: number) => (
            <SwiperSlide>
              <Link
                href={route('slug', image.slug)}
              >
                <img className="w-full h-full object-fill block rounded" src={`storage/uploads/${image.featured}`} width={600} />
              </Link>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  )
}

export default CarouselSlide