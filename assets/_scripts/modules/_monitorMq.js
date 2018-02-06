var siteObj = siteObj ? siteObj : {};
(function() {
	siteObj.monitorMq = {
    // DOM caching
    _Detector: null,
    // CSS selectors
    detectorClass: 'monitor-mq',
    detectorId: 'monitor_mq',
    // Configuration
    detectorWidth: 0,
    currentBreakpoint: 0,
    previousBreakpoint: 0,
    init: function() {
      var self = this;
      self._Detector = document.querySelector('#' + self.detectorId);
      self.monitor();
    },
    /**
     * Creates detector <div> if not present. Updates the comparison variable when a change in screen size occurs.
     * @function monitor
     * @memberof monitorMq
     */
    monitor: function() {
      var self = this;
      if (!self._Detector) {
        self._Detector = document.createElement('div');
        self._Detector.setAttribute('id', self.detectorId);
        self._Detector.classList.add(self.detectorClass);
        siteObj._settings._Body.appendChild(self._Detector);
      }
      self.detectorWidth = self._Detector.clientWidth;
      if (self.detectorWidth !== self.currentBreakpoint) {
        self.previousBreakpoint = self.currentBreakpoint;
        self.currentBreakpoint = self.detectorWidth;
      }
    }
	};
}());