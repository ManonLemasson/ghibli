import { connect } from 'react-redux';
import Search from 'src/components/Search';
import { changeSearchValue } from 'src/actions';

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchValue: (value) => {
    dispatch(changeSearchValue(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
