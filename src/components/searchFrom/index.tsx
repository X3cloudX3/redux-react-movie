import React from 'react';

import { connect } from 'react-redux';

import {
    searchMovie,
    fetchMovies,
    setLoading
} from '../../redux/actions';

export class SearchForm extends React.Component<any, any> {
    onChange = (e: any) => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = (e: any) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    };

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV Series ..."
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
            </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    text: state.movies.text
});

export default connect(

    mapStateToProps,
    { searchMovie, fetchMovies, setLoading }
)(SearchForm);