/**
* @file _utils - global utilities JavaScript
*/
var _utils = (function() {
    var globalObject = {};

    globalObject._body = document.body;

    globalObject.randomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return globalObject;
}());