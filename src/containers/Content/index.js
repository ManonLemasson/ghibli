import { connect } from 'react-redux';
import Content from 'src/components/Content';
import { filterMoviesByQuery, orderMovies } from 'src/selectors';

const mapStateToProps = (state) => ({
  moviesList: orderMovies(
    filterMoviesByQuery(state.moviesList, state.searchValue),
    state.orderValue,
  ),
  pictures: state.pictures,
  orderValue: state.orderValue,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
