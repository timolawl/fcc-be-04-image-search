'use strict';

var CX = process.env.CX; // custom search engine id
var API_KEY = process.env.API_KEY; // google api key
var http = require('http'); // for processing the google search api call

function queryHandler (db) {
    var queries = db.collection('queries');

    this.getSearch = function (req, res) {
        var url, queryString, keywords, offset, offsetNumber, params;

        url = req.url.slice(17); // remove '/api/imagesearch/'
        queryString = url.match(/^.+(?=\?)/)[0]; // get query string
      //  keywords = queryString.split(' ');
        offset = url.match(/\?offset=(\d{1,2})$/)[0]; // query offset

        if (offset) offsetNumber = offset.match(/\d{1,2}/)[0]; // get offset number

        params = {};
        params.q = queryString; // search text
        params.num = 10; // number of search results to return (1 - 10 max)
        params.start = offsetNumber; // offset
        params.imgSize = 'medium'; // image size
        params.searchType = 'image'; // necessary
        params.key = API_KEY; // https://console.developers.google.com
        params.cx = CX; // https://cse.google.com/cse

        http.get(params, function (response) {
            var body = '';
            response.on('data', function (d) {
                body += d;
            });
            response.on('end', function () {
                console.log(body);
            });
        });
    };

}

module.exports = queryHandler;
