import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as array from 'd3-array';

const d3 = {
  scale,
  shape,
  array,
};

export function createLineGraph({
  data,
  xAccessor,
  yAccessor,
  width,
  height,
}) {
  const lastDatum = data[data.length-1];

  // create scale of x axis
  const scaleX = d3.scale.scaleTime()
    .domain([new Date(data[0].time * 1000), new Date(lastDatum.time * 1000)])
    .range([0, width]);

  // collect all y values
  const allYValues = data.reduce((all, datum) => {
    all.push(yAccessor(datum));
    return all;
  }, []);

  // get the min and max y values
  const extentY = d3.array.extent(allYValues);
  const scaleY = d3.scale.scaleLinear()
    .domain([extentY[0], extentY[1]]).nice()
    .range([height, 0]);

  // create line
  const lineShape = d3.shape.line()
    .x(d => scaleX(xAccessor(d)))
    .y(d => scaleY(yAccessor(d)));

  return {
    path: lineShape(data),
    ticks: data.map((datum) => {
      const time = xAccessor(datum);
      const value = yAccessor(datum);

      return {
        x: scaleX(time),
        y: scaleY(value),
        datum,
      };
    }),
    scale: {
      x: scaleX,
      y: scaleY,
    }
  };
}
