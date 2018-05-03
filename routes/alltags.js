var express = require('express');
var router = express.Router();
var tags=require('../models/alltags_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
tags.gettagsById(req.params.id,function(err,rows){
 
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
 
tags.getAlltags(function(err,rows){
 
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

tags.addtags(req.body,function(err,result){
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
 
tags.deletetags(req.params.id,function(err,count){
 
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
 
tags.updatetags(req.params.id,req.body,function(err,rows){
 
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