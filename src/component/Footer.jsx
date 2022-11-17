import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white mt-10'>
            <div className='max-w-[1024px] mx-auto lg:flex md:justify-between text-center md:text-left px-5 bg-[$ffffff19] py-7'>
                <div className='max-w-[250px] mx-auto md:mx-0'>
                    <ul className='md:mr-8'>
                        <h1 className='mb-5 text-[2rem] font-bold'>NotFlix</h1>
                        <li>
                            Movies & TV Shows, Online Cinema, Movie database
                        </li>
                        <div className='flex justify-between w-42 mx-auto py-5'>
                            <a href="/"><BsFacebook className='w-6 h-6' /></a>
                            <a href="/"><BsTwitter className='w-6 h-6' /></a>
                            <a href="/"><BsInstagram className='w-6 h-6' /></a>
                            <a href="/"><BsYoutube className='w-6 h-6' /></a>
                        </div>
                    </ul>
                </div>
                <div className='md:grid md:grid-cols-4 md:gap-10'>
                    <ul className='mb-5'>
                        <h1 className='mb-1 text-lg font-bold'>NotFlix</h1>
                        <li>
                            <a href='/' className='text-gray-400 hover:text-teal-400 duration-300'>About us</a>
                        </li>
                        <li>
                            <a href='/' className='text-gray-400 hover:text-teal-400 duration-300'>My Profile</a>
                        </li>
                        <li>
                            <a href='/' className='text-gray-400 hover:text-teal-400 duration-300'>Pricing plans</a>
                        </li>
                        <li>
                            <a href='/' className='text-gray-400 hover:text-teal-400 duration-300'>Contacts</a>
                        </li>
                    </ul>
                    <ul className='mb-5'>
                        <h1 className='mb-1 text-lg font-bold'>Browse</h1>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>TV Shows</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Movies</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Kids</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Collections</a>
                        </li>
                    </ul>
                    <ul className='mb-5'>
                        <h1 className='mb-1 text-lg font-bold'>Help</h1>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Account % Billing</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Plans & Pricing</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Supported devices</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Accessibility</a>
                        </li>
                    </ul>
                    <ul className='mb-5'>
                        <h1 className='mb-1 text-lg font-bold'>Support</h1>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Documentation</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Tutorials & guides</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Webinars</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 hover:text-teal-400 duration-300'>Open Source</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
