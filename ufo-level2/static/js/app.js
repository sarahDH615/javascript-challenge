// from data.js
var tableData = data;


//---------------------------------------------------------------
// filters
// function to return unique values
function returnUnique(value, index, self) {
    return self.indexOf(value) === index;
};

// arrays to apply filters to
var date_array = tableData.map(tableData => tableData.datetime);
var date_unique_values = date_array.filter(returnUnique);
var city_array = tableData.map(tableData => tableData.city);
var city_unique_values = city_array.filter(returnUnique);
var state_array = tableData.map(tableData => tableData.state);
var state_unique_values = state_array.filter(returnUnique);
var country_array = tableData.map(tableData => tableData.country);
var country_unique_values = country_array.filter(returnUnique);
var shape_array = tableData.map(tableData => tableData.shape);
var shape_unique_values = shape_array.filter(returnUnique);

//---------------------------------------------------------------
// definition of variables
// defining the input field
var form_box = d3.select('#datetime');

// defining the button
var button = d3.select('#filter-btn')

// defining the form
var form = d3.select('form')
//---------------------------------------------------------------
// defining funct to match input date with data dates
function fillTable() {
    // prevent page reload
    d3.event.preventDefault();
    // define user input
    var chosenDate = form_box.node().value;
    
    // filter data to match input date
    var filteredEvents = tableData.filter(incident => incident.datetime == chosenDate);
    // for each row of filtered data, 
        // append new row
        // append each piece of data to a new table datum
    filteredEvents.forEach((incident) => {
        var tr = d3.select('tbody').append('tr');
        tr.append('td').text(incident.datetime);
        tr.append('td').text(incident.city);
        tr.append('td').text(incident.state);
        tr.append('td').text(incident.country);
        tr.append('td').text(incident.shape);
        tr.append('td').text(incident.durationMinutes);
        tr.append('td').text(incident.comments);
        });
}
//---------------------------------------------------------------
// event listeners
    // for keyup in the input box
form.on('submit', fillTable);
    // for click of button
button.on('click', fillTable);
