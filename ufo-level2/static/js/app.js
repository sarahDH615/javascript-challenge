// from data.js
var tableData = data;


//---------------------------------------------------------------
// filters
// function to return unique values
function returnUnique(value, index, self) {
    return self.indexOf(value) === index;
};

// arrays to apply filters to
var date_unique_values = tableData.map(tableData => tableData.datetime).filter(returnUnique);
var city_unique_values = tableData.map(tableData => tableData.city).filter(returnUnique);
var state_unique_values = tableData.map(tableData => tableData.state).filter(returnUnique);
var country_unique_values = tableData.map(tableData => tableData.country).filter(returnUnique);
var shape_unique_values = tableData.map(tableData => tableData.shape).filter(returnUnique);

//---------------------------------------------------------------
// initial filling in of the dropdown menus
// function to do initial appends
function initialFill(dataset, class_selector, id_label) {
    var append_loc = d3.select(`.${class_selector}`);
    dataset.forEach(function(row) {
        append_loc.append('a').attr('class', `dropdown-item ${id_label}`).attr('href', '#').text(`${row}`).on('click', clickReact);
    });
}

initialFill(date_unique_values, 'dt_menu', 'dt');
initialFill(city_unique_values, 'city_menu', 'city');
initialFill(state_unique_values, 'state_menu', 'state');
initialFill(country_unique_values, 'country_menu', 'country');
initialFill(shape_unique_values, 'shape_menu', 'shape');



// definition of variables
// defining the dropdowns
//var dt_dropdown = d3.select('.dt_menu')
//---------------------------------------------------------------
filter_obj = {
    'dt': '',
    'city': '',
    'state': '',
    'country': '',
    'shape': ''
}
// defining funct to match input date with data dates
function clickReact() {
    // prevent page reload
    d3.event.preventDefault();
    // define user input
    // chosen value
    var this_text = d3.select(this).text();
    // type of restriction it belongs to
    var this_class = d3.select(this).attr('class').split(' ')[1];
    // console.log(this_text);
    // console.log(this_class);
    
    filter_obj[`${this_class}`] = `${this_text}`
    // filter data to match input date
    // var filteredEvents = tableData.filter(incident => incident.datetime == chosenDate);
    // for each row of filtered data, 
        // append new row
        // append each piece of data to a new table datum
    // filteredEvents.forEach((incident) => {
    //     var tr = d3.select('tbody').append('tr');
    //     tr.append('td').text(incident.datetime);
    //     tr.append('td').text(incident.city);
    //     tr.append('td').text(incident.state);
    //     tr.append('td').text(incident.country);
    //     tr.append('td').text(incident.shape);
    //     tr.append('td').text(incident.durationMinutes);
    //     tr.append('td').text(incident.comments);
    //     });
}
//---------------------------------------------------------------
// event listeners
    // for click on menu

