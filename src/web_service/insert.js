var jsDate = new Date();
var year = jsDate.getFullYear();
var month = jsDate.getMonth() + 1;
var date = jsDate.getDate();
var datePublished = year + '-' + month + '-' + date + ' ';

var insertDocuments = function(db, data, callback) {
  // Get the documents collection
  var collection = db.collection('test_listings');
  var record = new Object();
    record.title = data.title;
    record.path = data.path;
    record.tags = data.tags;
    record.date = datePublished;
    record.dateText = data.dateText;
  // Insert some documents
  collection.insertMany(record, function(err, result) {
    callback(result);
  });
}

var MongoClient = require('mongodb').MongoClient
, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/blog_2';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    var data = {
        title: "title A",
        path: "test.html",
        tags: ["tag_a", "tag_b"],
        dateText: "2nd Feb 2017"
    };

    insertDocuments(db, data, function() {
        db.close();
    });
});