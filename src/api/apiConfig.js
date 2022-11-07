const key = process.env.REACT_APP_API_KEY

const request = {
    baseUrl: `https://api.themoviedb.org/3`,
    apiKey: process.env.REACT_APP_API_KEY,
    imgUrl: `https://image.tmdb.org/t/p/original`,
    requestPopular: `/movie/popular?api_key=${key}&language=en-US`,

}

export default request

// requestDetail: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${key}&language=en-US`,
//     requestGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
//     requestSearch: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`