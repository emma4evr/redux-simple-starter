import React, { Component } from 'react';

// every class must have a render function
 // it's recommended that you start out with a functional based component and
  // only refactor to a class when you need some added functionality

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // the only time you will ever set the state (this.state =) is within the constructor:
    this.state = {term: ''};
  }

  render() {
    // always manipulate/update the state using this.SetState()
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSerachTermChange(term);
  }
}

export default SearchBar;