/**
* @file random-image.js - menu related JavaScript
*/
var randomImage = (function() {
    var self = {};
    const _RandomImage = document.querySelectorAll(".random-image");
    const inClass = "random-image--in";

    self.addImgPath = function (data, _RI) {

        if (!data || !_RI) {
            console.log('randomImage - addImgPath - no data or no _Image');
            return;
        }

        const _Image = _RI.querySelector('img');
        if (!_Image) {
            console.log('randomImage - addImgPath - no _Image');
            return;
        }

        const imageNumber = _utils.randomNum(1, data.amount);
        const path = data.path + imageNumber + '.' + data.fileType;

        _Image.src = path;
        _RI.classList.add(inClass);
    };

    self.getData = function () {

        _RandomImage.forEach(function (_RI) {
            const dataPath = _RI.dataset.randomImagePath;
            const dataFileType = _RI.dataset.randomImageFiletype;
            const dataAmount = parseInt(_RI.dataset.randomImageNumber, 10);

            if (!dataPath || !dataFileType || !dataAmount) {
                console.log('randomImage - getData - missing data');
                return;
            }

            var data = {
                path: dataPath,
                fileType: dataFileType,
                amount: dataAmount
            };

            self.addImgPath(data, _RI);
        });
    };

    self.init = function () {
        self.getData();
    };

    return self;
}());
