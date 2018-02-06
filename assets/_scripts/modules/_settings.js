/**
* @file _settings - global utilities JavaScript
*/

var siteObj = siteObj ? siteObj : {};
(function() {
	siteObj._settings = {
		_Html: document.querySelector('html'),
		_Body: document.querySelector('body'),
		_Page: document.querySelector('#page'),
		_Header: document.querySelector('#header'),
		_Main: document.querySelector('#main'),
		_Footer: document.querySelector('#footer'),
		// breakpoint variables (should match css variables)
		breakPointA: 320,
		breakPointB: 480,
		breakPointC: 600,
		breakPointD: 768,
		breakPointE: 1024,
		breakPointF: 1400,
		breakPointG: 1600
	};
}());
