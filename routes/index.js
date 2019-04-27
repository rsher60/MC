var express = require('express');
var router = express.Router();
//new
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var http=require('http');
//
var Request = require("request");


/*
Request.get("http://localhost:5000/files", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shops/index', { title: 'decentralised data as a service' });
});



router.get('/mazakdata',function(req,res,next){
  res.render('shops/map',{title:'express'});
});

router.get('/pocketNCdata',function(req,res,next){
  res.render('shops/map2',{title:'express'});
});


/*
var url = 'https://api.github.com/users/rsp';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is already parsed as JSON:
      console.log(data.html_url);
    }
});


*/
router.get('/mazakdata/data',function(req,res,next){
  
  Request.get("http://localhost:5000/files", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    a = JSON.parse(body);
    //a = JSON.stringify(body);
    console.dir(a);
    //res.setHeader('Content-Type', 'application/json')
    
    res.render('shops/mazakkadata',{title:'express',a:a});
});
  
});

 router.get('/mazdata/data',function(req,res,next){

  Request.get("http://localhost:5000/image/e9ba010db1faf5e1d677163e43ac2636.jpg"),(error,response,body) =>{
    if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
  }

 });
/*
 router.get('/mazakdata/data',function(req,res,next){
  
  Request.get("http://localhost:5000/files", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    a = JSON.parse(body);
    //a = JSON.stringify(body);
    console.dir(a);
    //res.setHeader('Content-Type', 'application/json')
    
    res.render('shops/mazakkadata',{title:'express',a:a});
});



*/

 // additions 11/7/2018


router.get('/modeldata', function(req, res, next) {

  Request.get("http://localhost:8000/get-data", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    aa = JSON.parse(body);
    //a = JSON.stringify(body);
    console.dir(aa);
    //res.setHeader('Content-Type', 'application/json')
    
    res.render('shops/modeldata',{title:'express',aa:aa});
});
  
});

  


/*
  res.render('shops/modeldata',{title:'CAD models'});

});
/*/












//new additions end

module.exports = router;