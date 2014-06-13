var width = 300,
    height = 300,
    radius = Math.min(width, height) / 2;

var color = ["#f68b1f", "#39b54a", "#2772b2"];

var pie = d3.layout.pie()
    .value(function(d) { return d.taskforce1; })
    .sort(null);

var arc = d3.svg.arc()
    .innerRadius(radius - 85)
    .outerRadius(radius);

var svg = d3.select("#pieplate").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.csv("data.csv", type, function(error, data) {
  var path = svg.datum(data).selectAll("path")
      .data(pie)
    .enter().append("path")
      .attr("fill", function(d, i) { return color[i]; })
      .attr("d", arc)
      .each(function(d) { this._current = d; }); // store the initial angles


  var text = svg.selectAll("text")
                        .data(pie)
                        .enter()
                        .append("text")
                        .text( function (d) { return d.value + "%"; })
                        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                        .attr("dy", ".35em")
                        .attr("text-anchor", "middle")
                        .attr("font-family", "sans-serif")
                        .attr("font-size", "26px")
                        .attr("font-weight", "bold")
                        .attr("fill", "white");

  d3.selectAll("a")
      .on("click", mixitup);

  function mixitup() {
    var value = this.id;
    var j = value + 1;
    pie.value(function(d) { return d[value]; }); // change the value function
    path = path.data(pie); // compute the new angles
    path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
    text = svg.selectAll("text").data(pie).transition().duration(750).attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")" });
    textLabels = svg.selectAll("text").data(data).text( function (d) { return d[value] + "%"; });
  }
});

function type(d) {
  d.taskforce1 = +d.taskforce1;
  d.taskforce2 = +d.taskforce2;
  d.taskforce3 = +d.taskforce3;
  return d;
}

// Store the displayed angles in _current.
// Then, interpolate from _current to the new angles.
// During the transition, _current is updated in-place by d3.interpolate.
function arcTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
}

