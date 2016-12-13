import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlayerList extends Component {
  constructor(props) {
    super(props);
  }

  renderStats(playerStats) {

    // List of stat properties we want to show;
    // If any is found in JSON but not in this array, it'll be ignored;
    const statsToDisplay = ['goals', 'goal_assist', 'appearances'];
    //const statsElements = ['goals', 'appearances', 'fwd_pass', 'backward_pass', 'mins_played'];
    const el = { 'goals': 'Goals', 'goal_assist': 'Assists', 'appearances': 'Appearances'};

    if(statsToDisplay.indexOf(playerStats.name) > -1) {
      return (<div className="stats-group__item" key={playerStats.name}>{el[playerStats.name]}
        <span className="stats-group__item-data">{playerStats.value}</span></div>);
    } else {
      return null;
    }
        
  }

  // Function to return new object where JSON stats name/value are key/value pairs
  // This will enable quick access to data and calculations with template strings
  // e.g. getStatsObject(4916) player id ===> {goals: 5, losses: 20, wins: 48, draws: 23...... } all 9 stats per player id
  // Rendering correct value is basically accessing above e.g. goals / appearances and rendering via template strings
  
  /*
  getStatsObject(id) {
    var obj = {};
    
    // for now data is equal to JSON object...
    for(var plrs = 0; plrs < data.players.lenght; plrs++) {
      if(data.players[plrs].player.id === id) {\

        for(var i = 0; i < data.players[plrs].stats.length; i++) {
          obj[data.players[plrs].stats[i].name] = data.players[plrs].stats[i].value;
        }
        return obj;
      }
    }
  
  }
  */

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
          <div>{this.props.stats.map(this.renderStats)}
          </div>
          <div className="stats-group__item">Goals per match<span className="stats-group__item-data">TBC</span></div>
          <div className="stats-group__item">Passes per minute<span className="stats-group__item-data">TBC</span></div>
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