import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Search = ({ searchValue, changeSearchValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <input
        type="text"
        className="searchForm-input"
        placeholder="Search a movie"
        name="s"
        onChange={(event) => changeSearchValue(event.target.value)}
        value={searchValue}
      />
      <button type="submit" className="searchForm-button">Search</button>
    </form>
  );
};

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  changeSearchValue: PropTypes.func.isRequired,
};

export default Search;
