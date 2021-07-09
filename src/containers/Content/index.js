import { connect } from 'react-redux';
import Content from 'src/components/Content';
import { filterMoviesByQuery } from 'src/selectors';

const mapStateToProps = (state) => ({
  moviesList: filterMoviesByQuery(state.moviesList, state.searchValue),
  pictures: state.pictures,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
