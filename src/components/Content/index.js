import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Card';
import Search from 'src/containers/Search';
import Order from 'src/containers/Order';
import { findImageUrl } from 'src/selectors';

import './style.scss';

const Content = ({ moviesList, pictures }) => (
  <section className="content">
    <h1 className="content-title">Ghibli movies</h1>
    <div className="content-filter">
      <Search />
      <Order />
    </div>
    <p className="content-results">{moviesList.length} {(moviesList.length > 1 ? 'results' : 'result')}</p>
    {moviesList && (
      <div className="content-list">
        {moviesList.map((movie) => (
          <Card
            key={movie.id}
            {...movie}
            pictureUrl={(findImageUrl(pictures, movie.title)).url}
          />
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
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Content.defaultProps = {
  moviesList: null,
};

export default Content;
