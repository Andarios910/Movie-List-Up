import React from 'react'
import request from '../api/apiConfig'

export default function Card({ imageUrl, title, date, handleClick }) {
    return (
                <div className='movie-card relative mx-auto text-white hover:text-[#3182ed] transition-all duration-200 ease-out'>
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
                        <h5 className='w-36 text-lg font-semibold'>{title}</h5>
                        <p className='text-white text-sm'>{date}</p>
                    </div>
                </div>
    )
}
