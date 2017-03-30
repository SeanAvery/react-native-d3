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


export default class PieChart extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}
