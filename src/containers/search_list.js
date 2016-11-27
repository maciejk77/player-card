import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayer } from '../actions/index';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Alderweireld' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    
    this.props.getPlayer(this.state.value);
    
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="Alderweireld">Alderweireld</option>
        <option value="Mahrez">Mahrez</option>
        <option value="Mertesacker">Mertesacker</option>
        <option value="Rooney">Rooney</option>
        <option value="Touré">Touré</option>
      </select>
    )
  }  
}

// TO BE DELETED - working search box
// class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { term: '' };

//     this.onInputChange = this.onInputChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }

//   onInputChange(event) {
//     this.setState({ term: event.target.value });
//   }

//   onFormSubmit(event) {
//     event.preventDefault();

//     // Get player data
//     this.props.getPlayer(this.state.term);
//     this.setState({ term: '' });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit} className="input-group" >
//         <input 
//           placeholder="Type in player last name"
//           className="form-control"
//           value={this.state.term}
//           onChange={this.onInputChange} />
//         <span className="input-group-btn">
//           <button type="submit" className="btn btn-secondary">Submit</button>
//         </span>
//       </form>
//     )
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchList);
