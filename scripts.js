/**
* @file _utils - global utilities JavaScript
*/
var _utils = (function() {
    var self = {};
    self._body = document.body;
    return self;
}());


/**
* @file menu.js - menu related JavaScript
*/
var menu = (function() {
    var self = {};
    const _MenuOpenAction = document.querySelector(".navigation__menu-open-action");
    const _MenuCloseAction = document.querySelector(".navigation__menu-close-action");
    const _MenuTarget = document.querySelector(".navigation__menu-target");
    const menuInClass = "navigation--menu-in";

    self.openHandler = function() {
        _MenuTarget.classList.add(menuInClass);
    };

    self.closeHandler = function() {
        _MenuTarget.classList.remove(menuInClass);
    };

    self.bindEvents = function () {
        _MenuOpenAction.addEventListener('click', self.openHandler);
        _MenuCloseAction.addEventListener('click', self.closeHandler);
    };

    self.init = function () {
        self.bindEvents();
    };

    return self;
}());

/**
* @file _init - initiate JS modules on page ready JavaScript
*/
function ready() {
  if (document.readyState != 'loading'){
    // Add init functions here to page ready
    menu.init();
  } else {
    document.addEventListener('DOMContentLoaded', ready);
  }
}

ready();