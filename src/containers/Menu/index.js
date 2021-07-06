import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { toggleMenu } from 'src/actions';

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  menuIsOpen: state.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => {
    dispatch(toggleMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
