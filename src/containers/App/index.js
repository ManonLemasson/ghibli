import { connect } from 'react-redux';
import App from 'src/components/App';
import { closeMenu, fetchMovies } from 'src/actions';

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => {
    dispatch(closeMenu());
  },
  fetchMovies: () => {
    dispatch(fetchMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
