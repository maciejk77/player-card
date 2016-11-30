//   const goalsPerMatch = (parseInt(playerData.stats[0].value) / parseInt(playerData.stats[6].value)).toFixed(2);
//   const passesPerMinute = ((parseInt(playerData.stats[4].value) + parseInt(playerData.stats[8].value)) / parseInt(playerData.stats[7].value)).toFixed(2);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  constructor(props) {
    super(props);
  }

  // // To capitalise first letter in keys/values returned from JSON
  // Array.prototype.insert = function (index, item) {
  //   this.splice(index, 0, item);
  // };

  // function toProper(word) {
  //   var arr = word.split('');
  //   var firstLetter = arr.shift().toUpperCase();
  //   arr.insert(0, firstLetter);
  //   return arr.join('');
  // }

  renderStats(playerStats) {

    // List of stat properties we want to show;
    // If any is found in JSON but not in this array, it'll be ignored;
    const statsToDisplay = ['goals', 'losses', 'wins', 'appearances', 'minutes_played'];

    if (statsToDisplay.indexOf(playerStats.name) > -1) {
      return (<div key={playerStats.name}>{playerStats.name} <span className="stats-group__item-data">{playerStats.value}</span></div>);
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
    if(el.length > 1) { var clubName = `${el[0]}-${el[1]}`; } else { var clubName = `${el[0]}`;}

    return (
      <div>
        <div className="card__player-image"><img src={playerImage}></img></div>
        <div className="card__club-badge"><div className={clubName}></div></div>
        <div className="card__info">
          <div className="card__info">{this.props.player.name.first} {this.props.player.name.last}</div>
          <div className="card__info">({position}</div>
        </div>
        <div className="card__stats-group">
          <div className="stats-group__item">{this.props.stats.map(this.renderStats)}</div>
        </div>
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