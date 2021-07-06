import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Burger = ({ menuIsOpen, toggleMenu }) => (
  <button
    type="button"
    onClick={() => toggleMenu()}
    className={classNames('burger-button', { 'burger-button-open': menuIsOpen })}
  >
    <div />
    <div />
    <div />
  </button>
);

Burger.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Burger;
