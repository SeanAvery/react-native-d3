import React, { Component } from 'react';

import {
  ART,
} from 'react-native';

const {
  Group,
  Shape,
  Surface,
} = ART;

class LineChart extends Component {
  render() {
    return (
      <Surface width={200} heigh={100}>
        <Group>
          <Shape
            d={this.props.linePath}
            stroke="#000"
            strokeWidth={1}
          />
        </Group>
      </Surface>
    )
  }
}
