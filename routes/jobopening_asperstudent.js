var express = require('express');
var router = express.Router();
var student=require('../models/jobopening_asperstudent_model');

router.get('/:id?',function(req,res,next){
 

 
student.getstudentById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json({
success:true,
data:rows


  });
  }
  });
 

 });

 
 module.exports = router;