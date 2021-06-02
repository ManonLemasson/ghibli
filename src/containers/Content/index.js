import { connect } from 'react-redux';
import Content from 'src/components/Content';

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
