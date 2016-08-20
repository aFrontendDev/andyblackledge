// functions for data retreive and saving

// Get and return data from couchDB view - used as a webservice
module.exports = {
    getData: function (response) {
        //var db = require('monk')('mongodb://52.41.28.64/:27017/blog');
        var db = require('monk')('localhost:27017/blog');
        var blog = db.get('blog');

        blog.find({}, function (err, docs){
            //console.log(docs);
            response.setHeader('Content-Type', 'application/json');
            response.writeHead(200, {
                'content-type': 'application/json'
            });
            response.end(JSON.stringify(docs));
        });
    },

    saveData: function (request) {
        console.log('request.query.title');
        console.log(request.query.title);
        console.log('request.body.title');
        console.log(request.body.title);
        // var db = require('monk')('localhost:27017/blog');
        // var blog = db.get('blog');
        
        // blog.insert(data);
        db.close();
    }
};
