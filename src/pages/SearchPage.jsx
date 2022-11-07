import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesSearch } from '../features/movies/moviesSlice';
import Cardmap from '../component/Cardmap';

export default function SearchPage() {
    const {query} = useParams();
    const { shows, isLoading, hasError } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    console.log(shows)

    useEffect(() => {
        dispatch(getMoviesSearch(query));
    }, [dispatch, query])

    return (
        <div>
            {
                isLoading ?  
                (
                    <div className='text-white'>...Loading</div>
                ) : (
                    <Cardmap movies={shows} />
                )
            }
            {/* <Cardmap movies={shows} /> */}
        </div>
    )
}
