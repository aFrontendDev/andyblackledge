var site = site ? site : {};
(function ($) {
	site = $.extend(site, {
		tabs: {
            // objects
            $tabs: null,
            $handle: null,
            // selectors
            tabsSelector: '.tabs',
            handleSelector: '.action-tab-handle',
            // classes
            tabInClass: 'tab-in',
            tabOutClass: 'tab-out',
            tabShowClass: 'tab-show',
            tabLinkActive: 'tab-link-active',
            // misc
            timeoutIn: null,
            timeoutOut: null,
			clickActive: false,
            init: function () {
                var self = this;

                self.$tabs = $.get(self.tabsSelector);

                if (self.$tabs.length < 1) {
                    return;
                }

                self.$handle = $.get(self.handleSelector);

                self.$handle.on('click', function (event) {
                    event.preventDefault();
                    var handle = this;
                    var $this = $.get(this);

					if ($this.hasClass(handle, self.tabLinkActive)) {
	                    return;
	                } else {
						if (self.clickActive) {
							return;
						}
						self.clickActive = true;
	                    //console.log('tab click');
	                    self.handleClick($this, handle);
					}
                });
            },
            handleClick: function ($handle, handle) {
                var self = this;
                //console.log('2');

                if ( (!$handle || $handle.length < 1) || (!handle || handle.length < 1) ) {
                    return;
                }
                var href = handle.getAttribute('href');
                //console.log(href);

                var $activeTab = $.get('.' + self.tabInClass);
                if (!$activeTab || $activeTab.length < 1) {
                    return;
                }

                var $activeHandle = $.get('.' + self.tabLinkActive);
                if (!$activeHandle || $activeHandle.length < 1) {
                    return;
                }

                var $target = $.get(href);
                if (!$target || $target.length < 1) {
                    return;
                }

                if (site.monitorMq.currentBreakpoint >= site.settings.breakPointD) {
                    $activeHandle.removeClass(self.tabLinkActive);
                    $handle.addClass(self.tabLinkActive);

                    $activeTab.addClass(self.tabOutClass);
                    $target.addClass(self.tabShowClass);

                    self.timeoutIn = setTimeout(function () {
                        $target.addClass(self.tabInClass);
                        clearTimeout(self.timeoutIn);
                    }, 100);

                    self.timeoutOut = setTimeout(function () {
                        $activeTab.removeClass(self.tabInClass);
                        $activeTab.removeClass(self.tabOutClass);
                        //$target.addClass(self.tabInClass);
                        $target.removeClass(self.tabShowClass);
						self.clickActive = false;
                        clearTimeout(self.timeoutOut);
                    }, 500);
                } else {
                    $activeHandle.removeClass(self.tabLinkActive);
                    $handle.addClass(self.tabLinkActive);

                    $activeTab.removeClass(self.tabInClass);
                    $target.addClass(self.tabInClass);

					self.clickActive = false;
                }
            }
        }
	});
    PubSub.subscribe('pageLoaded', function () {
		site.tabs.init();
	});
}(_basic));
