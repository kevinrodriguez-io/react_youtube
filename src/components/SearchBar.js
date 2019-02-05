import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = { term: '' };

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  onInputChanged(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="ui segment">
        <h1>Youtube search</h1>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className={`ui icon input ${this.props.isSearching ? 'loading' : ''}`}>
              <input
                type="text"
                placeholder="Try typing a search term and hit enter"
                value={this.state.term}
                onChange={this.onInputChanged}
              />
              <i onClick={this.onFormSubmit} className="inverted circular search link icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
