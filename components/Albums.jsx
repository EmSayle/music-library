import React from 'react';
import PropTypes from 'prop-types';

const Albums = (props) => (
  <h1
    className="artists"
  >{props.name}, {props.year} >>>> {props.artist}
    <button className="songsButton" onClick={props.click}>Songs</button>
  </h1>


);

Albums.propTypes = {
  // artist: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Albums;
