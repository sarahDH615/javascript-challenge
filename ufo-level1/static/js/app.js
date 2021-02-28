// from data.js
var tableData = data;

// defining the input field
var form_box = d3.select('#datetime');

// defining the button
var button = d3.select('#filter-btn')

// defining the form
var form = d3.select('form')

// var tr = d3.select('tbody').append('tr');

// tr.append('td').text()
function fillTable() {
    // prevent page reload
    d3.event.preventDefault();
    console.log(form_box.node().value);
}
// event listeners
    // for keyup in the input box
form.on('submit', fillTable);
    // for click of button
button.on('click', fillTable);
