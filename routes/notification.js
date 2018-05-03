var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var notification=require('../models/notification_model');
var recever=require('../models/notification_recever_model');
var async = require('async');
var user=require('../models/user_model');
const smtpTransport = require('nodemailer-smtp-transport');
var connect=require('../dbconnection');
var user=require('../models/user_model');
 var status=0;
 var notification_id;
 var recepient;
 var emailarray=[];

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
var email=req.body.notification_ViaEmail;
          if(email==1)
           {    
               // console.log("hello");
                   req.body.receive.forEach(item => {
                     
                              user.getuserById(item,function(err,result){
                               // console.log(result[0].user_EmailId);
                                 // emailarray.push(result[0].user_EmailId); 
                var transport = nodemailer.createTransport(smtpTransport({
                host: 'localhost',
                port: 3000,
                secure: 'false',
                service: 'Gmail',
                auth: {
                    user: '9x9team@gmail.com',
                    pass: '9x9=81dumb'
                },
                tls: {
                    rejectUnauthorized: false
                }
            }));
   var mailOptions = {
                to: result[0].user_EmailId,
                from: '9x9team@gmail.com',
                subject: req.body.notification_MessageSubject,
                text: req.body.notification_Message
            };
  transport.sendMail(mailOptions, function (err) {
    
                console.log('Mail Sent');
                console.log('Success An email has been set to');
               
            });              
       
                                
                              });
                            });  
            
           }





  callback(null,'succes1'); 
},

  function(callback){

    notification.addnotification(req.body,function(err,result){
  //  console.log(emailarray[0]);
    if(err)
    {
    res.json(err);
     }
     else
    {
      notification_id=result.insertId;
      res.json(req.body); 
        callback(null,'succes2'); 
        
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
                  console.log("lagi");
                             if(err)
                        {
                               res.json(err);
                        }
                        
                    });
              
            });
            callback(null,'success3');
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