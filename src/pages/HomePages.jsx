import React, { useEffect } from 'react'
import Navigation from '../component/Navigation'
import Hero from '../component/Hero'
import Cardmap from '../component/Cardmap'
import Footer from '../component/Footer'

import { useSelector, useDispatch } from 'react-redux'
import { getMovies, getGenres } from '../features/movies/moviesSlice'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function HomePages() {
    const { movies, isLoading, hasError, genres } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getGenres());
    }, [dispatch])

    return (
        <div className='relative'>
            <Navigation />
            <Hero />
            <div className='max-w-[1024px] mx-auto mt-10 flex justify-between items-center bg-[#162032] px-[30px] py-5 rounded-[20px] text-white'>
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
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="filter-dropdowns">
                        {
                            genres && genres.map(item => (
                                <SwiperSlide key={item.id}>
                                    <button className='bg-[#131720] inline-block w-36 p-2.5 rounded-[15px]'>
                                        {item.name}
                                    </button>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                </Swiper>
                    
                    {/* <select name="genre" className="bg-[#162032] cursor-pointer">
                        <option value="all genres">All genres</option>
                        {
                            genres && genres.map(item => (
                                <option value={item.id}>
                                    {item.name}
                                </option>
                            ))
                        }
                    </select> */}
                {/* </div> */}
                <div className="relative bg-[#131720] p-2.5 rounded-[15px]">

                    <input type="radio" name="grade" id="featured" className='hidden' 
                        // checked 
                    />
                    <label htmlFor="featured" className='relative mx-2.5 cursor-pointer '>Featured</label>

                    <input type="radio" name="grade" id="popular"  className='hidden' />
                    <label htmlFor="popular" className='relative mx-2.5 cursor-pointer '>Popular</label>

                    <input type="radio" name="grade" id="newest"  className='hidden' />
                    <label htmlFor="newest" className='relative mx-2.5 cursor-pointer '>Newest</label>

                    <div className="checked-radio-bg"></div>

                </div>

            </div>
            <Cardmap movies={movies}/>
            <Footer />
        </div>
    )
}
