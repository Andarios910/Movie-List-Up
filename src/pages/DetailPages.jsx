import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { getMoviesDetail, removeSelectedMovieOrShow } from '../features/movies/moviesSlice';
import { getCredit } from '../features/movies/creditSlice';
import { getReview } from '../features/movies/reviewSlice';

import request from '../api/apiConfig';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';
import Cardmap from '../component/detailComponent/Cardmap';

export default function DetailPages() {
    const { moviesId } = useParams();
    const { selectMovieOrShow, isLoading, hasError } = useSelector((state) => state.movies)
    const { cast, crew } = useSelector((state) => state.credit)
    const { review } = useSelector((state) => state.review)
    const dispatch = useDispatch();

    console.log(cast)

    useEffect(() => {
        dispatch(getMoviesDetail(moviesId));
        dispatch(getCredit(moviesId));
        dispatch(getReview(moviesId))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, moviesId])

    if (hasError) {
        return (
            <p className='text-white'>Error To Get API....</p>
        )
    } 
    
    if (isLoading) {
        return (
            <p className='text-white'>Loading ....</p>
        )
    } 

    return (
        <div className='text-white'>
            {
                selectMovieOrShow &&
                <div key={selectMovieOrShow.id}> 
                    <Navigation />
                    <div
                        className='w-full h-96 md:h-[500px] lg:h-screen relative bg-center bg-cover bg-no-repeat'
                        style={{backgroundImage: `url(${request.imgUrl}${selectMovieOrShow.backdrop_path})`}}
                    >
                        <div
                            className='absolute w-full h-full lg:h-screen' 
                            style={{
                                backgroundImage: 'linear-gradient(to top, rgba(15,15,15,1), rgba(0,0,0,0))'
                            }}>
                        </div>
                        <div className="lg:flex lg:flex-row-reverse justify-between relative max-w-[1024px] w-5/6 lg:w-3/4 mx-auto">
                            <div className="w-full md:w-5/6 text-white mx-auto pt-20 md:pt-36 lg:pt-40">
                                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold leading-normal text-center md:text-left md:mb-5">{selectMovieOrShow.title || selectMovieOrShow.name}</h2>
                                {
                                    selectMovieOrShow.genres && 
                                    selectMovieOrShow.genres.map(item => (
                                        <button key={item.id} className='md:mb-5 inline-block border-2 px-2 md:px-6 py-1 rounded-3xl hover:bg-slate-500 mr-2 my-1'>
                                            {item.name}
                                        </button>
                                    ))
                                }
                                
                                <div className="text-sm text-[700] md:mb-5">{selectMovieOrShow.overview}</div>
                                <div className="btns">
                                    <button className='px-10 py-2 rounded-3xl mr-5 bg-red-600 hover:bg-red-700'>
                                        Watch now
                                    </button>
                                    <button className='px-10 py-2 rounded-3xl mr-5 border-2 hover:bg-[#3182ed] hover:border-[#3182ed]'>
                                        Watch trailer
                                    </button>
                                </div>
                            </div>
                            <div className="invisible lg:visible lg:pr-16 lg:pt-40">
                                <img className='md:w-[200px] lg:w-[250px] rounded-lg shadow-md' src={request.imgUrl + selectMovieOrShow.poster_path} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='pt-10 max-w-[1024px] mx-auto'>
                        <h1 className='pl-5 pb-5 font-bold text-4xl'>Casts</h1>
                        <Cardmap movies={cast} />
                    </div>
                    <div className='pt-10 max-w-[1024px] mx-auto'>
                        <h1 className='pl-3 pb-5 font-bold text-4xl'>Crew</h1>
                        <Cardmap movies={crew} />
                    </div>
                    <div>
                        
                    </div>
                    <Footer />
                </div>
            }
        </div>
    )
}
