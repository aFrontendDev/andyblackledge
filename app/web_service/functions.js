// functions for data retreive and saving
var moment = require('moment');
moment().format();

// Get and return data from couchDB view - used as a webservice
module.exports = {
    getData: function (response) {
        //var db = require('monk')('mongodb://52.41.28.64/:27017/blog');
        var db = require('monk')('visitor:&*reAdtHeB10g!@localhost:27017/blog');
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
        var todayText = moment().format("MMMM Do YYYY");
        var todayYear = moment().format("YYYY");
        var todayMonth = moment().format("M");
        var todayDate = moment().format("D");
        var today = todayYear + '-' + todayMonth + '-' + todayDate;

        var data = new Object();
        data.date = today;
        data.dateText = todayText;
        data.title = request.body.title;
        data.body = request.body.body;
        var db = require('monk')('website:bl0gUsr!@localhost:27017/blog');
        var blog = db.get('blog');

        blog.insert(data);
        db.close();
    }
};
