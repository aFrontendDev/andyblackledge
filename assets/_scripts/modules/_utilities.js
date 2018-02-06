/**
* @file _utils - global utilities JavaScript
*/

var siteObj = siteObj ? siteObj : {};
(function() {
	siteObj._utils = {
		randomNum: function (min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		},
		getUrlParams: function (parameter) {
			var queryString = window.location.search;

			if (queryString !== undefined) {
				queryString = window.location.search.replace('?', '');

				var params = {},
					queryStringArray = queryString.split('&');

				for (var index in queryStringArray) {
					var query = queryStringArray[index].split('=');

					params[decodeURIComponent(query[0])] = decodeURIComponent(query[1]);
				}

				if (parameter) {
					return params[parameter];
				} else {
					return params;
				}
			}
		},
		closestClass: function (el, className) {
			while (el) {
				if (el.classList.contains(className)) {
					break;
				}
				el = el.parentElement;
			}
			return el;
		}
	};
}());
