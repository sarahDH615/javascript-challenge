## javascript-challenge

![UFO Level 2 Loop](/images/ufo2Loop.gif)

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

The purpose of this project was to create two HTML pages, one with filters on the date only (ufo-level1), the other providing multiple filters (ufo-level2), to display UFO sighting information based on user input. Described below are the steps taken to create each page.

#### ufo-level1

- create a HTML base page
    - using Bootstrap styling classes, create a page that is responsive, containing:
        - a form for entering the desired date with a button to submit the form, and a button to reset the table
        - an empty table to be populated with the results of the filtered data
        - links to the JavaScript data and app files
        - a navigation bar containing an image and a page title
        - a banner image with text
- create a JavaScript file that fills in the empty table on the HTML page
    - create event listeners on: 1) clicking the 'filter' button within the form, 2) hitting enter within the input field
    - create an event listener on clicking the 'reset' button within the form
    - create a function to populate the table that:
        - prevents page reload
        - filters the data.js file to only return incidents that match the chosen date
        - creates a new row for every relevant incident returned from the data.js file
        - appends each item within a row of data as a table datum (td) on the index.html page
- create a CSS file that does additonal styling on the index.html page, including adding a background image to the banner

#### ufo-level2

- create a HTML base page
    - using Bootstrap styling classes, create a page that is responsive, containing:
        - two navigation bars:
            - one containing an image and a page title
            - the other containing dropdown menus for the filters (date, city, state, country, shape), to be populated using JavaScript; and a 'reset' button
        - an empty table to be populated with the results of the filtered data
        - links to the JavaScript data and app files
- create a JavaScript file that fills in the empty table on the HTML page
    - create an event listener on clicking the 'reset' button within the form, with a function attached that:
        - prevents page reload
        - empties the records of previous clicks (filter_obj)
        - empties the table results
        - resets the dropdown menus
    - populate the dropdown menus and create event listeners on each individual item
        - create a function (returnUnique) that returns unique values from any column of data
        - create a function (choiceFill) that removes any existing text in the dropdowns, and adds new values, each with an event listener for if that value is clicked upon
        - create a function (baseFill) that calls returnUnique and choiceFill on the columns of data in the dropdowns (date, city, state, country, shape)
        - call baseFill()
    - populate the table:
        - create a function that:
            - prevents page reload
            - identifies the item clicked on
            - creates a record of the past clicks since the table has been reset (filter_obj)
            - filters the data based on the item clicked on, and any previous clicks stored in filter_obj
            - updates the dropdown menus to the values left after filtration
- create a CSS file that does additonal styling on the index.html page, including adding a background image to the body of the page

### challenges

The most challenging aspect of this project was creating the responsive dropdowns on ufo-level2 app.js. The main struggle within this task was grasping the concept of JavaScript filling in items on a HTML page. After understanding that the JavaScript file was able to access content on index.html, and return content to it, the next challenge was actually populating the dropdowns. Using a function that returned unique values, and one that appended values, the dropdowns could be populated.

Relatedly, another issue was considering how to deal with multiple filters placed one after the other. Storing the choices in a JavaScript object enabled tracking the history of choices the user made, so one layer of filtering could be applied after another. There were two potential solutions to dealing with clashing filters: displaying 'no results found' and inviting the user to reset the filters and try again; or progressively limiting the items in the dropdown menus as each filter was set. The second option was chosen, as it provided the user with more information as to what they could choose, rather than simply telling them they made a bad choice. 

<p align="center">
  <img width="800" height="90" alt='Initial Filter' src="/images/initialFilter.png">
</p>
<p><em>Procedure if only one filter is applied.</em></p>

<p align="center">
  <img width="800" height="90" alt='Additional Filters' src="/images/addtlFilters.png">
</p>
<p><em>Procedure if multiple filters are in place.</em></p>

Another difficult aspect was deciding where to put event listeners in ufo-level2's app.js. If the event listener was assigned to the containing element (each dropdown menu), it would not capture the individual choice. Meanwhile, assigning each dropdown item separately would be impractical, due to the volume of items, except for within the eventual solution implemented, which was to assign an event listener when the item was being created. 

<p align="center">
  <img width="800" height="90" alt='Individual Event Listeners' src="/images/indivEventListeners.png">
</p>