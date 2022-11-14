import React, { useEffect } from 'react'
import request from '../api/apiConfig'

import { useSelector, useDispatch } from 'react-redux'
import { getGenres } from '../features/movies/moviesSlice'

export default function Card({ imageUrl, castImage, title, genre, handleClick, cardStatus }) {
    const { genres } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    return (
            <div className='movie-card relative mx-auto text-white hover:text-[#63a285] transition-all duration-200 ease-out'>
                    <div 
                        className='absolute rounded-3xl w-full h-64 text-white bg-transparent text-opacity-0  
                        hover:text-opacity-100 hover:backdrop-blur-[2px] hover:bg-black/30 
                        transition-all duration-200 ease-out'
                        onClick={handleClick}
                    >
                    </div>
                    <img 
                        className="movie-image rounded-3xl shadow-lg object-contain h-64 md:h-66 mb-2" 
                        src={`${request.imgUrl}${imageUrl}`} 
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
