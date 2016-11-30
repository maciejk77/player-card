import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayers, getPlayer } from '../actions/index';

class SearchList extends Component {
  constructor(props) {
    super(props);

    // Set default player as blank
    this.state = { currentPlayer: '' };

    // Get list of players
    this.props.getPlayers();

    // Get data for current player
    this.props.getPlayer(this.state.currentPlayer);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Set new player then load data for that player
    this.setState({ currentPlayer: event.target.value });
    this.props.getPlayer(event.target.value);
  }

  renderPlayers(player) {
    return (<option key={player.player.name.last} value={player.player.name.last}>{player.player.name.last}</option>);
  }

  render() {

    // First time the component renders the JSON data won't be loaded yet so we need to return null
    if (!this.props.players) {
      return null;
    }

    return (
      <select className="card__select" value={this.state.currentPlayer} onChange={this.handleChange}>
      <option value="">Select a player...</option>
        {this.props.players.map(this.renderPlayers)}
      </select>
    )
  }  
}

function mapStateToProps(state) {
  return { 
    players: state.players.players
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlayers, getPlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);