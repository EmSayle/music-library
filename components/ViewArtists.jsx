import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ArtistDetails from './ArtistsDetails';

import './styles/ViewArtists.css';
import BottomNav from './BottomNav';

class ViewArtists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/artists')
      .then((res) => {
        this.setState({
          artists: res.data,
        });
      });
  }

  handleChangeToAlbum = () => {
    const path = '/albums';
    this.props.history.push(path);
  };

  render() {
    return (
      <div>
        <h1 className="title">Artists</h1>
        <section>
          <div>
            {/* <Link to="/albums">testing a link to albums here</Link> */}
            {/* <Link to="/songs">testing a link to songs here</Link> */}
          </div>
          {this.state.artists.map((artist) => {
            return (
              <ArtistDetails
                className="artists"
                key={artist._id}
                name={artist.name}
                genre={artist.genre}
                click={this.handleChangeToAlbum}
              />
            );
          })}
        </section>
          <BottomNav />

      </div>
    );
  }
}
export default ViewArtists;
