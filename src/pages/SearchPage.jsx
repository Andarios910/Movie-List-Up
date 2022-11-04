import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesSearch, removeSelectedMovieOrShow } from '../features/movies/moviesSlice';
import Cardmap from '../component/Cardmap';

export default function SearchPage() {
    const {query} = useParams();
    const { shows } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    console.log(shows)

    useEffect(() => {
        dispatch(getMoviesSearch(query));
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, query])

    return (
        <div>
            {
                Object.keys(shows).length === 0 ? 
                (
                    <div className='text-white'>...Loading</div>
                ) : (
                    <Cardmap movies={shows.docs} />
                )
            }
        </div>
    )
}
