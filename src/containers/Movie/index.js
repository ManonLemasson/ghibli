import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Movie from 'src/components/Movie';

import { findImageUrl, findMovie, filterPeople } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  movie: findMovie(state.moviesList, ownProps.match.params.slug),
  pictureUrl: (findImageUrl(
    state.pictures,
    findMovie(state.moviesList, ownProps.match.params.slug).title,
  )).url,
  peopleList: (filterPeople(
    state.peopleList,
    findMovie(state.moviesList, ownProps.match.params.slug).url,
  )),
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Movie);
// on enrichi le conteneur avec des props liés à l'url
const containerWithRouter = withRouter(container);
// c'est le conteneur enrichi qu'on exporte
export default containerWithRouter;
