/*=====================================================
*
*	_basic : Basic JS library
*	Andy Blackledge 2015
*   Created : June 2015
*
======================================================*/


window._basic = (function () {
    function _Basic (els) {
        for (var i = 0; i < els.length; i++) {
            this[i] = els[i];
        }
        this.length = els.length;
    }

    _Basic.prototype.map = function (callback) {
        var results = [];
        for (var i = 0; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results;
    };

    _Basic.prototype.forEach = function (callback) {
        this.map(callback);
        return this;
    };

    _Basic.prototype.addClass = function (classes) {
        var className = '';
        if (typeof classes !== 'string') {
            for (var i = 0; i < classes.length; i++) {
                className += ' ' + classes[i];
            }
        } else {
            className = ' ' + classes;
        }
        return this.forEach(function (el) {
            el.className += className;
        });
    };

    _Basic.prototype.removeClass = function (clazz) {
        return this.forEach(function (el) {
            var cs = el.className.split(' '), i;

            while ( (i = cs.indexOf(clazz)) > -1) {
                cs = cs.slice(0, i).concat(cs.slice(++i));
            }
            el.className = cs.join(' ');
        });
    };

    _Basic.prototype.hasClass = function (el, clazz) {
        if (el.classList) {
            return el.classList.contains(clazz);
        } else {
            return new RegExp('(^| )' + clazz + '( |$)', 'gi').test(el.clazz);
        }
    };

    _Basic.prototype.on = (function () {
        if (document.addEventListener) {
            return function (evt, fn) {
                return this.forEach(function (el) {
                    el.addEventListener(evt, fn, false);
                });
            };
        } else if (document.attachEvent)  {
            return function (evt, fn) {
                return this.forEach(function (el) {
                    el.attachEvent("on" + evt, fn);
                });
            };
        } else {
            return function (evt, fn) {
                return this.forEach(function (el) {
                    el["on" + evt] = fn;
                });
            };
        }
    }());

    _Basic.prototype.ready = function (fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    };

    var _basic = {
        get: function (selector) {
            var els;

            if (typeof selector === 'string') {
                els = document.querySelectorAll(selector);
            } else if (selector.length) {
                els = selector;
            } else {
                els = [selector];
            }

            return new _Basic(els);
        },

        extend: function ( defaults, options ) {
            var extended = {};
            var prop;
            for (prop in defaults) {
                if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                    extended[prop] = defaults[prop];
                }
            }
            for (prop in options) {
                if (Object.prototype.hasOwnProperty.call(options, prop)) {
                    extended[prop] = options[prop];
                }
            }
            return extended;
        }
    };

    return _basic;
}());
