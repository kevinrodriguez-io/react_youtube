import React, { Component } from 'react'
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

export default class App extends Component {

  state = { isSearching: false, videos: [] };

  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(term) {
    try {
      const result = await youtube.get('/search', {
        params: {
          q: term
        }
      });
      this.setState({
        videos: result.data.items
      });
      console.log({result});
    } catch (videoFetchError) {
      console.error({videoFetchError});
    } finally {

    }
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
          isSearching={this.state.isSearching}
        />
        I have {this.state.videos.length } videos
      </div>
    );
  }
}
