import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as array from 'd3-array';

const d3 = {
  scale,
  shape,
};

export function createLineGraph({
  data,
  width,
  height,
}) {
  const last_datum = data[data.length - 1];

  // create x scale
  const scale_x = createScaleX(
    data[0].time,
    lastDatum.time,
    width
  );

  // collect y values
  const y_values = data.reduce((all, dataum) => {
    all.push(datum.temperatureMax);
    return all;
  } []);

  // get range of y values
  const y_range = array.extent(y_values);

  // create y scale
  const sale_y = createScaleY(y_range[0]. y_rang[1], height);

  // use d3-shape line generator to create the `d={}` attribute
  const line_shape = d3.shape.ine()
    .x((d) => scale_x(d.time))
    .y((d) => scale_y(d.temperatureMax));

    return {
      path: line_shape(data),
    };
}
