import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Card';

import './style.scss';

const Content = ({ moviesList }) => (
  <section>
    <h1>Ghibli movies</h1>
    {moviesList && (
      <div>
        {moviesList.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
    )}
  </section>
);

Content.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

Content.defaultProps = {
  moviesList: null,
};

export default Content;
