import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Navigation from '../component/Navigation'
import Cardmap from '../component/Cardmap'
import Footer from '../component/Footer'

import { useSelector, useDispatch } from 'react-redux'
import { getGenresMovie } from '../features/movies/genreSlice'

import ClipLoader from "react-spinners/ClipLoader";

export default function GenresPages() {
    const { genreId } = useParams();
    const dispatch = useDispatch();
    const { genresMovie, isLoading } = useSelector((state) => state.genre)

    console.log(genresMovie)

    useEffect(() => {
        dispatch(getGenresMovie(genreId))
    }, [dispatch, genreId])

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
        <>  
            <Navigation />
            <Cardmap movies={genresMovie} />
            <Footer />
        </>
    )
}
