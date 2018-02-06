var siteObj = siteObj ? siteObj : {};
(function() {
	siteObj._events = {
		pageReady() {
      siteObj._settings._Html.classList.add('page-ready');
      siteObj.viewportResize.init();
      siteObj.monitorMq.init();
      siteObj.pictureFill.init();
      siteObj.imgToBg.init();
    },
    pageLoaded() {
      siteObj._settings._Html.classList.add('page-loaded');
    },
    viewportResizeStart() {
      // add calls to modules here
    },
    viewportResizeEnd_prioritize() {
      // add calls to modules here
    },
    viewportResizeEnd() {
      // add calls to modules here
      siteObj.monitorMq.monitor();
    }
	};
}());
