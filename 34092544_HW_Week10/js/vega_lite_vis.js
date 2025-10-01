// First chart: Choropleth map
var mapSpec = "js/map.vg.json";   
vegaEmbed('#mapVis', mapSpec).then(function(result) {
  console.log("Map chart rendered successfully");
}).catch(console.error);

// Second chart: Scatter plot
var scatterSpec = "js/scatter.vg.json";   
vegaEmbed('#scatterVis', scatterSpec).then(function(result) {
  console.log("Scatter chart rendered successfully");
}).catch(console.error);
