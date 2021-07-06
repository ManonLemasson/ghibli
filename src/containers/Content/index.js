import { connect } from 'react-redux';
import Content from 'src/components/Content';

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  pictures: state.pictures,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
