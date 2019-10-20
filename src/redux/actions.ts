import Actions from "./actions.config"


import axios from 'axios';



export const searchMovie = (text: any) => (dispatch: any) => {
    dispatch({
        type: Actions.SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = (text: any) => (dispatch: any) => {
    axios
        .get(`https://www.omdbapi.com/?apikey=2c7db622&s=${text}`)
        .then(response =>
            dispatch({
                type: Actions.FETCH_MOVIES,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};

export const fetchMovie = (id: any) => (dispatch: any) => {
    axios
        .get(`https://www.omdbapi.com/?apikey=2c7db622&i=${id}`)
        .then(response =>
            dispatch({
                type: Actions.FETCH_MOVIE,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
        type: Actions.LOADING
    };
};