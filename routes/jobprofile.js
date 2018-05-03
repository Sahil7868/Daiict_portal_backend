var express = require('express');
var router = express.Router();
var jobprofile=require('../models/jobprofile_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
jobprofile.getjobprofileById(req.params.id,function(err,rows){
 
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
 
jobprofile.getAlljobprofile(function(err,rows){
 
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

jobprofile.addjobprofile(req.body,function(err,result){
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

 router.delete('/:id',function(req,res,next){
 
jobprofile.deletejobprofile(req.params.id,function(err,count){
 
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
router.put('/:id',function(req,res,next){
 
jobprofile.updatejobprofile(req.params.id,req.body,function(err,rows){
 
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