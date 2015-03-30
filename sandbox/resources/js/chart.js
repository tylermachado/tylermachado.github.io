var spacingBetweenBars = 5;
var leftoffset = 100;

var margin = {left: 30, bottom: 0, right: 30, top: 0},
    height = 3400 - margin.top - margin.bottom,
    width = window.innerWidth - margin.left - margin.right - leftoffset;

var color = d3.scale.ordinal()
    .range(["#f00404", "#2dbafc", "#2ea51a", "#fc6103", "#01594c", "#012497", "#a815f3"]);

var x = d3.scale.linear()
    .range([width, 0]);

var y0 = d3.scale.ordinal()
    .rangeRoundBands([height, 0], .4);

var y1 = d3.scale.ordinal();

var tickFormatter = function(d) { 
  if (d == 0) {
    return d + "%"; 
  } else {
    return d;
  }
}

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top")
    // .style("text-anchor", "start")
    .tickValues([0, 10, 20, 30, 40, 50, 60])
    .tickSize(-height)
    .tickFormat(tickFormatter);

 var xAxisRepeat = d3.svg.axis()
    .scale(x)
    .orient("top")
    .tickValues([0, 10, 20, 30, 40, 50, 60])
    .tickSize(0)
    .tickFormat(tickFormatter);

var yAxis = d3.svg.axis()
    .scale(y0)
    .orient("right")
    .tickSize(0)
    .tickFormat('');

var yAxisText = d3.svg.axis()
    .scale(y0)
    .orient("right")
    .tickSize(0);

var svg = d3.select("#d3-container").append("svg")
    .attr("width", width + margin.right + margin.left + leftoffset)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", function(error, data) {
  var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "aspect"; });

  data.forEach(function(d) {
    d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
  });

  y0.domain(data.map(function(d) { return d.aspect; }).reverse());
  y1.domain(ageNames).rangeRoundBands([0, y0.rangeBand()]);
  x.domain([d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); }), 0]);

        // establish x axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + leftoffset + ",22)")
      .call(xAxis);

      svg.select(".x.axis .tick text").style("text-anchor","start");

        // establish y axis
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + leftoffset + ",22)")
      .call(yAxis);

        // append a group for each aspect of the data
  var aspect = svg.selectAll(".aspect")
      .data(data)
    .enter().append("g")
      .attr("class", "aspectgroup")
      .attr("transform", function(d) { return "translate(" + leftoffset + "," + y0(d.aspect) + ")"; });

        // append a bar for each country within each aspect group
  aspect.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("height", y1.rangeBand()-spacingBetweenBars)
      .attr("class","testclass")
      .attr("y", function(d) { return y1(d.name); })
      .attr("x", function(d) { return 1; })
      .attr("width", function(d) { return x(d.value); })
      .style("fill", function(d) { return color(d.name); })
      .attr("transform", "translate(0,0)");

        // add a rectangle of white space between each aspect group
  var whiteSpace = svg.selectAll('.aspectgroup').append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(-10,-50)")
      .append("rect")
      .style("fill", "white")
      .attr("width", width + margin.left + margin.right)
      .attr("height", 45);

        // add the subcategory text between aspect groups, on top of the white space
  svg.append("g")
      .attr("transform", "translate(" + leftoffset + ",0)")
      .call(yAxisText)
    .selectAll("text")
      .attr("y", "-68")
      .attr("x", "1")
      .attr("class","subcategory");

        // add text labels for each country along Y axis
  var legend = aspect.selectAll(".legend")
      .data(ageNames.slice())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 14 + ")"; })
    .append("text")
      .attr("x", -10)
      .attr("y", 5)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

        // add the six big categories
  var categoryThinking = svg.select('.aspectgroup:nth-child(3)')
          .append("text")
          .attr("class", "category")
          .text("Thinking");
  var categoryMotivation = svg.select('.aspectgroup:nth-child(8)')
          .attr("class", "aspectgroup categorygroup")
          .append("text")
          .attr("class", "category")
          .text("Motivation");
  var categorInterpersonal = svg.select('.aspectgroup:nth-child(11)')
          .attr("class", "aspectgroup categorygroup")
          .append("text")
          .attr("class", "category")
          .text("Interpersonal");
  var categorySelfawareness = svg.select('.aspectgroup:nth-child(14)')
          .attr("class", "aspectgroup categorygroup")
          .append("text")
          .attr("class", "category")
          .text("Self-Awareness");
  var categoryLeadership = svg.select('.aspectgroup:nth-child(16)')
          .attr("class", "aspectgroup categorygroup")
          .append("text")
          .attr("class", "category")
          .text("Leadership");
  var categoryOther = svg.select('.aspectgroup:nth-child(21)')
          .attr("class", "aspectgroup categorygroup")
          .append("text")
          .attr("class", "category")
          .text("Other");

          // position the big categories
  var categoryAll = svg.selectAll('.category')
          .attr("x", -10)
          .attr("y", -13)
          .style("text-anchor", "end");

          // add the extra X axes with big categories
  var extraAxisText = svg.selectAll('.categorygroup').append("g")
      .attr("transform", "translate(0,-30)")
      .call(xAxisRepeat)
      .selectAll("text")
      .attr("class","xAxisRepeat");

  svg.append("text")      // text label for the x axis
        .attr("x", 0 )
        .attr("y",  10 )
        .attr("transform", "translate(90,0)")
        .attr("class", "axislabel")
        .style("text-anchor", "end");

  svg.select(".axislabel")
        .append("tspan")
        .attr("x", "0")
        .attr("dy", "0")
        .text("Percentage of");

  svg.select(".axislabel")
        .append("tspan")
        .attr("x", "0")
        .attr("dy", "1em")
        .text("Executives With");

  svg.select(".axislabel")
        .append("tspan")
        .attr("x", "0")
        .attr("dy", "1em")
        .text("Strength in Area");


});