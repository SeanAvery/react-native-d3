import React, { Component } from 'react';

import {
  ART,
  View
} from 'react-native';

const {
  Group,
  Shape,
  Surface
} = ART;

export default class LineChart extends Component {
  render() {
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
