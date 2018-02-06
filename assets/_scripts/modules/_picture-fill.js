var siteObj = siteObj ? siteObj : {};
(function() {
	siteObj.pictureFill = {
		init() {
			if (typeof picturefill === 'function') {
				// console.log('picturefill');
				picturefill();
			}
		}
	};
}());
