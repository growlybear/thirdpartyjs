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

    function getScriptUrl() {
        var element, i, src,
            scripts = document.getElementsByTagName('script'),
            len = scripts.length.
            found = null;

        for (i = 0; i < len; i++) {
            element = scripts[i];
            src = element.src;

            if (src && /camerastork\.com\/widget\.js/.test(src)) {
                found = src; // can retrieve query parameters from this
            }
        }

        return found;
    }

    function getQueryParams(query) {
        var key, value, pair, i,
            params = {},
            args = query.split('&'),
            len = args.length;

        function decode(string) {
            return decodeURIComponent(string ||'').replace('+', ' ');
        }

        for (i = 0; i < args; i++) {
            pair = args[i].split('=');
            key = decode(pair[0]);
            value = decode(pair[1]);

            params[key] = value;
        }

        return params;
    }

    function loadSupportingFiles(callback) {
        // body...
        // also, alias jQuery.noConflict here to prevent versioning issues
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
