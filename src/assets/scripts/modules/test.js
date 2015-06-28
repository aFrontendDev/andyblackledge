var site = site ? site : {};
(function ($) {
	site = $.extend(site, {
		thisFunction: {
            init: function () {
                console.log('page ready');
            },
            second: function () {
                console.log('page loaded');
            }
        }
	});
    PubSub.subscribe('pageReady', function () {
		site.thisFunction.init();
	});
    PubSub.subscribe('pageLoaded', function () {
		site.thisFunction.second();
	});
}(_basic));
