/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import LineChart from './src/LineChart';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class react_native_d3 extends Component {
  render() {
    console.log('checking console')
    console.log('LineChart', LineChart)
    return (
      <View>
        <LineChart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react_native_d3', () => react_native_d3);
