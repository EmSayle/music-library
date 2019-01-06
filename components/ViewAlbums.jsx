import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import './styles/ViewArtists.css';
import Albums from './Albums';

class ViewAlbums extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/albums')
      .then((res) => {
        this.setState({
          albums: res.data,
        });
      });
  }

  handleChangeToSongs = () => {
    const path = '/songs';
    this.props.history.push(path);
  };

  render() {
    return (
      <div>
        <h1 className="title">Albums</h1>
        <section>
          {this.state.albums.map((album) => {
            return (
              <Albums
                key={album._id}
                artist={album.artist.name}
                name={album.name}
                year={album.year}
                click={this.handleChangeToSongs}
              />
            );
          })}
        </section>

      </div>
    );
  }
}
export default ViewAlbums;
