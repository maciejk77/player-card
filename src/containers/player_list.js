import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {

  renderPlayer(playerData) {
    
    const playerImage = `public/assets/p${playerData.player.id}.png`;
    const position = playerData.player.info.positionInfo.split(' ').pop();

    const el = (playerData.player.currentTeam.name.toLowerCase().split(' '));
    const clubName = `${el[0]}-${el[1]}`;

    const goalsPerMatch = (parseInt(playerData.stats[0].value) / parseInt(playerData.stats[6].value)).toFixed(2);
    const passesPerMinute = ((parseInt(playerData.stats[4].value) + parseInt(playerData.stats[8].value)) / parseInt(playerData.stats[7].value)).toFixed(2);

    return (
      <div key={playerData.player.name.last}>
        <div className="card__player-image"><img src={playerImage}></img></div>
        <div className="card__club-badge"><div className={clubName}></div></div> 
        <div className="card__info">
          <div className="info">{playerData.player.name.first} {playerData.player.name.last}</div>
          <div className="info">{position}</div>
        </div>
        <div className="card__stats-group">  
          <div className="stats-group__item">Appearances<span className="stats-group__item-data">{playerData.stats[6].value}</span></div>
          <div className="stats-group__item">Goals<span className="stats-group__item-data">{playerData.stats[0].value}</span></div>
          <div className="stats-group__item">Assists<span className="stats-group__item-data">{playerData.stats[5].value}</span></div>
          <div className="stats-group__item">Goals per match<span className="stats-group__item-data">{goalsPerMatch}</span></div>
          <div className="stats-group__item">Passes per minute<span className="stats-group__item-data">{passesPerMinute}</span></div>
        </div>
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