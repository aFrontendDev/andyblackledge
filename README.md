## React Static Site Builder ##
The purpose of this is to build out static html files using React files as the templates, after building you will have a dist folder with basic html files, javascript and css.

This is all done with Gulp and Metalsmith and the excellent metalsmith-react tool - https://github.com/yeojz/metalsmith-react-templates

How to run.
-------
 1. cd into the directory and in the command line run '**npm install**'
 2. Build the site by running the command '**gulp**'

A short explanation of the folders
-------
 - **_master-pages**: This is for the basic skeleton of the pages, there is one file for the index/listings page and the other is the base file for the actual site. This is the entry point for the page markup to go into and contains the `<head>` and initial `<body>` markup and little else.
 - **_layouts**: These files will provide the html that your components will sit in, the markup from the layout and your page components get injected into the master page. 
 - **_pages**: These are the actual pages you want to create, they are only meant to contain basic data, a ***page title***, the ***layout file*** you wish to use, any ***body and/or page classes*** that might need to be added and then most importantly the name of the ***jsonObject*** that the page should reference. *The json object will be in a json file in the _data folder, the object should be an array of component objects that will then be output onto the page.*
 - **_data**: This is for the json files that will contain the component data you are passing into the pages. You could create a json file for every page and import each json file to the layout jsx pages or have 1 or 2 large json files which contain all the page objects, this would become a little unreadable after a certain point though.
 - **_components**: The actual component templates you're building.
 - **assets**: The javascript modules, the scss files, images, temporary files, etc.

A little detail on how components are added to a page
-------
There are 2 methods for creating pages and adding components: 

1) The current setup is that a 'page' just passes through basic data and references the json object you've made. If you've made a new json file for this page then you'll need to 'import' that json file into the layout jsx file and it should be added to the 'dataArray'. The layout jsx file will then go through all the data in that array and look for the object name you've passed through in your page data, when it finds a match that json object then becomes the data for that page in the metalsmith rendering. There's then a simple map and switch in the jsx layout which will just loop through all objects in the data and the switch will filter for the component name, so if you have a 'promo' component you will have to add that to the switch statement and then when it matches it will add a promo to the page with that data. So this method just requires a new page to be made, a new json file and for the layout jsx file to be updated to include the new component (if you've made a new component) and to include the new json file.

2) There alternative would be to make a new 'layout' file each time you make a new page, you could then just import the components you want and the individual json file to the new 'layout' file and reference them in a more traditional way.

*Either way will work, and there are examples of both these methods in the repo.*