import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  renderPlayer(playerData) {
    return (
      <tr key={playerData.player.name.last}>
        <td>{playerData.player.name.first}</td>
        <td>{playerData.player.name.last}</td>
        <td>{playerData.player.age}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Player</th>
            <th>Club</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.props.player.map(this.renderPlayer)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { player: state.player };
}

export default connect(mapStateToProps)(PlayerList);