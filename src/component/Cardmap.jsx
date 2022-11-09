import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from './Card'


export default function Cardmap({ movies }) {
    const navigate = useNavigate();
    
    return (
            <div 
                className='max-w-[1024px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-y-8 mx-auto mt-12'
                // className='grid grid-cols-2 gap-y-2 md:grid-cols-4 lg:grid-cols-5 md:px-6 md:gap-y-12 mt-12 lg:pl-[120px] lg:pr-[128px]'
            >
                {
                    movies && 
                    movies.map(item => (
                        <Card 
                            key={item.id}
                            id={item.id}
                            imageUrl={item.poster_path}
                            title={item.title}
                            genre={item.genre_ids}
                            handleClick={() => navigate(`/detail/${item.id}`)}
                        />
                    ))
                }
            </div>
    )
}
