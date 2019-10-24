import React from 'react';

import { connect } from 'react-redux';

import SearchForm from '../searchFrom';
import MoviesContainer from '../movieContainer';
import Spinner from '../spinner';

export class Landing extends React.Component<any, any> {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);

  return {
    loading: state.movies.loading
  }
};

export default connect(mapStateToProps)(Landing);