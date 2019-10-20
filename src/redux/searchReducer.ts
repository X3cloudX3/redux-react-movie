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
            }
        default:
            return state
    }
}