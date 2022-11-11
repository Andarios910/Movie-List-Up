import React, { useEffect } from 'react'

import Navigation from '../component/Navigation'
import Hero from '../component/Hero'
import FilterBar from '../component/FilterBar'
import Cardmap from '../component/Cardmap'
import Footer from '../component/Footer'

import { useSelector, useDispatch } from 'react-redux'
import { getMovies, getGenres } from '../features/movies/moviesSlice'

export default function HomePages() {
    const { movies, isLoading, hasError, genres } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getGenres());
    }, [dispatch])

    return (
        <div className='relative'>
            <Navigation />
            <Hero />
            <FilterBar genres={genres} />
            <Cardmap movies={movies}/>
            <Footer />
        </div>
    )
}
