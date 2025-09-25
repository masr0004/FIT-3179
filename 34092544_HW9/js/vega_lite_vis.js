// This file loads the Vega-Lite spec
var spec = "/js/malaysia.vg.json";

vegaEmbed('#vis', spec).then(function(result) {
  console.log("Chart rendered successfully");
}).catch(console.error);
