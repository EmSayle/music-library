import React from 'react';
import PropTypes from 'prop-types';

const Songs = (props) => (
  <h1
    className="artists"
  >{props.name} >>>>
    {props.artist}
  </h1>);

Songs.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Songs;
