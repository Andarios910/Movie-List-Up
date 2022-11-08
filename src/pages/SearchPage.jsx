import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Cardmap from '../component/Cardmap';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { getMoviesSearch } from '../features/movies/moviesSlice';

export default function SearchPage() {
    const {query} = useParams();
    const { shows, isLoading, hasError } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesSearch(query));
    }, [dispatch, query])

    return (
        <div>
            <Navigation />
            {
                isLoading ?  
                (
                    <div className='text-white'>...Loading</div>
                ) : (
                    <Cardmap movies={shows} />
                )
            }
            <Footer />
        </div>
    )
}
