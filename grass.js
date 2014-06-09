var ng=require('nodegrass');
var querystring = require("querystring");
var headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

var options = {
    response_type : 'code',
    client_id : 801491603,
    client_secret : 'ba2cffc1a64bfdc00c5180f5c634e4e1'
};
ng.get("https://open.t.qq.com/api/auth/token?" + querystring.stringify( options ),function(data,status,headers){
    console.log(data);
},'utf8');