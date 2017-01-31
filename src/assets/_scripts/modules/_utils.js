/**
* @file _utils - global utilities JavaScript
*/
var _utils = (function() {
    var self = {};

    self._body = document.body;

    self.randomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return self;
}());