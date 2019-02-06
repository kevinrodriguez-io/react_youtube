import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
export default class App extends Component {
  state = { isSearching: false, videos: [], selectedVideo: null };

  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  componentDidMount() {
    this.onSearchSubmit('React Programming');
  }

  async onSearchSubmit(term) {
    try {
      const result = await youtube.get("/search", {
        params: {
          q: term
        }
      });
      this.setState({
        videos: result.data.items,
        selectedVideo: result.data.items[0]
      });
      console.log({ result });
    } catch (videoFetchError) {
      console.error({ videoFetchError });
    } finally {
    }
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
          isSearching={this.state.isSearching}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
