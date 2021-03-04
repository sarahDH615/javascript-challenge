// getting data source from data.js
var tableData = data;
//-----------------------------------------------------------------------------------------------------------
// initial filling in of dropdown menus
// function to return unique values
function returnUnique(value, index, self) {
    return self.indexOf(value) === index;
};

// function to do appends to dropdown menus
function choiceFill(dataset, class_selector, id_label) {
    var append_loc = d3.select(`.${class_selector}`);
    // get rid of any pre-existing table
    append_loc.text('');
    dataset.forEach(function(row) {
        // *** also adding a event listener on each individual datapoint, so it will trigger click event ***
        append_loc.append('a').attr('class', `dropdown-item ${id_label}`).attr('href', '#').text(`${row}`).on('click', clickReact);
    });
}

// initial/reset dropdowns
// function to fill dropdowns
function baseFill() {
// arrays to apply filters to
    var date_unique_values = tableData.map(tableData => tableData.datetime).filter(returnUnique);
    var city_unique_values = tableData.map(tableData => tableData.city).filter(returnUnique);
    var state_unique_values = tableData.map(tableData => tableData.state).filter(returnUnique);
    var country_unique_values = tableData.map(tableData => tableData.country).filter(returnUnique);
    var shape_unique_values = tableData.map(tableData => tableData.shape).filter(returnUnique);

    // calling the function on each dropdown column's data
    choiceFill(date_unique_values, 'dt_menu', 'datetime');
    choiceFill(city_unique_values, 'city_menu', 'city');
    choiceFill(state_unique_values, 'state_menu', 'state');
    choiceFill(country_unique_values, 'country_menu', 'country');
    choiceFill(shape_unique_values, 'shape_menu', 'shape');
};
// calling the function to do the initial fill
baseFill();
//-----------------------------------------------------------------------------------------------------------
// click event function
// array to hold first filter applied
var new_data = [];
// dict to hold records of filters applied
filter_obj = {};
// defining funct to apply filters, return a table, and update dropdowns
function clickReact() {
    // prevent page reload
    d3.event.preventDefault();

    // remove any existing table rows
    d3.select('tbody').text('');

    // define user input
    // chosen value
    var this_text = d3.select(this).text();
    // type of restriction it belongs to, 
        // (ignoring the first class, which relates to it being a dropdown item)
    var this_class = d3.select(this).attr('class').split(' ')[1];

    // append to obj
    filter_obj[this_class] = this_text;
    
    // table creation
    // if this is the first filter being put on
        // filter the original object (tableData)
    if(Object.keys(filter_obj).length == 1) {
        new_data = tableData.filter(incident => incident[this_class] == filter_obj[this_class]);
        // create a new table row for each returned incident
        new_data.forEach((incident) => {
            var tr = d3.select('tbody').append('tr');
            tr.append('td').text(incident.datetime);
            tr.append('td').text(incident.city);
            tr.append('td').text(incident.state);
            tr.append('td').text(incident.country);
            tr.append('td').text(incident.shape);
            tr.append('td').text(incident.durationMinutes);
            tr.append('td').text(incident.comments);
            });
        // update the available dropdown items
        // arrays of the available objects
        date_unique_values = new_data.map(new_data => new_data.datetime).filter(returnUnique);
        city_unique_values = new_data.map(new_data => new_data.city).filter(returnUnique);
        state_unique_values = new_data.map(new_data => new_data.state).filter(returnUnique);
        country_unique_values = new_data.map(new_data => new_data.country).filter(returnUnique);
        shape_unique_values = new_data.map(new_data => new_data.shape).filter(returnUnique);
        
        // fill in the new choices
        choiceFill(date_unique_values, 'dt_menu', 'datetime');
        choiceFill(city_unique_values, 'city_menu', 'city');
        choiceFill(state_unique_values, 'state_menu', 'state');
        choiceFill(country_unique_values, 'country_menu', 'country');
        choiceFill(shape_unique_values, 'shape_menu', 'shape');
    // if there is more than one filter, apply a filter on new_data and output a table
    } else if (Object.keys(filter_obj).length > 1) {
        var new_new_data = new_data.filter(incident => incident[this_class] == filter_obj[this_class]);
        new_new_data.forEach((incident) => {
            var tr = d3.select('tbody').append('tr');
            tr.append('td').text(incident.datetime);
            tr.append('td').text(incident.city);
            tr.append('td').text(incident.state);
            tr.append('td').text(incident.country);
            tr.append('td').text(incident.shape);
            tr.append('td').text(incident.durationMinutes);
            tr.append('td').text(incident.comments);
            });
        // update the available dropdown items
        // arrays of the available objects
        date_unique_values = new_new_data.map(new_new_data => new_new_data.datetime).filter(returnUnique);
        city_unique_values = new_new_data.map(new_new_data => new_new_data.city).filter(returnUnique);
        state_unique_values = new_new_data.map(new_new_data => new_new_data.state).filter(returnUnique);
        country_unique_values = new_new_data.map(new_new_data => new_new_data.country).filter(returnUnique);
        shape_unique_values = new_new_data.map(new_new_data => new_new_data.shape).filter(returnUnique);
        
        // fill in the new choices
        choiceFill(date_unique_values, 'dt_menu', 'datetime');
        choiceFill(city_unique_values, 'city_menu', 'city');
        choiceFill(state_unique_values, 'state_menu', 'state');
        choiceFill(country_unique_values, 'country_menu', 'country');
        choiceFill(shape_unique_values, 'shape_menu', 'shape');
    }
};
//-----------------------------------------------------------------------------------------------------------
// trigger reset
var reset_button = d3.select('.trigger-reset');

reset_button.on('click', function() {
    // prevent page reload
    d3.event.preventDefault();
    // clear out the table
    d3.select('tbody').text('');
    // empty the dictionary
    filter_obj = {};
    // re-set the dropdowns
    baseFill();
});