BB React App Boilerplate
===================
This boilerplate is the basic setup for a react app, built with npm and webpack, you can build out a dev version and a production version.

----------


How to build
-------------

1) **'npm install'**

2) **'npm run dev'** (this will build out the app, inc. styles and move images and plugins into the dist folder), you will then be able to visit localhost:8080 to see the site

To build the prod version just run:
**'npm run build'**

If you want to then test your prod app you can run a little node express server by:
**'node server'** or **'npm run serve'**
you will then be able to visit localhost:8080 to see the site


Visual Regression Testing
-------
We use backstopjs on this project for visual testing.
There is already a backstop_data folder which holds the reference images, the test images are excluded from git

To re-add the base images for testing against (shouldn't have to do this often/at all) run:
'**gulp backstop-ref**'

To run a test go to your commandline and type '**gulp backstop-test**'
This will run the tests against the reference images and when finished it will open up a browser window to show the results. If there are differences you can either fix the css and run again or if the changes are intended go back to your commandline and run '**backstop approve**' which will then overwrite the ref images with the updated test images.


React Unit Testing
-------
We use Jest and Enzme to run react unit tests

To run the test run:
'**npm test**'

To check the coverage of the tests run:
'**test:coverage**'