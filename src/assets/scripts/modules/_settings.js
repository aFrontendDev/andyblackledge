var site = site ? site : {};
(function ($) {
	site = $.extend(site, {
		settings: {
			// cache some common variables
			$window: $.get(window),
			$html: $.get('html'),
			$body: $.get('body'),
			$htmlbody: $.get('html,body'),
			$page: $.get('#page'),
			$header: $.get('#header'),
			$main: $.get('#main'),
			$footer: $.get('#footer'),
			// stored URL params (empty to begin with)
			urlParams: {},
			// class to use on
			processedClass: 'processed',
			browserPrefix: null,
			transitionEnd: null,
			animationEnd: null,
			transitionAnimationEnd: null,
			// store processing of last component globally
			processinglastBlock: false,
			// breakpoint variables (should match variables.less)
			breakPointA: 320,
			breakPointB: 480,
			breakPointC: 600,
			breakPointD: 768,
			breakPointE: 1000,
			breakPointF: 1200,
			breakPointG: 1360,
			// store scripts directory
			scriptsDirectory: '',
		}
	});
}(_basic));
