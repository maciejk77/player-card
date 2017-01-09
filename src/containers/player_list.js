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

  getData(key, defaultValue = '') {
    const data = this.getStats(this.props.stats);
    return data[key] || defaultValue;
  }

  // Return new mapping for stats collection, where key value pairs are {name: value}
  getStats(playerStats) {
    // the original stats object(s) passed Object {name:"goals", value:65}, {name: "losses", value:49}, ...
    //console.log(playerStats); 
    ([playerStats]).reduce((previousValue, currentValue) => {
      previousValue[currentValue.name] = currentValue.value;
      //console.log(previousValue); // how object is remapped to name: value key/value pair Object {goals: 65}
      return previousValue
    }, {})
  }

  render() {

    // First time the component renders the JSON data won't be loaded yet so we need to return null
    if (!this.props.player) {
      return null;
    }

    let clubName;
    const playerImage = `public/assets/p${this.props.player.id}.png`;
    const position = this.props.player.info.positionInfo.split(' ').pop();
    const el = (this.props.player.currentTeam.name.toLowerCase().split(' '));

    if(el.length > 1) { clubName = `${el[0]}-${el[1]}`; } else { clubName = `${el[0]}`; }

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