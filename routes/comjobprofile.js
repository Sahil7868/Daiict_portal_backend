var express = require('express');
var router = express.Router();
var cjobprofile=require('../models/comjobprofile_model');

router.get('/:id?/:id1?',function(req,res,next){
 
if(req.params.id){
 
cjobprofile.getcjobprofileById(req.params.id,req.params.id1,function(err,rows){
 
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

cjobprofile.getAllcjobprofile(function(err,rows){
 
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

cjobprofile.addcjobprofile(req.body,function(err,result){
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
 
cjobprofile.deletecjobprofile(req.params.id,req.params.id1,function(err,count){
 
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
 
cjobprofile.updatecjobprofile(req.params.id,req.params.id1,req.body,function(err,rows){
 
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