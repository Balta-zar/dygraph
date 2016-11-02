// Darken a color
function darkenColor(colorStr) {
    // Defined in dygraph-utils.js
    var color = Dygraph.toRGB_(colorStr);
    color.r = Math.floor((255 + color.r) / 2);
    color.g = Math.floor((255 + color.g) / 2);
    color.b = Math.floor((255 + color.b) / 2);
    return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
}

// This function draws bars for a single series. See
// multiColumnBarPlotter below for a plotter which can draw multi-series
// bar charts.
function barChartPlotter(e) {
    var ctx = e.drawingContext;
    var points = e.points;
    var y_bottom = e.dygraph.toDomYCoord(0);

    // ctx.fillStyle = darkenColor(e.color);
    ctx.fillStyle = "green";

    // Find the minimum separation between x-values.
    // This determines the bar width.
    var min_sep = Infinity;
    for (var i = 1; i < points.length; i++) {
        var sep = points[i].canvasx - points[i - 1].canvasx;
        if (sep < min_sep) min_sep = sep;
    }
    var chartWidth = $('#demodiv').width();
    //var bar_width = Math.floor(2.0 / 3 * min_sep);
    var bar_width = chartWidth / 200;

    // Do the actual plotting.
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      var center_x = p.canvasx;

      ctx.fillRect(center_x - bar_width / 2, p.canvasy,
          bar_width, y_bottom - p.canvasy);

      ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
          bar_width, y_bottom - p.canvasy);
    }
  }
  
//var data = "2012/07/21,0\n" +
//		   "2012/07/22,3\n" +
//		   "2012/07/23,3\n" +
//		   "2012/07/24,0\n" +
//		   "2012/07/25,3\n";
           
var data = "21,1\n" +
		   //"22,0\n" +
		   //"23,1\n" +
		   //"24,0\n" +
		   //"25,1\n" +
           "250,1\n" +
           "473,1\n" +
           "520,1\n" +
           "574,1\n";           

g = new Dygraph(
      document.getElementById("demodiv"),
      data,
      //"Date,Widgets Sold\n" +
      //data,
      {
          labels: ['fsdakjlnm,.fsdaaxz', 'Refocused at:'],
          interactionModel: {},
          legend: 'follow',
          title: 'Title',
          includeZero: true,
          //dateWindow: [ Date.parse("2012/07/20"), Date.parse("2012/07/26") ],
          dateWindow: [0, 601],
          drawXGrid: false,
          plotter: barChartPlotter,
          valueRange:[0, 1.2],
          axes: {
                y: {
                    axisLabelFontSize: 0
                    //valueFormatter: labelFormatter,
                    //axisLabelFormatter: labelFormatter
                }
            }
      }
);