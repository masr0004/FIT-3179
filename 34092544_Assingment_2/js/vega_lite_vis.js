function embed(sel, specPath) {
  vegaEmbed(sel, specPath, { actions: false })
    .catch(err => {
      console.error('Embed failed for', specPath, err);
      const el = document.querySelector(sel);
      el.style.whiteSpace = 'pre-wrap';
      el.textContent = 'Embed failed:\n' + (err && err.message ? err.message : String(err));
    });
}


embed('#vis-waffle', 'js/waffle_chart.json');      
embed('#vis-lollipop', 'js/lollipop_chart.json');  
embed('#vis-line', 'js/line_chart.json');          
embed('#vis-line2',      'js/line_chart_2.json');
embed('#vis-area', 'js/area_chart.json');          
embed('#vis-grouped', 'js/grouped_bar_chart.json'); 
embed('#vis-map', 'js/map.json');
embed('#vis-smallmultiples', 'js/small_multiples_graph.json');  
embed('#vis-heatmap',    'js/heatmap.json');
embed('#vis-cpi',       'js/chart.json');