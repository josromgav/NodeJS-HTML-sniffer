var http = require('http');
var https = require('https');
var sniffer = {};


sniffer.getHTMLFromHttp = function(url,callback){
    return https.get(url,function(res,bet){
        var body = '';
        res.on('data',function(d){
            body += d;
        });
        res.on('end',function(){
            body = body.substring(
                body.lastIndexOf("<body>") + 6, //length of '<body>' 
                body.lastIndexOf("</body>")
            );
            callback(body);
        })
    });
}

sniffer.getHTMLFromHttps = function(url,callback){
    return https.get(url,function(res,bet){
        var body = '';
        res.on('data',function(d){
            body += d;
        });
        res.on('end',function(){
            body = body.substring(
                body.lastIndexOf("<body>") + 6, //length of '<body>' 
                body.lastIndexOf("</body>")
            );
            callback(body);
        })
    });
}

module.exports = sniffer;