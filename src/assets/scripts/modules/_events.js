var site = site ? site : {};
(function ($) {
	site = $.extend(site, {
		// functions to run again when ajax content is loaded
		ajaxLoaded: function () {
			var self = this;
			// init custom
			//$.publish('ajaxLoaded', self);
            PubSub.publish('ajaxLoaded', self);
		},
		// reusable site loaded function
		pageLoaded: function () {
			var self = this;
			self.settings.$window.on('load', function () {
				// init custom
				// e.g self.myfunction ();
				//$.publish('pageLoaded', self);
                PubSub.publish('pageLoaded', self);
			});
		},
		// reusable site ready function
		pageReady: function () {
			var self = this;
			// init loaded
			self.pageLoaded();
			//$.publish('pageReady', self);
            PubSub.publish('pageReady', self);
		}
	});
}(_basic));
