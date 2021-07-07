import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useOnClickOutside } from 'src/hooks';
import { Route, Switch, useLocation } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Burger from 'src/containers/Burger';
import Home from 'src/components/Home';
import Loading from './Loading';

import './style.scss';

const App = ({ closeMenu, loading, fetchMovies }) => {
  const node = useRef();
  useOnClickOutside(node, () => closeMenu());

  useEffect(fetchMovies, []);

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <div ref={node}>
        <Burger />
        <Menu />
      </div>
    </div>
  );
};

App.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

export default App;
