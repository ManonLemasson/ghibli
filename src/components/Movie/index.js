/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import PeopleCard from 'src/components/PeopleCard';

import './style.scss';

const Movie = ({ movie, pictureUrl, peopleList }) => {
  console.log('o');
  return (
    <section className="movie">
      <h1 className="movie-title">{movie.title}</h1>
      <img className="movie-img" src={pictureUrl} alt="movie" />
      <p className="movie-desc">{movie.description}</p>
      <div className="movie-block-info">
        <ul className="movie-info">
          <li className="movie-info-item">Director : <strong>{movie.director}</strong></li>
          <li className="movie-info-item">Producer : <strong>{movie.producer}</strong></li>
          <li className="movie-info-item">Release date : <strong>{movie.release_date}</strong></li>
          <li className="movie-info-item">Running time : <strong>{movie.running_time} min</strong></li>
        </ul>
      </div>
      <h2 className="movie-people-title">Main characters</h2>
      <div className="movie-people">
        {peopleList.map((people) => (
          <PeopleCard key={people.id} {...people} />
        ))}
      </div>
    </section>
  );
};
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    running_time: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
  pictureUrl: PropTypes.string.isRequired,
  peopleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

Movie.defaultProps = {
  movie: null,
  peopleList: null,
};

export default Movie;
