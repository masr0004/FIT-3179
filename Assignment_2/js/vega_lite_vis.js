function embed(sel, specPath) {
  vegaEmbed(sel, specPath, { actions: false })
    .catch(err => {
      console.error('Embed failed for', specPath, err);
      const el = document.querySelector(sel);
      el.style.whiteSpace = 'pre-wrap';
      el.textContent = 'Embed failed:\n' + (err && err.message ? err.message : String(err));
    });
}

embed('#vis-waffle', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/waffle_chart.json');
embed('#vis-lollipop', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/lollipop_chart.json');
embed('#vis-line', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/line_chart.json');
embed('#vis-line2', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/line_chart_2.json');
embed('#vis-area', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/area_chart.json');
embed('#vis-grouped', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/grouped_bar_chart.json');
embed('#vis-map', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/map.json');
embed('#vis-smallmultiples', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/small_multiples_graph.json');
embed('#vis-heatmap', 'https://raw.githubusercontent.com/masr0004/FIT-3179/refs/heads/main/Assignment_2/js/heatmap.json');
