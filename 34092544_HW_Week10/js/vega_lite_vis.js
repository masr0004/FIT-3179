/// Choropleth Map
var mapSpec = "https://raw.githubusercontent.com/masr0004/FIT-3179/main/34092544_HW_Week10/js/malaysia_state_map.json";

vegaEmbed('#choropleth_map', mapSpec).then(function(result) {
  console.log("Map chart rendered successfully");
  var panel = document.querySelector('#map-controls');
  if (panel) {
    var container = result.view.container();
    var bindings = container && container.querySelector('.vega-bindings');
    if (bindings && !panel.contains(bindings)) panel.appendChild(bindings);
  }
}).catch(console.error);

// Dual Axis Plot
var scatterSpec = "https://raw.githubusercontent.com/masr0004/FIT-3179/main/34092544_HW_Week10/js/Dual_Axis_Bar_Line_Chart.json";

vegaEmbed('#dual_plot', scatterSpec).then(function(result) {
  console.log("Dual plot rendered successfully");
  var panel = document.querySelector('#dual-controls');
  if (panel) {
    var container = result.view.container();
    var bindings = container && container.querySelector('.vega-bindings');
    if (bindings && !panel.contains(bindings)) panel.appendChild(bindings);
  }
}).catch(console.error);
