import React from 'react';
import NavBar from '../components/NavBar';
import { Route, Switch } from 'react-router-dom';

import AddArtists from './AddArtists';
import Home from './HomePage';
import ViewArtists from './ViewArtists';
import ViewAlbums from './ViewAlbums';
import ViewSongs from './ViewSongs';


const App = () => {
  return (
    <React.Fragment>

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/viewartists" component={ViewArtists} />
        <Route exact path="/addartists" component={AddArtists} />
        <Route exact path="/albums" component={ViewAlbums} />
        <Route exact path="/songs" component={ViewSongs} />
      </Switch>

    </React.Fragment>
  );
};

/* <ArtistDetails
        name={props.artists.name}
        genre={props.artists.genre}
      /> */

export default App;
