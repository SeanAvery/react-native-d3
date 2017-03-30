import React, { Component } from 'react';

import {
  ART,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import weather_data from './data/weather-data';

import { createLineGraph } from './line-chart-lib/utils';

const {
  Group,
  Shape,
  Surface
} = ART;

export default class LineChart extends Component {
  render() {
    const size = 200;
    const padding_size = 20;
    const tick_width = padding_size * 2;

    const yAccessor = d => d.temperatureMax;

    const data = createLineGraph({
      data: weather_data.daily.data,
      width: size,
      height: size,
      xAccessor: d => new Date(d.time * 1000),
      yAccessor: d => d.temperatureMax
    });

    const tick_x_format = data.scale.x.tickFormat(null, '%b %d');

    return (
      <View>
        <Surface width={200} height={200}>
          <Group x={0} y={0}>
            <Shape
              d={data.path}
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>

        <View key={'ticksX'}>
          {data.ticks.map((tick, index) => {
            const tickStyles = {};
            tickStyles.width = tick_width;
            tickStyles.left = tick.x - (tick_width / 2);

            return (
              <Text key={index} style={[styles.tickLabelX, tickStyles]}>
                {tick_x_format(new Date(tick.datum.time * 1000))}
              </Text>
            );
          })}
        </View>

        <View key={'ticksY'} style={styles.ticksYContainer}>
          {data.ticks.map((tick, index) => {
            const value = yAccessor(tick.datum);

            const tickStyles = {};
            tickStyles.width = tick_width;
            tickStyles.left = tick.x - Math.round(tick_width * 0.5);

            tickStyles.top = (tick.y + 2) - Math.round(tick_width * 0.65);

            return (
              <View key={index} style={[styles.tickLabelY, tickStyles]}>
                <Text style={styles.tickLabelYText}>
                  {value}
                </Text>
              </View>
            );
          })}
        </View>

        <View key={'ticksYDot' style={styles.ticksYContainer}}>
          {data.ticks.map((tick, index) => {
            <View
              key={index}
              style={[styles.ticksYDot, {
                left: tick.x,
                top: tick.y,
              }]}
            />
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  tickLabelX: {
    position: 'absolute',
    bottom: 0,
    fontSize: 12,
    textAlign: 'center'
  },
  tickLabelY: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  ticksYContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent'
  },
  ticksYDot: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: 'red',
    borderRadius: 100
  }
});
