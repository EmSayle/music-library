import React from 'react';
import PropTypes from 'prop-types';

const ArtistsDetails = (props) => (
  <h1
    className="artists"
  >{props.name} >>>> {props.genre}
    <button className="AlbumButton" onClick={props.click}>Albums</button>
  </h1>
);

ArtistsDetails.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default ArtistsDetails;
