import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import './styles/ViewArtists.css';
import Songs from './Songs';

class ViewSongs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/songs')
      .then((res) => {
        this.setState({
          songs: res.data,
        });
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <h1 className="title">Songs</h1>
        <section>
          {this.state.songs.map((song) => {
            return (
              <Songs
                key={song._id}
                artist={song.album.name}
                name={song.name}
                year={song.year}
              />
            );
          })}
        </section>

      </div>
    );
  }
}
export default ViewSongs;
