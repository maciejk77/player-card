import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {

  renderPlayer(playerData) {
    
    const playerImage = `public/assets/p${playerData.player.id}.png`;
    //const clubBadge = 'public/assets/css/badges.css';


    return (
      <div key={playerData.player.name.last}>
        <div>{playerData.player.name.first} {playerData.player.name.last}</div>
        <div>{playerData.player.info.positionInfo}</div>
        <div>Appearances: {playerData.stats[6].value}</div>
        <div>Goals: {playerData.stats[0].value}</div>
        <div>Assists: {playerData.stats[5].value}</div>
        <div>Goals per match: {playerData.stats[0].value} / {playerData.stats[6].value}</div>
        <div>Passes per minute: {playerData.stats[4].value} + {playerData.stats[8].value} / {playerData.stats[7].value}</div>
        <div><img src={playerImage}></img></div>
        <div><img src="../legia.jpg" widdth="150px" height="150px"></img></div>
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