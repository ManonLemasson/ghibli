import { connect } from 'react-redux';
import App from 'src/components/App';
import { closeMenu } from 'src/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
