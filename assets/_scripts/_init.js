/**
* @file _init - initiate JS modules on page ready JavaScript
*/
var siteObj = siteObj ? siteObj : {};

siteObj.pageReady = function(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', function(event) {
      callback(event);
    });
  }
}

siteObj.pageLoaded = function() {
  document.addEventListener('load', function(event) {
    siteObj._events.pageLoaded();
  });
}

siteObj.pageReady(function() {
  siteObj._events.pageReady();
});