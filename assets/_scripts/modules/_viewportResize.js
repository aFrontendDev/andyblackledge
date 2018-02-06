var siteObj = siteObj ? siteObj : {};
(function() {
	siteObj.viewportResize = {
		// Configuration
		resizeTimeout: null,
		timeoutDuration: 200,
		init() {
			const self = this;

			window.addEventListener('resize', function() {
				if (self.resizeTimeout) {
					clearTimeout(self.resizeTimeout);
				}

				siteObj._events.viewportResizeStart();

				self.resizeTimeout = setTimeout(function() {
					siteObj._events.viewportResizeEnd_prioritize();
					siteObj._events.viewportResizeEnd();
				}, self.timeoutDuration);
			});
		}
	};
}());
