
var filter = require('./dataFilter');
let core = {};

setInterval(function(){
    filter.extractFrom('https://www.reddit.com/',function(data){
    console.log(data);
})
},2000);


module.exports = core;