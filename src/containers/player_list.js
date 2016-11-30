import React, { Component } from 'react';
import { connect } from 'react-redux';

// PROBLEMS
// Problem was to override .stats.name keys to e.g. goals => Goals - capitalization, goals_assists => Assists
// That means that keys not always match labels rendered to the screen, Regex does not help here as key names are unpredictable e.g. fwd_pass
// The second idea was to create el object which will store keys and proper labels for them, again could not get it to render correctly, tried template strings and various other manipulations
// I have logic for Goals per match and Passes per minute, but cannot get it to work on the dynamic list I am bulding with renderStats
// Lastly 3 lines with stats displaying with original keys from JSON are rendered in the order of JSON not the array, not matching card design, was considering adding index/position number to el array and some method to check and append n-th child <div className="card__stats-group">

// ACHIEVED 
// Dynamic rendering of keys and values from stats in JSON - more robust, scalable in case any changes in JSON
// Resolved 'Mertesacker' problem where there are no stats on 'goals_appearances' and that does not throw an error
// Iteration over stats portion of JSON with simple check with array which stats are needed to display
// 'Select a player...' option available

// I cannot get it to parse correctly on the app
// const goalsPerMatch = (parseInt(playerStats.stats.goals) / parseInt(playerStats.stats.appearances)).toFixed(2);
// const passesPerMinute = ((parseInt(playerStats.stats.fwd_pass) + parseInt(playerStats.stats.backward_pass)) / parseInt(playerStats.stats.mins_played)).toFixed(2);

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

  // Other possible
  //  CSS class which capitalize first letter
  //  p:first-letter {
  //    text-transform:capitalize;
  //  }

  // capitalize() method on String prototype
  // String.prototype.capitalize = function() {
  //  return this.charAt(0).toUpperCase() + this.slice(1);
  // } 

  renderStats(playerStats) {

    // List of stat properties we want to show;
    // If any is found in JSON but not in this array, it'll be ignored;
    const statsToDisplay = ['goals', 'goal_assist', 'appearances'];

    // Or shall I use an object matching display keys with values which are keys for JSON ?
    // const el = { 'goals': 'Goals', 'goal_assist': 'Assists', 'appearances': 'Appearances'};

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