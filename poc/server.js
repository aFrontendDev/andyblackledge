const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// get an instance of router
const router = express.Router();

// serve static assets normally
router.use(express.static(__dirname + '/dist'))

router.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// apply the routes to our application
app.use('/', router);

app.listen(port);
console.log('Site available on port ' + port);