import React from 'react'

export default function Card({ imageUrl, title, date, handleClick }) {
    return (

            <div className='relative mx-auto'>
                <div 
                    className='absolute rounded-3xl w-full h-full text-white bg-transparent text-opacity-0  
                    hover:text-opacity-100 hover:backdrop-blur-[2px] hover:bg-black/30 
                    transition-all duration-200 ease-out'
                >
                    {/* <div className='absolute bottom-0'>
                        <h5 className=''>{title}</h5>
                        <p>{date}</p>
                    </div> */}
                </div>
                <img 
                    className="rounded-3xl shadow-lg object-contain h-64 md:h-66" 
                    src={`https://image.tmdb.org/t/p/w500${imageUrl}`} 
                    alt="card_image"
                    onClick={handleClick}
                />
                <div className='text-white'>
                    <h5 className=''>{title}</h5>
                    <p>{date}</p>
                </div>
            </div>
    )
}
