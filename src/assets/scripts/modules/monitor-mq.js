var site = site ? site : {};
(function ($) {
	site = $.extend(site, {
		monitorMq: {
			// jQuery DOM caching
			$detector: null,
			// CSS selectors
			detectorId: 'monitor_mq',
			// Configuration
			detectorWidth: 0,
			currentBreakpoint: 0,
			previousBreakpoint: 0,
			init: function() {
				var self = this;
				self.$detector = document.getElementById(self.detectorId);
				self.monitor();
			},
			monitor: function() {
				var self = this;

				self.detectorWidth = self.$detector.offsetWidth;
				if (self.detectorWidth !== self.currentBreakpoint) {
					self.previousBreakpoint = self.currentBreakpoint;
					self.currentBreakpoint = self.detectorWidth;
				}
                console.log(self.currentBreakpoint);
			}
		}
	});
    PubSub.subscribe('pageLoaded', function () {
		site.monitorMq.init();
	});
    PubSub.subscribe('viewportResizeEnd', function () {
		site.monitorMq.monitor();
	});
}(_basic));
