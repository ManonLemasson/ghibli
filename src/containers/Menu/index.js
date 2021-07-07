import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { closeMenu } from 'src/actions';

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  menuIsOpen: state.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
