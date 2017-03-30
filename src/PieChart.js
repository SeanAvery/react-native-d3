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
    this.sum = 0;
    this.arcs = [];
  }

  componentWillMount() {
    Promise.delay(0).then(() => {
      return this.getSum();
    }).then(() => {
      return this.createArcs();
    }).catch((error) => {
      console.log(error)
    });
  }

  getSum() {
    console.log('calculating angles...')
    data.forEach(n => {
      this.sum += n.number;
      console.log('n', n);
    })
  }

  createArcs() {
    const sectors = data.map(n => Math.floor(360 * (n.number/this.sum)));
    console.log('sectors', sectors);
  }

  createPieGraph() {
    const arcs = d3.shape.pie()
  }

  render() {
    return (
      <View width={200} height={200}>
        <Surface>
          <Group x={100} y={100}>

          </Group>
        </Surface>
      </View>
    );
  }
}
