// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

//Use d3 to update each cell's text with UFO Sighting data
tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
       });
    
  });

// grab references to the button element 
var button =d3.select("#filter-btn");

button.on("click", function() {
    //Clear the table
    tbody.html("");

    // grab the value of the input fields
    var mydateTime = d3.select("#datetime").property("value");
    var myCountry = d3.select("#country").property("value");
    var myState = d3.select("#state").property("value");
    var myCity = d3.select("#city").property("value");
    var myShape = d3.select("#shape").property("value");

  
    // print the input string
    console.log(myCity);

    // Create a custom filtering function to match  with input date
    // function filterData(x) {
    //     return x.datetime === mydateTime && x.city === myCity && x.state===myState && x.country === myCountry && x.shape ===myShape;
    //   }
      
    var filteredData =tableData;
    if (mydateTime) {
        filteredData = filteredData.filter(x => x.datetime === mydateTime);
    }
    if (myCountry) {
        filteredData = filteredData.filter(x => x.country === myCountry);
    }
    if (myState) {
        filteredData = filteredData.filter(x => x.state === myState);
    }
    if (myCity) {
        filteredData = filteredData.filter(x => x.city === myCity);
    }
    if (myShape) {
        filteredData = filteredData.filter(x => x.shape === myShape);
    }
    // filter() uses the custom function as its argument
    // var filteredData = tableData.filter(filterData);
    // console.log(filteredData)

    
    //Make table with filtered data
    filteredData.forEach(function(ufo) {
        console.log(ufo);
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
           });
        
      });
  
  });
  