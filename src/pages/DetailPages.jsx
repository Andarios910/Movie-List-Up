import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { getMoviesDetail, removeSelectedMovieOrShow } from '../features/movies/moviesSlice';
import { getCredit } from '../features/movies/creditSlice';
import { getReview } from '../features/movies/reviewSlice';
import { getVideo } from '../features/movies/videoSlice';

import request from '../api/apiConfig';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';
import Cardmap from '../component/detailComponent/Cardmap';
import CardReview from '../component/CardReview';
import Youtube from '../component/detailComponent/Youtube';

import ClipLoader from "react-spinners/ClipLoader";

export default function DetailPages() {
    const { moviesId } = useParams();
    const { selectMovieOrShow, isLoading, hasError } = useSelector((state) => state.movies)
    const { cast, crew } = useSelector((state) => state.credit)
    const { review } = useSelector((state) => state.review)
    const { video } = useSelector((state) => state.video)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesDetail(moviesId));
        dispatch(getCredit(moviesId));
        dispatch(getReview(moviesId))
        dispatch(getVideo(moviesId))
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
            <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <ClipLoader
                    color="#3182ed"
                    size={64}
                />
            </div>
        )
    } 

    return (
        <div className='text-white'>
            {
                selectMovieOrShow &&
                <div key={selectMovieOrShow.id}> 
                    <Navigation />
                    <div
                        className='w-full h-full md:h-[500px] lg:h-screen relative bg-center bg-cover bg-no-repeat'
                        style={{backgroundImage: `url(${request.imgUrl}${selectMovieOrShow.backdrop_path})`}}
                    >
                        <div
                            className='absolute w-full h-full lg:h-screen' 
                            style={{
                                backgroundImage: 'linear-gradient(to top, rgba(15,15,15,1), rgba(0,0,0,0))'
                            }}>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row-reverse justify-between relative max-w-[1024px] w-6/6 md:w-5/6 px-5 h-full lg:h-screen lg:w-3/4 mx-auto">
                            <div className="h-full w-full md:w-5/6 text-white mx-auto mt-10 md:mt-44 lg:mt-40">
                                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold leading-normal md:text-left mb-2 md:mb-5">{selectMovieOrShow.title || selectMovieOrShow.name}</h2>
                                {
                                    selectMovieOrShow.genres && 
                                    selectMovieOrShow.genres.map(item => (
                                        <button key={item.id} className='mb-2 md:mb-5 inline-block border-2 px-2 md:px-6 py-1 rounded-3xl hover:bg-slate-500 mr-2 my-1'>
                                            {item.name}
                                        </button>
                                    ))
                                }
                                
                                <div className="text-sm text-[700] md:mb-5 mb-10 line-clamp-2 md:line-clamp-none">{selectMovieOrShow.overview}</div>
                            </div>
                            <div className="lg:pr-16 mt-44 pr-5 lg:mt-40 mx-auto">
                                <img className='w-52 md:w-[200px] lg:w-[250px] rounded-lg shadow-md' src={request.imgUrl + selectMovieOrShow.poster_path} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='pt-10 max-w-[1024px] mx-auto'>
                        <h1 className='pl-5 pb-5 font-bold text-4xl'>Trailer</h1>
                        {
                            video && video.map((item, index) => {
                                if ((item.type === 'Trailer')) {
                                    return (
                                        <Youtube embedId={item.key} key={index} />
                                    )
                                }
                                return (
                                    <p key={index}></p>
                                )
                            })
                        }
                    </div>
                    <div className='pt-10 max-w-[1024px] mx-auto'>
                        <h1 className='pl-5 pb-5 font-bold text-4xl'>Casts</h1>
                        <Cardmap movies={cast} />
                    </div>
                    <div className='pt-10 max-w-[1024px] mx-auto'>
                        <h1 className='pl-3 pb-5 font-bold text-4xl'>Crew</h1>
                        <Cardmap movies={crew} />
                    </div>
                    <div className="antialiased pt-8 pb-12 max-w-[1024px] mx-auto">
                        <h1 className='pl-3 pb-5 font-bold text-4xl'>Comment</h1>
                        <CardReview data={review} />
                    </div>
                    <Footer />
                </div>
            }
        </div>
    )
}


