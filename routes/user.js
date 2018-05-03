var express = require('express');
var router = express.Router();
var user=require('../models/user_model');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config=require('./config');
const bcrypt = require('bcryptjs');


router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
user.getuserById(req.params.id,function(err,rows){
 
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
 
user.getAlluser(function(err,rows){
 
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

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const StudentId = req.body.user_StudentId;
  const Password = req.body.user_Password;

  user.getuserById(StudentId, (err, User) => {
 if(err) throw err;
  
    if(User==false){
      return res.json({success: false, msg: 'User not found'});
    }

    const hash=User[0].user_Password;
    user.comparePassword(Password,hash,(err,isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data:User},config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: `Bearer ${token}`,
          wholedata: {
            User
            }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });








    
  });
});

 router.post('/',function(req,res,next){

user.adduser(req.body,function(err,result){
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
 
user.deleteuser(req.params.id,function(err,count){
 
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
 
user.updateuser(req.params.id,req.body,function(err,rows){
 
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