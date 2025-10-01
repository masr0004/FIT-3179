// This file loads the Vega-Lite spec
var spec = "https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/34092544_HW9/js/malaysia.vg.json";

vegaEmbed('#vis', spec).then(function(result) {
  console.log("Chart rendered successfully");
}).catch(console.error);

