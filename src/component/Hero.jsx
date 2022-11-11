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
                                    className={`w-full h-[100vh] lg:h-screen relative bg-center bg-cover bg-no-repeat`}
                                    style={{backgroundImage: `url(${request.imgUrl}${item.backdrop_path})`}}
                                >
                                    <div 
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100vh',
                                            backgroundImage: 'linear-gradient(to top, rgba(15,15,15,1), rgba(0,0,0,0))'
                                        }}>
                                    </div>
                                    <div className="lg:flex px-5 xl:px-0 justify-between relative max-w-[1024px] mx-auto">
                                        <div className="w-5/6 text-white lg:pr-16 pt-64 md:pt-32 lg:pt-64 mx-auto">
                                            <h2 className="text-3xl md:text-4xl  lg:text-5xl font-bold leading-normal text-center md:text-left md:mb-5">{item.title || item.name}</h2>
                                            <div className="text-[700] md:mb-5">{item.overview}</div>
                                            <div className="flex justify-between md:justify-start md:w-3/4 mt-10">
                                                <button className='px-10 py-2 rounded-3xl md:mr-2 lg:mr-5 bg-red-600 hover:bg-red-700'>
                                                    Watch now
                                                </button>
                                                <button className='px-10 py-2 rounded-3xl  border-2 hover:bg-[#3182ed] hover:border-[#3182ed]'>
                                                    Watch trailer
                                                </button>
                                            </div>
                                        </div>
                                        <div className="invisible lg:visible lg:pt-40 px-5 xl:px-0">
                                            <img className='md:w-[200px] lg:w-[300px] rounded-lg shadow-md' src={request.imgUrl + item.poster_path} alt="" />
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
