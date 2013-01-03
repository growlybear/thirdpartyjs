var Stork = (function (window, undefined) {
    var Stork = {};

    function loadScript(url, callback) {
        var entry,
            script = document.createElement('script');

        script.async = true;
        script.src = url;

        entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);

        script.onload = script.onreadystatechange = function () {
            var rdyState = script.readyState;

            if (!rdyState || /complete|loaded/.test(script.readyState)) {
                callback();

                // detach event handlers to prevent memory leaks in IE
                // http://msdn.microsoft.com/en-us/library/bb250448(v=vs.85).aspx
                script.onload = null;
                script.onreadystatechange = null;
            }
        };
    }

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
