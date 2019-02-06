import './VideoItem.css';
import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    return (
      <div onClick={() => { this.props.onVideoSelect(this.props.video); }} className="video-item item">
        <img className="ui image" alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">
            {this.props.video.snippet.title}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;