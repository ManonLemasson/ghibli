import React from 'react';

import Menu from 'src/containers/Menu';
import Home from 'src/components/Home';

import './style.scss';

const App = () => (
  <div className="app">
    <Menu />
    <Home />
  </div>
);

export default App;
