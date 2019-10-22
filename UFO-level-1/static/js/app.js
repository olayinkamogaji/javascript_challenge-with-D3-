// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);
data.forEach((sight) => {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  var button = d3.select("#filter-btn");

button.on("click", function() {

var inputElement = d3.select("#datetime");
console.log(inputElement);


var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(data);

var filteredData = data.filter(dataItem => dataItem.datetime === inputValue);
console.log(filteredData);



function deltbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
 };
deltbody();

filteredData.forEach((sight) => {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

});