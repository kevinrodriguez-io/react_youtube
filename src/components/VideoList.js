import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.videos.map(video => 
          <VideoItem
            key={video.snippet.title}
            video={video}
            onVideoSelect={this.props.onVideoSelect}
          />
        )}
      </div>
    );
  }
}

export default VideoList;