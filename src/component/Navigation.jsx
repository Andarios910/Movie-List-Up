import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsSearch, BsX, BsList, BsBoxArrowInRight } from 'react-icons/bs'

export default function Navigation() {
    const navigate = useNavigate();
    const [icon, setIcon] = useState(false);
    const [query, setQuery] = useState('')
    
    const handleSubmit = () => navigate(`/search/${query}`)
    const handleNav = () => setIcon(!icon);

    return (
        <nav className='fixed top-0 left-0 bg-[#111722] w-full mb-8'>
            <div className='container m-auto flex justify-between items-center text-gray-700'>
                <div className='grid grid-cols-3 gap-10'>
                    <h1 className='lg:pl-[120px] pl-8 py-4 text-2xl font-bold text-white items-center'>NotFlix</h1>
                    <ul className='hidden md:flex items-center text-base font-semibold cursor-pointer'>
                        <li className='hover:text-[#3182ed] py-4 px-6 text-white'>Home</li>
                        <li className='hover:text-[#3182ed] py-4 px-6 text-white'>Category</li>
                    </ul>
                </div>
                <div className='flex justify-items-stretch'>
                    <form onSubmit={handleSubmit} className='relative hidden md:inline-flex items-center mr-10'>
                        <input
                            className='bg-slate-700 text-white h-10 md:w-64 w-72 px-5 rounded-lg text-sm focus:outline-none'
                            type='search'
                            name='search'
                            placeholder='Search'
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type='submit' className='absolute top-[27%] right-2'>
                            <BsSearch color='white'/>
                        </button>
                    </form>
                    <ul className='hidden md:flex items-center pr-10 lg:pr-[128px] text-base font-semibold cursor-pointer'>
                        <li className='hover:text-[#3182ed] py-4 text-white max-w-64 flex items-center'>
                            <span className='mr-1'>Sign In</span>
                            <BsBoxArrowInRight className='w-5 h-5' /> 
                        </li>
                    </ul>
                </div>
                <button className='block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200'>
                    {
                        icon ? <BsX className='w-8 h-8' onClick={handleNav} /> : <BsList className='w-8 h-8' onClick={handleNav} />  
                    }
                </button>
                    <div className={`absolute top-0 ${icon ? 'right-0' : 'right-[-100%]'} h-screen w-8/12 bg-slate-900 mt-[60px] ease-in-out duration-500`}>
                        <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10 outline-none'>
                            <li className='py-4 px-6 w-full'>
                                <form onSubmit={handleSubmit} className='relative'>
                                    <input
                                        className='bg-slate-700 h-10 px-5 w-full rounded-lg text-white text-sm focus:outline-none'
                                        type='search'
                                        name='search'
                                        placeholder='Search'
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                    <button type='submit' className='absolute top-[27%] right-3'>
                                        <BsSearch color='white'/>
                                    </button>
                                </form>
                            </li>
                            <li className='hover:bg-gray-200 py-4 px-6 w-full'>Home</li>
                            <li className='hover:bg-gray-200 py-4 px-6 w-full'>Category</li>
                        </ul>
                    </div>
                
            </div>
        </nav>
    )
}
