var site = site ? site : {};
(function ($) {
	site = $.extend(site, {
		viewportResize: {
			// Configuration
			resizeTimeout: null,
			timeoutDuration: 200,
			init: function() {
				var self = this;

				site.settings.$window.on('resize', function() {
					if (self.resizeTimeout) {
						clearTimeout(self.resizeTimeout);
					}

                    PubSub.publish('viewportResizeStart', self);

					self.resizeTimeout = setTimeout(function() {
                        PubSub.publish('viewportResizeEnd_prioritize', self);
                        PubSub.publish('viewportResizeEnd', self);
					}, self.timeoutDuration);
				});
			}
		}
	});
    PubSub.subscribe('pageLoaded', function () {
		site.viewportResize.init();
	});
}(_basic));
