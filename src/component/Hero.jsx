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
                        trending && trending.slice(0,3).map(item => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className={`w-full h-screen md:h-full lg:h-screen relative bg-center bg-cover bg-no-repeat`}
                                    style={{backgroundImage: `url(${request.imgUrl}${item.backdrop_path})`}}
                                >
                                    <div
                                        className='absolute w-full h-full'
                                        style={{

                                            backgroundImage: 'linear-gradient(to top, rgba(15,15,15,1), rgba(0,0,0,0))'
                                        }}>
                                    </div>
                                    <div className="flex flex-col-reverse md:flex-row px-5 xl:px-0 justify-between relative max-w-[1024px] mx-auto pb-10">
                                        <div className="w-full md:w-5/6 text-white lg:pr-16 mt-10 md:mt-32 lg:mt-64 mx-auto">
                                            <h2 className="text-3xl md:text-4xl  lg:text-5xl font-bold leading-normal md:text-left md:mb-5">{item.title || item.name}</h2>
                                            <div className="text-[700] md:mb-5 line-clamp-3 md:line-clamp-none">{item.overview}</div>
                                            <div className="md:w-3/4 mt-5">
                                                <button className='px-10 py-2 rounded-3xl md:mr-2 lg:mr-5 bg-red-600 hover:bg-red-700'>
                                                    Watch Trailer
                                                </button>
                                            </div>
                                        </div>
                                        <div className="lg:mt-40 md:mt-32 mt-40 md:pl-5 lg:px-5 xl:px-0 mx-auto">
                                            <img className='w-52 md:w-64 lg:w-[300px] rounded-lg shadow-md' src={request.imgUrl + item.poster_path} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                
            </Swiper>
        </>
    )
}
