import React, { Component } from 'react';

import SearchList from '../containers/search_list';
import PlayerList from '../containers/player_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchList />
        <PlayerList />
      </div>
    )
  }
}
