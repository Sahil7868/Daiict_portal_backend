var express = require('express');
var router = express.Router();
var qtag=require('../models/questiontag_model');

router.get('/:id?/:id1?',function(req,res,next){
 
if(req.params.id){
 
qtag.getqtagById(req.params.id,req.params.id1,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{

qtag.getAllqtag(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/',function(req,res,next){

qtag.addqtag(req.body,function(err,result){
  if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(req.body);
  //res.end(JSON.stringify(result));
	//https://www.9lessons.info/2017/02/create-restful-api-nodejs-mysql.html  
  }
  });
 });

 router.delete('/:id?/:id1?',function(req,res,next){
 
qtag.deleteqtag(req.params.id,req.params.id1,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
router.put('/:id?/:id1?',function(req,res,next){
 
qtag.updateqtag(req.params.id,req.params.id1,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.status(200).json(rows);
  }
  });
 });
 module.exports = router;