import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesDetail, removeSelectedMovieOrShow } from '../features/movies/moviesSlice';
import Card from '../component/Card';

export default function DetailPages() {
    const { moviesId } = useParams();
    const { selectMovieOrShow, isLoading, hasError } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesDetail(moviesId));
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
                <Card imageUrl={selectMovieOrShow.poster_path}/>
            }
        </div>
    )
}
