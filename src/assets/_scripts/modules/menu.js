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

