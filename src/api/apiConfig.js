const key = 'a69ac84e7a5ab50d30d9c6e241bda7f6'

const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestDetail: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=a69ac84e7a5ab50d30d9c6e241bda7f6&language=en-US`,
    requestGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
}

export default request