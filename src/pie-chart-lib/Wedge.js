import React, { Component } from 'react';
import {
  ART,
  View,
} from 'react-native';
const {
  Shape,
  Path,
} = ART;

export default class Wedge extends Component {
  constructor(props) {
    super(props);
  }

  createCirclePath(outerRadius, innerRadius) {

  }

  createArcPath(originX, originY, startAngle, endAngle, outerRadius, innerRadius) {

  }

  render() {
    let path;
    const startAngle = this.props.startAngle;
    const endAngle = this.props.endAngle;
    console.log('startAngle', startAngle)
    return (
      <Shape {...this.props} d={path} />
    )
  }
}
