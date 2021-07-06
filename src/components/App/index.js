import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useOnClickOutside } from 'src/hooks';

import Menu from 'src/containers/Menu';
import Burger from 'src/containers/Burger';
import Home from 'src/components/Home';

import './style.scss';

const App = ({ closeMenu }) => {
  const node = useRef();
  useOnClickOutside(node, () => closeMenu());
  return (
    <div className="app">
      <Home />
      <div ref={node}>
        <Burger />
        <Menu />
      </div>
    </div>
  );
};

App.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default App;
