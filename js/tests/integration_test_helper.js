App.setupForTesting();
App.injectTestHelpers();

function exists(selector) {
    return !!find(selector).length;
}

function stubEndpointForHttpRequest(url, json) {
    $.mockjax({
        url: url,
        dataType: 'json',
        responseText: json
    });
}

$.mockjaxSettings.logging = false;
$.mockjaxSettings.responseTime = 0;
