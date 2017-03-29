import React, { Component } from 'react';

import {
  ART,
  View
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
    console.log('weather_data', weather_data.daily.data);
    const size = 200;
    console.log('createLineGraph', createLineGraph);
    // const data = createLineGraph({
    //   data: weather_data.daily.data,
    //   width: size,
    //   height: size,
    //   xAccessor: d => new Date(d.time * 1000),
    //   yAccessor: d => d.temperatureMax
    // });

    return (
      <View>
        <Surface width={200} height={200}>
          <Group x={0} y={0}>
            <Shape
              d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>
      </View>
    )
  }
}
