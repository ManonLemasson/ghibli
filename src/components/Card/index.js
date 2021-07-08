/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Card = ({
  title,
  pictureUrl,
  rt_score,
  director,
  release_date,
  running_time,
  id,
}) => (
  <Link to={`/movie/${id}`}>
    <article className="card">
      <img className="card-img" src={pictureUrl} alt="movie" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <ul className="card-info">
          <li className="card-desc">{director}</li>
          <li className="card-desc">{release_date}</li>
          <li className="card-desc">{running_time} min</li>
          <li className="card-desc">Score : <span>{rt_score} %</span></li>
        </ul>
      </div>
      <div className="card-link">See more</div>
    </article>
  </Link>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  rt_score: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  running_time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
