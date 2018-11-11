const jsdom = require("jsdom");
var sniffer = require("./htmlSniffer");

var filter = {};

filter.extractFrom = function(url, callback){
    sniffer.getHTMLFromHttp(url,function(html){
        callback(filterData(html));
    });
}


function filterData(html){
    const {JSDOM} = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);

    //Data Filter through jquery
    return $(".rpBJOHq2PR60pnwJlUyP0 .s56cc5r-0").first().text();
}

module.exports = filter;