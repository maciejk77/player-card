import React, { Component } from 'react';
import { connect } from 'react-redux';

// I cannot get it to parse correctly on the app
// const goalsPerMatch = (parseInt(playerStats.stats.goals) / parseInt(playerStats.stats.appearances)).toFixed(2);
// const passesPerMinute = ((parseInt(playerStats.stats.fwd_pass) + parseInt(playerStats.stats.backward_pass)) / parseInt(playerStats.stats.mins_played)).toFixed(2);

class PlayerList extends Component {
  constructor(props) {
    super(props);
  }

  renderStats(playerStats) {

    // List of stat properties we want to show;
    // If any is found in JSON but not in this array, it'll be ignored;
    const statsToDisplay = ['goals', 'goal_assist', 'appearances'];
    const el = { 'goals': 'Goals', 'goal_assist': 'Assists', 'appearances': 'Appearances'};

    if (statsToDisplay.indexOf(playerStats.name) > -1) {
      return (<div key={playerStats.name}>{el[playerStats.name]}
        <span className="stats-group__item-data">{playerStats.value}</span></div>);
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
    if(el.length > 1) { var clubName = `${el[0]}-${el[1]}`; } else { var clubName = `${el[0]}`; }

    return (
      <div>
        <div className="card__player-image"><img src={playerImage}></img></div>
        <div className="card__club-badge"><div className={clubName}></div></div>
        <div className="card__info">
          <div className="card__info">{this.props.player.name.first} {this.props.player.name.last}</div>
          <div className="card__info">{position}</div>
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