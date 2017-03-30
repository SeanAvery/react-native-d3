import React, { Component } from 'react';

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
  }

  createPieGraph() {
    const arcs = d3.shape.pie()
  }

  render() {
    return (
      <View width={200} height={200}>
        <Surface>
          <Group x={100} y={100}>
            <Wedge />
          </Group>
        </Surface>
      </View>
    );
  }
}
