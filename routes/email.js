var express = require('express');
var router = express.Router();
var notification=require('../models/notification_model');
var recever=require('../models/notification_recever_model');
var async = require('async');
var connect=require('../dbconnection');
 var status=0;
 var notification_id;
 var recepient;

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
notification.getnotificationById(req.params.id,function(err,rows){
 
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
 
notification.getAllnotification(function(err,rows){
 
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
 async.series([
  function(callback){

    notification.addnotification(req.body,function(err,result){
    
    if(err)
    {
    res.json(err);
     }
     else
    {
      notification_id=result.insertId;
      res.json(req.body); 
        callback(null,'succes1'); 
        
    }
    });

},

  function(callback){
            
            req.body.receive.forEach(item => {
                      recepient={
                            notification_id,
                            item,
                            status
                          }

              recever.addrecever(recepient,function(err,result){
    
                             if(err)
                        {
                               res.json(err);
                        }
                        
                    });
              
            });
            callback(null,'success2');
        }

],
function(callback){
    console.log("done");
}); 

 

});



 router.delete('/:id?',function(req,res,next){
 
notification.deletenotification(req.params.id,function(err,count){
 
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
router.put('/:id?',function(req,res,next){
 
notification.updatenotification(req.params.id,function(err,rows){
 
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