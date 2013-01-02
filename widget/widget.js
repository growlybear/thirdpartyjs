var Stork = (function (window, undefined) {
    var Stork = {};

    function loadSupportingFiles(callback) {
        // body...
    }

    function getWidgetParams() {
        // body...
    }

    function getRatingData(params, callback) {
        // body...
    }

    function drawWidget() {
        // body...
    }

    loadSupportingFiles(function () {
        var params = getWidgetParams();
        getRatingData(params, function () {
            drawWidget();
        });
    });

    return Stork;
}(window));
