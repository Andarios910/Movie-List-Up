import React from 'react'
import request from '../../api/apiConfig'
// import request from '../api/apiConfig'

export default function Card({ imageUrl, name }) {
    return (
        <div className='movie-card relative mx-auto text-white hover:text-[#3182ed] transition-all duration-200 ease-out'>
            <img 
                className="rounded-3xl shadow-lg object-contain h-64 md:h-66 mb-2" 
                src={imageUrl ? `${request.imgUrl}${imageUrl}` : 'https://tse4.mm.bing.net/th?id=OIP.pGSlSFOZlqo-xdN-fN7-DwHaJ9&pid=Api&P=0'} 
                alt="card_image"
            /> 
            <div>
                <h5 className='w-36 text-[17px] font-[550] leading-tight'>{name}</h5>
            </div>
        </div>
    )
}
