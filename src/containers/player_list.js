import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {

  renderPlayer(playerData) {
    
    const playerImage = `public/assets/p${playerData.player.id}.png`;
    
    const el = (playerData.player.currentTeam.name.toLowerCase().split(' '));
    const clubName = `${el[0]}-${el[1]}`;

    const goalsPerMatch = ( parseInt(playerData.stats[0].value) / parseInt(playerData.stats[6].value) ).toString().substr(0,4);
    const passesPerMinute = ( (parseInt(playerData.stats[4].value) + parseInt(playerData.stats[8].value)) / parseInt(playerData.stats[7].value) ).toString().substr(0,4);

    return (
      <div key={playerData.player.name.last}>
        <div>{playerData.player.name.first} {playerData.player.name.last}</div>
        <div>{playerData.player.info.positionInfo}</div>
        <div>Appearances: {playerData.stats[6].value}</div>
        <div>Goals: {playerData.stats[0].value}</div>
        <div>Assists: {playerData.stats[5].value}</div>
        <div>Goals per match: {goalsPerMatch}</div>
        <div>Passes per minute: {passesPerMinute}</div>
        <div><img src={playerImage}></img></div>
        <div className={clubName}></div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.player.map(this.renderPlayer)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { player: state.player };
}

export default connect(mapStateToProps)(PlayerList);