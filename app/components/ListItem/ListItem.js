import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ListItem = (props) => (
  <div className="list-item-wrapper">
    <li className="list-item">{props.item}</li>
  </div>
);

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;
