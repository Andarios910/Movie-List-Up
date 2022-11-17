import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function CardReview({ data }) {
    console.log()
    return (
        <>
            <div className="">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper !px-5 md:!px-0"
                >
                    {
                        data && data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-64 px-8 py-8 rounded-md shadow-lg bg-[#162032] text-white">
                                    <div className="flex space-x-0.5"></div>
                                    <div className="space-y-1">
                                        <h3 className="font-semibold">
                                            {item.created_at}
                                        </h3>
                                        <p className="text-sm font-medium leading-5 line-clamp-5">
                                            {item.content}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-8 mt-6 flex items-center space-x-2">
                                        <div className="flex flex-shrink-0 rounded-full border border-gray-200">
                                            <img
                                                className="w-8 h-8 object-cover rounded-full"
                                                src={`https://ui-avatars.com/api/?name=${item.author_details.username}`}
                                                alt="profile"
                                            />
                                        </div>
                                        <span className="text-sm font-semibold leading-5">
                                            {item.author_details.username}
                                        </span>
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="w-5 h-5 text-gray-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                >
                                                    
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
