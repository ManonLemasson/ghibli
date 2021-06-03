import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Card';

import './style.scss';

const Content = ({ moviesList }) => (
  <section className="content">
    <h1 className="content-title">Ghibli movies</h1>
    {moviesList && (
      <div className="content-list">
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
