var chocolates =  [
        {
            "name": "United States",
            "price": 45,
            "rating": 3,
            "index": 1
        },
        {
            "name": "Middle East",
            "price": 43,
            "rating": 3,
            "index": 2
        },
        {
            "name": "India",
            "price": 28,
            "rating": 3,
            "index": 3
        },
        {
            "name": "Latin America",
            "price": 15,
            "rating": 3,
            "index": 4
        },
        {
            "name": "Sub-Saharan Africa",
            "price": 27,
            "rating": 3,
            "index": 5
        },
        {
            "name": "United States",
            "price": 23,
            "rating": 2,
            "index": 6
        },
        {
            "name": "Middle East",
            "price": 33,
            "rating": 2,
            "index": 7
        },
        {
            "name": "India",
            "price": 45,
            "rating": 2,
            "index": 8
        },
        {
            "name": "Latin America",
            "price": 37,
            "rating": 2,
            "index": 9
        },
        {
            "name": "Sub-Saharan Africa",
            "price": 19,
            "rating": 2,
            "index": 10
        }
    ];

var margins = {"left":40, "right":30, "top":30, "bottom":30};
var step = 0;
var width = 500;
var height = 500;
var colors = d3.scale.category10();

var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

var y = calculateYScale(chocolates, height);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + y.range()[0] + ")");

svg.append("g")
    .attr("class", "y axis");

svg.append("text")
    .attr("fill", "#414241")
    .attr("text-anchor", "end")
    .attr("x", width/2)
    .attr("y", height-35)
    .text("Rating");   

update(chocolates);

function calculateXScale(data, width){
     var x = d3.scale.linear()
            .domain([0, 55])
            .range([0, width - margins.left - margins.right]);
    
    return x;
}

function calculateYScale(data, width){
    var y = d3.scale.linear()
                .domain([0, d3.max(data, function(d) { return d.rating; })])
                .range([height - margins.top - margins.bottom, 0]);
    return y;
}

function update(data){
    
    var x = calculateXScale(data, width);
    var y = calculateYScale(data, height);

    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickPadding(2);
    var yAxis = d3.svg.axis().scale(y).orient("left").tickPadding(2);
    
    svg.selectAll("g.y.axis").transition().duration(500).call(yAxis);
    svg.selectAll("g.x.axis").transition().duration(500).call(xAxis);
    
    var chocolate = svg.selectAll("g.node").data(data, function(d) { return d.index; });
    
    var chocolateEnter = chocolate.enter().append("g").attr("class", "node")
       .attr('transform', function(d) {return "translate(" + x(d.price) + "," + (height+100) + ")"; });
    
    chocolateEnter.append("circle")
        .attr("r", 5)
        .attr("class","dot")
        .style("fill", function(d){ return colors(d.name); });

    
    
    chocolateEnter.on("mouseover", function(d) {
        d3.select(this).style("opacity", 1)
            .append("text")
            .style("text-anchor", "middle")
            .attr("dy", -10)
            .text(function(d) {
                return d.name;})
    }).on("mouseout", function(d) {
        d3.select(this).style("opacity", .7);
        d3.select(this).select("text").remove();
    })
    
    chocolate.transition().duration(500)
        .attr('transform', function(d) {return "translate(" + x(d.price) + "," + y(d.rating+step) + ")"; });
  
    
    var chocolateExit = chocolate.exit().remove();
    chocolateExit.selectAll('circle')
		.attr('r', 0);
}

// setInterval(function() {    
//     for(var chocolateIndex in chocolates) {
//        chocolates[chocolateIndex].rating = getRandomInt(0,5);    
//     }
    
//     chocolates.push()

//     update(chocolates);
    
// }, 2000);

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
    var chocolates =  [
        {
            "name": "United States",
            "price": 23,
            "rating": 3,
            "index": 1
        },
        {
            "name": "Middle East",
            "price": 15,
            "rating": 3,
            "index": 2
        },
        {
            "name": "India",
            "price": 23,
            "rating": 3,
            "index": 3
        },
        {
            "name": "Latin America",
            "price": 43,
            "rating": 3,
            "index": 4
        },
        {
            "name": "Sub-Saharan Africa",
            "price": 48,
            "rating": 3,
            "index": 5
        },
        {
            "name": "United States",
            "price": 10,
            "rating": 2,
            "index": 6
        },
        {
            "name": "Middle East",
            "price": 3,
            "rating": 2,
            "index": 7
        },
        {
            "name": "India",
            "price": 23,
            "rating": 2,
            "index": 8
        },
        {
            "name": "Latin America",
            "price": 45,
            "rating": 2,
            "index": 9
        },
        {
            "name": "Sub-Saharan Africa",
            "price": 39,
            "rating": 2,
            "index": 10
        }
    ];
    

    update(chocolates);
}