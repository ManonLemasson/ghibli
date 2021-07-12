/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PeopleCard = ({
  name,
  gender,
  age,
  eye_color,
  hair_color,
}) => (
  <article className="peopleCard">
    <div className="peopleCard-content">
      <h2 className="peopleCard-title">{name} ({gender})</h2>
      <ul className="peopleCard-info">
        <li className="peopleCard-desc">Age : {age}</li>
        <li className="peopleCard-desc">Eye color : {eye_color}</li>
        <li className="peopleCard-desc">Hair color : {hair_color}</li>
      </ul>
    </div>
  </article>
);

PeopleCard.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
};

export default PeopleCard;
