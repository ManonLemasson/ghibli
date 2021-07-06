import { connect } from 'react-redux';
import Burger from 'src/components/Burger';
import { toggleMenu } from 'src/actions';

const mapStateToProps = (state) => ({
  menuIsOpen: state.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => {
    dispatch(toggleMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
