var data = [{
  values: [16, 15, 12, 6, 5, 4, 42],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  textinfo: 'percent',
  textposition: 'outside',
  domain: {
    x: [0, 0.45]
  },
  name: 'GHG Emissions',
  hoverinfo: 'label+percent+name',
  hole: .75,
  type: 'pie'
},{
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  textinfo: 'percent',
  textposition: 'outside',
  domain: {x: [0.55, 1]},
  name: 'CO2 Emissions',
  hoverinfo: 'label+percent+name',
  hole: .75,
  type: 'pie'
}];

var layout = {
  title: 'Global Emissions 1990-2011',
  annotations: [
    {
      font: {
        size: 18
      },
      showarrow: false,
      text: 'GHG',
      x: 0.20,
      y: 'auto'
    },
    {
      font: {
        size: 18
      },
      showarrow: false,
      text: 'CO2',
      x: '0.80',
      y: 'auto'
    }
  ],
  height: 500,
  width: 1125,
  legend:
    {
      orientation : 'h'
    }
};

Plotly.newPlot('myDiv', data, layout,{displayModeBar: false});
