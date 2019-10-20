import Actions from "./actions.config"

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case Actions.SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case Actions.FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case Actions.FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case Actions.LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}