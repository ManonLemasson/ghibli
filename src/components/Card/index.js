/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Card = ({
  title,
  rt_score,
  director,
  release_date,
  running_time,
}) => (
  <article className="card">
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <div className="card-info">
        <p className="card-desc">{director} - {release_date} - {running_time} min</p>
        <p className="card-score">Score : <span>{rt_score} %</span></p>
      </div>
      <a href="" className="card-link">See more</a>
    </div>
  </article>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  rt_score: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  running_time: PropTypes.string.isRequired,
};

export default Card;
