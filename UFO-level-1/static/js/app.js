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

    //grab the datetime element
    var text = d3.select("#datetime");

    // grab the value of the input fields
    var inputValue = text.property("value");
  
    // reverse the input string
    console.log(inputValue);

    // Create a custom filtering function to match  with input date
    function filterData(x) {
        return x.datetime === inputValue;
      }
      
    // filter() uses the custom function as its argument
    var filteredData = tableData.filter(filterData);
    console.log(filteredData)

    
    //Make table with only filtered data
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
  