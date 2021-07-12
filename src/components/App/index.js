import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useOnClickOutside } from 'src/hooks';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Burger from 'src/containers/Burger';
import Home from 'src/components/Home';
import Movie from 'src/containers/Movie';
import Footer from 'src/components/Footer';
import Loading from './Loading';

import './style.scss';

const App = ({
  closeMenu,
  loading,
  fetchMovies,
}) => {
  const node = useRef();
  useOnClickOutside(node, () => closeMenu());

  useEffect(fetchMovies, []);

  // scroll up when changing page
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  // Go back button
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:slug" exact>
          <Movie />
        </Route>
      </Switch>
      <button type="button" className="button-go-back" onClick={handleClick}>Go back</button>
      <div ref={node}>
        <Burger />
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

export default App;
