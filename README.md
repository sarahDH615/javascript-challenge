## javascript-challenge

### contains
- ufo-level1
    - static: contains styling and Javascript elements for the level 1 HTML page
        - css: contains CSS file for styling the level 1 HTML page
            - style.css
        - images: contains images used in the level 1 HTML page
            - spaceship.png
            - earth.jpg
        - js: contains JavaSript files holding the data and the responsive JavaScript elements
            - app.js
            - data.js
    - index.html: contains the HTML page for displaying the user-filtered data
- ufo-level2
    - static: contains styling and Javascript elements for the level 2 HTML page
        - css: contains CSS file for styling the level 2 HTML page
            - style.css
        - images: contains images used in the level 2 HTML page
            - spaceship.png
            - earth.jpg
        - js: contains JavaSript files holding the data and the responsive JavaScript elements
            - app.js
            - data.js
    - index.html: contains the HTML page for displaying the user-filtered data

### description

The purpose of this project was to create two HTML pages, one with filters on the date only (ufo-level1), the other providing multiple filters (ufo-level2), to display UFO sighting information based on user input. 

#### ufo-level1

- create a HTML base page
    - using Bootstrap styling classes, create a page containing:
        - a form for entering the desired date with a button to submit the form
        - an empty table to be populated with the results of the filtered data
        - links to the JavaScript data and app files
- create a JavaScript file that fills in the empty table on the HTML page
    - create event listeners on: 1) clicking the button within the form, 2) hitting enter within the input field
    - create an event listener on clicking the 'reset' button within the form
    - create a function to populate the table that:
        - prevents page reload
        - filters the data.js file to only return incidents that match the chosen date
        - creates a new row for every relevant incident returned from the data.js file
        - appends each item within a row of data as a table datum (td) on the index.html page
#### ufo-level2