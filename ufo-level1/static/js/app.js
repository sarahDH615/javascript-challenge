// from data.js
var tableData = data;

//---------------------------------------------------------------
// definition of variables
// defining the input field
var input_box = d3.select('#datetime');

// defining the button
var button = d3.select('.form-button')

// defining the form
var form = d3.select('form')
//---------------------------------------------------------------
// defining funct to match input date with data dates
function fillTable() {
    // prevent page reload
    event.preventDefault();
    // define user input
    var chosenDate = input_box.node().value;
    // clear current table values
    d3.select('tbody').text('');
    // filter data to match input date
    var filteredEvents = tableData.filter(incident => incident.datetime == chosenDate);
    // for each row of filtered data, 
        // append new row
        // append each piece of data to a new table datum
    filteredEvents.forEach((incident) => {
        var tr = d3.select('tbody').append('tr');
        tr.append('td').text(incident.datetime).style('color', 'white');
        tr.append('td').text(incident.city).style('color', 'white');
        tr.append('td').text(incident.state).style('color', 'white');
        tr.append('td').text(incident.country).style('color', 'white');
        tr.append('td').text(incident.shape).style('color', 'white');
        tr.append('td').text(incident.durationMinutes).style('color', 'white');
        tr.append('td').text(incident.comments).style('color', 'white');
        });
}
//---------------------------------------------------------------
// event listeners
    // for pressing enter in the input box
form.on('submit', fillTable);
    // for click of button
button.on('click', fillTable);

// reset event listener
// reset button
// trigger reset
var reset_button = d3.select('.reset_button');
reset_button.on('click', function() {
    // prevent page reload
    event.preventDefault();
    // clear out the table
    d3.select('tbody').text('');
});
