import React from 'react'

import Card from './Card'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


export default function Cardmap({ movies }) {
    
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
        
                <div className='max-w-[1024px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-y-8 mx-auto mt-12'>
                    {
                        movies && 
                        movies.map(item => (
                            <SwiperSlide key={item.cast_id}>
                                <Card 
                                    id={item.cast_id}
                                    imageUrl={item.profile_path}
                                    name={item.name}
                                />
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </>
    )
}
