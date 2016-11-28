import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayer } from '../actions/index';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Alderweireld' };

    // Try first below instead and second as the first option in the list to get 'Select a player...'
    //this.state = { value: '' };
    //<option value="Alderweireld" defaultValue>Select a player...</option>

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    
    this.props.getPlayer(this.state.value);
    
    return (
      <div><i className="arrow"></i>
      <select className="card__select arrow" value={this.state.value} onChange={this.handleChange}>
        <option value="Alderweireld">Toby Alderweireld</option>
        <option value="Mahrez">Riyad Mahrez</option>
        <option value="Mertesacker">Per Mertesacker</option>
        <option value="Rooney">Wayne Rooney</option>
        <option value="Touré">Yaya Touré</option>
      </select>
     </div>
    )
  }  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchList);
