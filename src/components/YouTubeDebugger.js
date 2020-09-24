import React, { Component } from 'react'

export class YouTubeDebugger extends Component {

  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video:{
          resolution: '1080p'
        }
      }
    }
  }

  setBitrate = e => {
    this.setState( previousState => {
      return {
        settings: Object.assign({}, previousState.settings, {bitrate: 12})
      }
    })
  }

  setResolution = e => {
    this.setState( previousState => {
      return {
        settings: Object.assign({}, previousState.settings, {
          video: Object.assign({},previousState.settings.video, {
            resolution: '720p'
          })
        })
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.setBitrate}>Current bitrate: {this.state.settings.bitrate}</button>
    <button className="resolution" onClick={this.setResolution}>Current resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
