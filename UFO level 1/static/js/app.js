//* Create a basic HTML web page or use the [index.html](StarterCode/index.html) 
//file provided (we recommend building your own custom page!).
//* Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//* Make sure you have a column for `date/time`, `city`, `state`, 
//`country`, `shape`, and `comment` at the very least.
//* Use a date form in your HTML document and write JavaScript code that will listen 
//for events and search through the `date/time` column to find rows that match user input.
// 1. receive user input and store in variable

var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// 1. receive user input and store in variable
getDate = function(){
  var sightingDate = document.getElementById("datetime").value;
  console.log(sightingDate);
//2. create empty array to store rows in
  sightingOnDate = [];
//3. loop through table to gather all rows in table with date string and put them in array
  //for all indices of table,
  data.forEach((data) => {
    Object.entries(data).forEach(([key,value]) => {
      if (datetime.value === sightingDate) {
        sightingOnDate.push(Object);
        console.log(sightingOnDate);
      }
      else {
        console.log("There were no UFO sightings on that date.")
      }
    })
  })
};
