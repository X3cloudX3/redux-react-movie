import React from 'react';

import { connect } from 'react-redux';

import MovieCard from '../movieCard';

export class MoviesContainer extends React.Component<any, any> {
    render() {
        const { movies } = this.props;
        let content = '';

        content =
            movies.Response === 'True'
                ? movies.Search.map((movie: any, index: any) => (
                    <MovieCard key={index} movie={movie} />
                ))
                : null;
        return <div className="row">{content}</div>;
    }
}

const mapStateToProps = (state: any) => {
    console.log(state);

    return {
        movies: state.movies.movies
    }
}

export default connect(mapStateToProps)(MoviesContainer);