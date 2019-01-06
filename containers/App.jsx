import React from 'react';
import NavBar from '../components/NavBar';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import ViewArtists from './ViewArtists';
import AddArtists from './AddArtists';
import Albums from './Albums';
import Songs from './Songs';


const App = () => {
  return (
    <React.Fragment>

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/viewartists" component={ViewArtists} />
        <Route exact path="/addartists" component={AddArtists} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/songs" component={Songs} />
      </Switch>

    </React.Fragment>
  );
};

/* <ArtistDetails
        name={props.artists.name}
        genre={props.artists.genre}
      /> */

export default App;
