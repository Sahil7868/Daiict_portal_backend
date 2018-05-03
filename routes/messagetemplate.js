var express = require('express');
var router = express.Router();
var messagetemp=require('../models/messagetemplate_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
messagetemp.getmessagetempById(req.params.id,function(err,rows){
 
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
 
messagetemp.getAllmessagetemp(function(err,rows){
 
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

messagetemp.addmessagetemp(req.body,function(err,result){
  if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(req.body);
   
  }
  });
 });

 router.delete('/:id',function(req,res,next){
 
messagetemp.deletemessagetemp(req.params.id,function(err,count){
 
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
 
messagetemp.updatemessagetemp(req.params.id,req.body,function(err,rows){
 
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