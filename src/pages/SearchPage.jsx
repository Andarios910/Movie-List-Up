import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Cardmap from '../component/Cardmap';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { getMoviesSearch } from '../features/movies/moviesSlice';

import ClipLoader from "react-spinners/ClipLoader";

export default function SearchPage() {
    const {query} = useParams();
    const { shows, isLoading } = useSelector((state) => state.search)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesSearch(query));
    }, [dispatch, query])

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
        <div>
            <Navigation />
                {
                    <Cardmap movies={shows} />
                }
            <Footer />
        </div>
    )
}
