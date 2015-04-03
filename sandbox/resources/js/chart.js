var data = [{"aspect":"Action-oriented","United States":40,"Middle East":35,"India":31,"Latin America":27,"Europe":24,"China":22,"Sub-Saharan":26},{"aspect":"Analytical","United States":27,"Middle East":32,"India":30,"Latin America":21,"Europe":38,"China":47,"Sub-Saharan":25.6},{"aspect":"Commercial","United States":45,"Middle East":50,"India":34,"Latin America":27,"Europe":41,"China":34,"Sub-Saharan":12.8},{"aspect":"Creative","United States":16,"Middle East":21,"India":33,"Latin America":33,"Europe":27,"China":21,"Sub-Saharan":41.6},{"aspect":"Strategic","United States":24,"Middle East":9,"India":24,"Latin America":3,"Europe":29,"China":15,"Sub-Saharan":16.8},{"aspect":"Ambitious","United States":6,"Middle East":6,"India":12,"Latin America":6,"Europe":10,"China":6,"Sub-Saharan":9.6},{"aspect":"Authentic","United States":25,"Middle East":28,"India":29,"Latin America":26,"Europe":24,"China":31,"Sub-Saharan":40.8},{"aspect":"Emotionally resilient","United States":14,"Middle East":39,"India":24,"Latin America":20,"Europe":21,"China":21,"Sub-Saharan":7.2},{"aspect":"Engaging","United States":20,"Middle East":12,"India":21,"Latin America":15,"Europe":30,"China":15,"Sub-Saharan":10.4},{"aspect":"Forms bonds","United States":13,"Middle East":10,"India":16,"Latin America":11,"Europe":32,"China":11,"Sub-Saharan":6.4},{"aspect":"Collaborative","United States":3,"Middle East":7,"India":10,"Latin America":3,"Europe":10,"China":7,"Sub-Saharan":4.8},{"aspect":"Self-aware","United States":11,"Middle East":32,"India":14,"Latin America":15,"Europe":20,"China":28,"Sub-Saharan":7.2},{"aspect":"Growth-oriented","United States":35,"Middle East":43,"India":46,"Latin America":67,"Europe":20,"China":40,"Sub-Saharan":43.2},{"aspect":"Authoritative","United States":11,"Middle East":17,"India":17,"Latin America":11,"Europe":22,"China":19,"Sub-Saharan":8.8},{"aspect":"Team-developing","United States":35,"Middle East":31,"India":19,"Latin America":40,"Europe":30,"China":19,"Sub-Saharan":28},{"aspect":"Organized","United States":25,"Middle East":20,"India":18,"Latin America":67,"Europe":24,"China":34,"Sub-Saharan":17.6},{"aspect":"Inclusive","United States":3,"Middle East":6,"India":9,"Latin America":1,"Europe":3,"China":5,"Sub-Saharan":0.8},{"aspect":"Visionary","United States":28,"Middle East":16,"India":17,"Latin America":44,"Europe":19,"China":30,"Sub-Saharan":12},{"aspect":"Experienced","United States":14,"Middle East":15,"India":19,"Latin America":5,"Europe":20,"China":20,"Sub-Saharan":31.2},{"aspect":"Knowledgeable","United States":11,"Middle East":17,"India":21,"Latin America":4,"Europe":12,"China":11,"Sub-Saharan":9.6}];

var spacingBetweenBars = 5;
var leftoffset = 120;

var margin = {left: 0, bottom: 0, right: 0, top: 0},
    height = 3400 - margin.top - margin.bottom,
    width = window.innerWidth - margin.left - margin.right - leftoffset;

var color = d3.scale.ordinal()
    .range(["#f00404", "#2dbafc", "#2ea51a", "#fc6103", "#01594c", "#0031D2", "#a815f3"]);

var x = d3.scale.linear()
    .range([width*.95, 0]);

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
    .tickValues([0, 10, 20, 30, 40, 50, 60, 70])
    .tickSize(-height)
    .tickFormat(tickFormatter);

 var xAxisRepeat = d3.svg.axis()
    .scale(x)
    .orient("top")
    .tickValues([0, 10, 20, 30, 40, 50, 60, 70])
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
      .attr("transform", "translate(" + leftoffset + ",37)")
      .call(xAxis);

        // establish y axis
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + leftoffset + ",37)")
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
      .attr("transform", "translate(-1,0)");

        // add a rectangle of white space between each aspect group
  var whiteSpace = svg.selectAll('.aspectgroup').append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(-10,-50)")
      .append("rect")
      .style("fill", "white")
      .attr("width", width+10)
      .attr("height", 45);

      // adjust first bit of white space
  svg.select(".aspectgroup g rect").attr("height","30").attr("transform", "translate(0,15)");

        // add the subcategory text between aspect groups, on top of the white space
  svg.append("g")
      .attr("transform", "translate(" + leftoffset + ",0)")
      .call(yAxisText)
    .selectAll("text")
      .attr("y", "-68")
      .attr("x", "0")
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
  var categoryMotivation = svg.select('.aspectgroup:nth-child(15)')
          .attr("class", "aspectgroup categorygroup")
          .append("text")
          .attr("class", "category")
          .text("Motivation");
  var categorInterpersonal = svg.select('.aspectgroup:nth-child(18)')
          .attr("class", "aspectgroup categorygroup")
          .append("text")
          .attr("class", "category")
          .text("Interpersonal");
  var categorySelfawareness = svg.select('.aspectgroup:nth-child(13)')
          .attr("class", "aspectgroup categorygroup")
          .append("text")
          .attr("class", "category")
          .text("Self-Awareness");
  var categoryLeadership = svg.select('.aspectgroup:nth-child(8)')
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
      .attr("class","x axis")
      .call(xAxisRepeat)
      .selectAll("text")
      .attr("class","xAxisRepeat");

        // adjust text anchor for first and last labels
      svg.selectAll(".x.axis .tick:nth-child(1) text").style("text-anchor","start");
      svg.selectAll('.x.axis .tick:nth-child(8) text').style("text-anchor","end");

        // create space for x axis label
  svg.append("text")  
        .attr("x", 0 )
        .attr("y",  10 )
        .attr("transform", "translate(" + (leftoffset-10) + ",0)")
        .attr("class", "axislabel")
        .style("text-anchor", "end");

        // add text to x axis label
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

        // force line break for Sub-Saharan Africa bar
  svg.selectAll(".legend").filter(":nth-child(15)").select("text").append("tspan")
        .attr("x", "-10")
        .attr("dy", "1em")
        .text("Africa");

