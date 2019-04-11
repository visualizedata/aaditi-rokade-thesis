// Load CSV
d3.csv("./data/thesis_data.csv").then(function(data) {
//   console.log(data[0]);
//   console.log('hello----------------');
//   console.log(data[0].month + data[0].year );
  
});

// Load JSON
d3.json('./data/thesis_data.json').then((data) => {
    // console.log(data[0]);
    // console.log(data[0].month + data[0].year );
})


var svg = d3.select(".col-7").append('svg').attr('width', '100%').attr('height','120%')

var rect = svg.append('rect').attr("x", '0%').attr('y', '0%')
              .attr('width', '100%' ).attr('height','100%')
              .style('fill','#ffffff'). style('opacity', 0.05)