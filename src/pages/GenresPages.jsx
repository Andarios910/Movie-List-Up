import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Navigation from '../component/Navigation'
import Cardmap from '../component/Cardmap'
import Footer from '../component/Footer'

import { useSelector, useDispatch } from 'react-redux'
import { getGenresMovie } from '../features/movies/genreSlice'

export default function GenresPages() {
    const { genreId } = useParams();
    const dispatch = useDispatch();
    const { genresMovie } = useSelector((state) => state.genre)

    console.log(genresMovie)

    useEffect(() => {
        dispatch(getGenresMovie(genreId))
    }, [dispatch, genreId])

    return (
        <>  
            <Navigation />
            <Cardmap movies={genresMovie} />
            <Footer />
        </>
    )
}
