import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Menu = ({ moviesList, menuIsOpen, closeMenu }) => (
  <nav className={classNames('menu', { 'menu-open': menuIsOpen })}>
    <NavLink
      to="/"
      exact
      className="menu-item"
      activeClassName="menu-item--active"
      onClick={() => closeMenu()}
    >
      Home
    </NavLink>
    {moviesList.map((movie) => (
      <NavLink
        to={`/movie/${movie.id}`}
        exact
        key={movie.id}
        className="menu-item"
        activeClassName="menu-item--active"
        onClick={() => closeMenu()}
      >
        {movie.title}
      </NavLink>
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
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
