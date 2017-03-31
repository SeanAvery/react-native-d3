import React, { Component } from 'react';
import Promise from 'bluebird';

import {
  ART,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { data } from './data/pie-data';

const {
  Group,
  Shape,
  Surface,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as array from 'd3-array';

const d3 = {
  scale,
  shape,
  array,
};

import { Wedge } from './pie-chart-lib/Wedge'

export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arcs: []
    }
    this.sum = 0;
    this.sectors =[];
    this.arcs = [];
    this.startAngle = 0;
  }

  componentWillMount() {
    Promise.delay(0).then(() => {
      return this.getSum();
    }).then(() => {
      return this.getSectors();
    }).then(() => {
      return this.getArcs();
    }).then(() => {
      console.log('Arc caclulations complete');
    }).catch((error) => {
      console.log(error)
    });
  }

  getSum() {
    data.forEach(n => {
      this.sum += n.number;
      console.log('n', n);
    })
  }

  getSectors() {
    this.sectors = data.map(n => Math.floor(360 * (n.number/this.sum)));
  }

  getArcs() {
    Promise.delay(0)
    .then(() => {
      return this.sectors;
    }).map((sector, i) => {
      this.calculateArc(sector, i);
    }).then(() => {
      this.setState({arcs: this.arcs});
    })
  }

  calculateArc(sector, i) {
    let endAngle = this.startAngle + sector;
    if (endAngle > 360) { endAngle = 360 };
    console.log('i', i, 'startAngle', this.startAngle, 'endAngle', endAngle);
    var temp = this.startAngle;
    this.arcs.push({ temp, endAngle });
    this.startAngle = endAngle;
  }

  createPieGraph() {

    const arcs = d3.shape.pie()
  }

  wedges() {
    return this.state.arcs.map((arc, i) => {
      return (
        <Wedge
          key={i}
        />
      )
    })
  }

  render() {
    console.log('this.wedges()', this.wedges)
    return (
      <View width={200} height={200}>
        <Surface>
          <Group x={100} y={100}>
            {this.wedges}
          </Group>
        </Surface>
      </View>
    );
  }
}
