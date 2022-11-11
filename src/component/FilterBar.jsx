import React from 'react'
import { useState } from 'react';

export default function FilterBar({ genres }) {
    const [select, setSelect] = useState(false);

    return (
        <div className='px-5'>
            <div className='max-w-[1024px] mx-auto mt-10 flex justify-between items-center bg-[#162032] px-[30px] py-5 rounded-[20px] text-white'>
                <div className="filter-dropdowns">
                    <div className="relative inline-block text-left">
                        <div>
                            <button 
                                type="button" 
                                className="inline-flex w-44 md:w-56 justify-between rounded-md border border-gray-300 bg-[#162032] px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
                                id="menu-button" 
                                aria-expanded="true" 
                                aria-haspopup="true"
                                onClick={() => setSelect(!select)}
                            >
                                All Genres
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>
                        <div 
                            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#162032] shadow-lg ring-1 ring-black 
                            ring-opacity-5 focus:outline-none transition ease-out duration-100 ${select ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'}`}
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="menu-button" 
                            tabIndex="-1"
                        >
                            <div className="py-1" role="none">
                                {
                                    genres && genres.map((item, index) => (
                                        <a href={`/genres/${item.name}/${item.id}`} className="block px-4 py-2 text-sm" key={index} role="menuitem" tabIndex="-1" id="menu-item-0">
                                            {item.name}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2.5 rounded-[15px] w-full text-right">
                    see All Movie
                </div>
            </div>
        </div>
    )
}
