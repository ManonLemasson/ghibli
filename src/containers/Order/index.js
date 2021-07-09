import { connect } from 'react-redux';
import Order from 'src/components/Order';
import { changeOrderValue } from 'src/actions';

const mapStateToProps = (state) => ({
  orderValue: state.orderValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderValue: (value) => {
    dispatch(changeOrderValue(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
