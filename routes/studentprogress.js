var express = require('express');
var router = express.Router();
var studentprogress=require('../models/student_progress_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
studentprogress.getstudentprogressById(req.params.id,function(err,rows){
 
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
 
studentprogress.getAllstudentprogress(function(err,rows){
 
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

studentprogress.addstudentprogress(req.body,function(err,result){
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
 
studentprogress.deletestudentprogress(req.params.id,function(err,count){
 
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
router.put('/:id/:id1',function(req,res,next){
 
studentprogress.updatestudentprogress(req.params.id,req.params.id1,req.body,function(err,rows){
 
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