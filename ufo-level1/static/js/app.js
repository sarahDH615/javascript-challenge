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
