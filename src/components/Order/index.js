import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Order = ({ orderValue, changeOrderValue }) => (
  <form className="orderForm">
    <select name="order" className="order" value={orderValue} onChange={(event) => changeOrderValue(event.target.value)}>
      <option value="">Order by</option>
      <option value="date">Release date</option>
      <option value="name">Name</option>
      <option value="score">Score</option>
      <option value="time">Running time</option>
    </select>
  </form>
);

Order.propTypes = {
  orderValue: PropTypes.string.isRequired,
  changeOrderValue: PropTypes.func.isRequired,
};

export default Order;
