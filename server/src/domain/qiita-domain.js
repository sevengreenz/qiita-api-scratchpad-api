"use strict";
exports.__esModule = true;
var queryString = require("query-string");
var makeAuthorizationUrl = function () {
    var params = {
        client_id: process.env.CLIENT_ID || '',
        scope: 'read_qiita write_qiita',
        state: 'scratchpad'
    };
    return 'http://qiita.com/api/v2/oauth/authorize?' + queryString.stringify(params);
};
exports["default"] = {
    makeAuthorizationUrl: makeAuthorizationUrl
};
