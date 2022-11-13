import React from 'react';

export default class MP3 extends React.Component {
  autoPlay;
  autoReplay;
  link;
  constructor(props) {
    super(props);
    this.autoPlay = props.autoPlay;
    this.autoReplay = props.autoReplay;
    this.link = props.link;
  }
  render() {
    return <audio src={this.link} autoPlay={this.autoPlay} loop={this.autoReplay}></audio>;
  }
}
