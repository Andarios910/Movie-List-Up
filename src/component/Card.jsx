import React, { useEffect } from 'react'
import request from '../api/apiConfig'

import { useSelector, useDispatch } from 'react-redux'
import { getGenres } from '../features/movies/moviesSlice'

import { BsPlayCircle, BsStar } from 'react-icons/bs'

export default function Card({ imageUrl, rating, title, genre, handleClick}) {
    const { genres } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    return (
            <div className='movie-card relative mx-auto text-white hover:text-[#63a285] transition-all duration-200 ease-out'>
                    <div 
                        className='absolute rounded-3xl w-full h-64 text-white bg-transparent text-opacity-0  
                        hover:text-opacity-100 hover:backdrop-blur-[3px] hover:bg-black/30 
                        transition-all duration-200 ease-out'
                        onClick={handleClick}
                    >
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <BsPlayCircle className='w-12 h-12' />
                        <div className='flex items-center justify-center mt-5'>
                            <BsStar className='mr-2' />
                            <span className='text-center'>{rating}</span>
                        </div>
                    </div>
                    </div>
                    <img 
                        className="movie-image rounded-3xl shadow-lg object-contain h-64 md:h-66 mb-2" 
                        src={imageUrl ? `${request.imgUrl}${imageUrl}` : `https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg`} 
                        alt="card_image"
                    /> 
                <div>
                    <h5 className='w-36 text-[17px] font-[550] leading-tight'>{title}</h5>
                    <p className='text-white text-sm w-36'>
                        {
                            genre && genre.slice(0,2).map(genre_id => (
                                genres.map(item => (
                                    item.id === genre_id ? `${item.name}, ` : null
                                ))
                            ))
                        }
                    </p>
                </div>
            </div>
    )
}
