import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsSearch, BsX, BsList, BsBoxArrowInRight } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'

import { logout } from '../firebase';

export default function Navigation() {
    const navigate = useNavigate();
    const [color, setColor] = useState(true)
    const [select, setSelect] = useState(false);
    const [icon, setIcon] = useState(false);
    const [query, setQuery] = useState('')
    
    const handleSubmit = () => navigate(`/search/${query}`)
    const handleNav = () => setIcon(!icon);
    const handleLogout = (e) => {
        logout();
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem('google_user')
        setTimeout(() => {
            window.location.reload(1)
        }, 1500)
    }
    const changeColor = () => {
        if (window.scrollY <= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor, true);

    const token = JSON.parse(localStorage.getItem('token'))
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        // <div className={`relative fixed bg-red-600 border-2 h-20`}>
        <nav className={`fixed px-5 xl:px-0 top-0 left-1/2 translate-x-[-50%] w-full mb-8 z-10 transition-all duration-200 ease-out ${color ? 'bg-transparent' : 'bg-[#131720]'} `}>
            <div className='max-w-[1024px] container m-auto flex justify-between items-center text-gray-700'>
                <div className='grid grid-cols-3'>
                    <h1 className='py-4 text-2xl font-bold text-white items-center cursor-pointer' onClick={() => navigate('/')}>NotFlix</h1>
                    <ul className='hidden md:flex items-center text-base font-semibold cursor-pointer'>
                        <li className='hover:text-[#2b9c87] py-4 text-white transition-all duration-500 ease-out' onClick={() => navigate('/')}>Home</li>
                        <li className='hover:text-[#2b9c87] py-4 px-6 text-white transition-all duration-500 ease-out'>Category</li>
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
                        <button type='submit' className='absolute top-[35%] right-2'>
                            <BsSearch className='text-[#3182ed] hover:text-white transition-all duration-500 ease-out'/>
                        </button>
                    </form>
                    <ul className='hidden md:flex items-center text-base font-semibold cursor-pointer'>
                        {
                            token ? 
                                <div className='flex items-center' onClick={() => setSelect(!select)}>
                                    <li>
                                        <img 
                                            className='rounded-full mr-1' 
                                            src={user.photoURL || 'https://tse4.mm.bing.net/th?id=OIP.nTK-yAWL01laY6CKjMEq3gHaHa&pid=Api&P=0'} 
                                            width="40" 
                                            height="40" 
                                            alt="profile"/>
                                    </li>
                                    <li 
                                        className='hover:text-[#2b9c87] py-4 text-white max-w-64 flex items-center transition-all duration-500 ease-out'
                                    >
                                        <RiArrowDropDownLine />
                                    </li>
                                </div> 
                                : 
                                <li 
                                    className='relative py-4 hover:text-[#2b9c87] text-white max-w-64 flex items-center transition-all duration-500 ease-out'
                                    onClick={() => setSelect(!select)}
                                >
                                    <BsBoxArrowInRight className='w-6 h-8' />
                                    <RiArrowDropDownLine />
                                </li>

                        }
                        <div 
                            className={`absolute right-0 top-12 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#162032] shadow-lg ring-1 ring-black 
                            ring-opacity-5 focus:outline-none transition ease-out duration-100 ${select ? 'visible transform opacity-100 scale-100' : 'invisible transform opacity-0 scale-95'}`}
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="menu-button" 
                            tabIndex="-1"
                        >
                            {
                                token ? 
                                    <div className="py-1 text-white" role="none">
                                        <p onClick={() => navigate('/login')} className="hover:text-[#2b9c87] block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                            Profile
                                        </p>
                                        <p onClick={handleLogout} className="hover:text-[#2b9c87] block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                            Logout
                                        </p>
                                    </div>
                                :
                                    <div className="py-1 text-white" role="none">
                                        <p onClick={() => navigate('/login')} className="hover:text-[#2b9c87] block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                            Login
                                        </p>
                                        <p onClick={() => navigate('/register')} className="hover:text-[#2b9c87] block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                            Register
                                        </p>
                                    </div>
                            }
                        </div>

                    </ul>
                </div>
                <button className='block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200'>
                    {
                        icon ? <BsX className='w-8 h-8' onClick={handleNav} /> : <BsList className='w-8 h-8' onClick={handleNav} />  
                    }
                </button>
                    <div className={`absolute top-0 ${icon ? 'right-0' : 'right-[-100%]'} h-screen w-8/12 bg-slate-900 mt-[60px] ease-in-out duration-500`}>
                        <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10 outline-none'>
                            {
                                token ? 
                                    <div className='flex items-center'>
                                        <li>
                                            <img 
                                                className='rounded-full' 
                                                src={user.photoURL || 'https://tse4.mm.bing.net/th?id=OIP.nTK-yAWL01laY6CKjMEq3gHaHa&pid=Api&P=0'} 
                                                width="40" 
                                                height="40" 
                                                alt="profile"/>
                                        </li>
                                    </div> 
                                :
                                    <div></div>
                            }
                            <li className='py-4 px-6 w-full'>
                                <form onSubmit={handleSubmit} className='relative '>
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
                            <li className='hover:bg-gray-200 py-4 px-6 w-full transition-all duration-500 ease-out'>Home</li>
                            <li className='hover:bg-gray-200 py-4 px-6 w-full transition-all duration-500 ease-out'>Category</li>
                            {
                                token ? 
                                    <div className='items-center w-full px-6'>
                                        <li 
                                            className='hover:text-[#2b9c87] py-4 text-white max-w-64 flex items-center transition-all duration-500 ease-out'
                                            onClick={handleLogout}
                                        >
                                            <span className='mr-1'>
                                                Profile
                                            </span>
                                        </li>
                                        <li 
                                            className='hover:text-[#2b9c87] py-4 text-white max-w-64 flex items-center transition-all duration-500 ease-out'
                                            onClick={handleLogout}
                                        >
                                            <span className='mr-1'>
                                                Logout
                                            </span>
                                            <BsBoxArrowInRight className='w-5 h-5' /> 
                                        </li>
                                    </div> 
                                    :
                                    <ul className='w-full'> 
                                        <li onClick={() => navigate('/login')} className='hover:bg-gray-200 py-4 px-6 w-full transition-all duration-500 ease-out'>Login</li>
                                        <li onClick={() => navigate('/register')} className='hover:bg-gray-200 py-4 px-6 w-full transition-all duration-500 ease-out'>Register</li>
                                    </ul>
                            }
                        </ul>
                    </div>
            </div>
        </nav>
        // </div>
    )
}
