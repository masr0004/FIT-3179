function embed(sel, specPath) {
  vegaEmbed(sel, specPath, { actions: false })
    .catch(err => {
      console.error('Embed failed for', specPath, err);
      const el = document.querySelector(sel);
      el.style.whiteSpace = 'pre-wrap';
      el.textContent = 'Embed failed:\n' + (err && err.message ? err.message : String(err));
    });
}

// IMPORTANT: paths are relative to index.html
embed('#vis-waffle', 'js/waffle_chart.json');      // your waffle spec
embed('#vis-lollipop', 'js/lollipop_chart.json');  // your lollipop spec
embed('#vis-line', 'js/line_chart.json');          // your side-by-side GDP lines
embed('#vis-line2',      'js/line_chart_2.json');
embed('#vis-area', 'js/area_chart.json');          // monthly CPI-food index with year slider
embed('#vis-grouped', 'js/grouped_bar_chart.json'); // grouped bar chart for employment by gender
embed('#vis-map', 'js/map.json');
embed('#vis-smallmultiples', 'js/small_multiples_graph.json');  
embed('#vis-heatmap',    'js/heatmap.json');