//   const goalsPerMatch = (parseInt(playerData.stats[0].value) / parseInt(playerData.stats[6].value)).toFixed(2);
//   const passesPerMinute = ((parseInt(playerData.stats[4].value) + parseInt(playerData.stats[8].value)) / parseInt(playerData.stats[7].value)).toFixed(2);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  constructor(props) {
    super(props);
  }

  renderStats(playerStats) {

    // List of stat properties we want to show;
    // If any is found in JSON but not in this array, it'll be ignored;
    const statsToDisplay = ['goals', 'losses', 'wins', 'appearances', 'minutes_played'];

    if (statsToDisplay.indexOf(playerStats.name) > -1) {
      return (<div key={playerStats.name}>{playerStats.name}: {playerStats.value}</div>);
    } else {
      return null;
    }
    
  }

  render() {

    // First time the component renders the JSON data won't be loaded yet so we need to return null
    if (!this.props.player) {
      return null;
    }

    const playerImage = `public/assets/p${this.props.player.id}.png`;
    const position = this.props.player.info.positionInfo.split(' ').pop();

    const el = (this.props.player.currentTeam.name.toLowerCase().split(' '));
    const clubName = `${el[0]}-${el[1]}`;

    return (
      <div>
        <div><img src={playerImage}></img></div>
        <div className={clubName}></div>
        <div>{this.props.player.name.first} {this.props.player.name.last}</div>
        <div>{position}</div>
        {this.props.stats.map(this.renderStats)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    player: state.player.player,
    stats: state.player.stats
  };
}

export default connect(mapStateToProps)(PlayerList);