/**
* @file example - test related JavaScript
*/
var example = (function() {
    var globalObject = {};

    function privateFunction () {
        console.log('example js');
    }

    globalObject.exampleString = 'a string';

    globalObject.init = function () {
        privateFunction();
    };

    return globalObject;
}());

