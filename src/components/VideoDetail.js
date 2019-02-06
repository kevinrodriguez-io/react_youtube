import React, { Component } from "react";

class VideoDetail extends Component {
  render() {
    return this.props.video ? (
      <div>
        <div className="ui embed">
          <iframe
            title={this.props.video.snippet.title} 
            src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default VideoDetail;
