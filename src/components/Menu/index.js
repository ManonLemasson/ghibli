import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const Menu = ({ moviesList, menuIsOpen }) => (
  <nav className={classNames('menu', { 'menu-open': menuIsOpen })}>
    <a href="" className="menu-item">Home</a>
    {moviesList.map((movie) => (
      <a href="" key={movie.id} className="menu-item">
        {movie.title}
      </a>
    ))}
  </nav>
);

Menu.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

export default Menu;
