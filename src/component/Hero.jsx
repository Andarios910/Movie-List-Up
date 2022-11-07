import React, { useEffect } from 'react'
import request from '../api/apiConfig';

import { useSelector, useDispatch } from 'react-redux'
import { getTrending } from '../features/movies/moviesSlice';

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper/core';


SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Hero() {
    const dispatch = useDispatch();
    const { trending } = useSelector((state) => state.movies)

    console.log(trending)

    useEffect(() => {
        dispatch(getTrending());
    }, [dispatch])

    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                autoplay={{
                    'delay': 5000,
                    "disableOnInteraction": false
                }}
                className="mySwiper"
            >
                    {
                        trending && trending.map(item => (
                            <SwiperSlide key={item.id}>
                                <div 
                                    className='max-w-[1024px] h-96 w-full mx-auto mt-20 rounded-lg col-span-4) bg-cover]'
                                    style={{
                                        backgroundImage : `url(${request.imgUrl}${item.backdrop_path})`,
                                        backgroundSize : 'cover',
                                        backgroundRepeat : 'no-repeat' 
                                    }}
                                >
                                    <div className="w-80 mx-auto md:mx-10 pt-44 md:pt-42">
                                        <h2 className="text-white text-4xl md:w-[968px]">{item.title || item.name}</h2>
                                        <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">{item.release_date || item.first_air_date}</p>
                                        <button className="uppercase inline-block mt-4 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">get start</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                
            </Swiper>
        </>
    )
}
