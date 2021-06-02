/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Card = ({ title, rt_score }) => (
  <article>
    <div>
      <h2>{title}</h2>
      <p>Score : <span>{rt_score} %</span></p>

    </div>
  </article>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  rt_score: PropTypes.string.isRequired,
};

export default Card;
