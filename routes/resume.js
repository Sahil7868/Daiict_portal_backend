var express = require('express');
var router = express.Router();
const multer = require('multer');
var resume=require('../models/resume_model');
const fs = require('fs');

// upload resume pdf 

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      console.log(file);
        cb(null, './resume_uploads');
    },
    filename: function(req, file, cb){
      console.log(req.body);
        cb(null, req.body.resume_StudentId+'_'+req.body.resume_JobProfileId+'.pdf');
    }
});
const upload = multer({storage:storage});

router.get('/:id?/:id1?',function(req,res,next){
 
if(req.params.id){
 
 const fileName=req.params.id+'_'+req.params.id1+'.pdf';
         
  const filePath =  './resume_uploads/'+req.params.id+'_'+req.params.id1+'.pdf'; // or any file format

  // Check if file specified by the filePath exists 
  fs.exists(filePath, function(exists){
      if (exists) {
        //console.log('in');
        // Content-type is very interesting part that guarantee that
        // Web browser will handle response in an appropriate manner.
        res.writeHead(200, {
          "Content-Type": "application/pdf",
          "Content-Disposition": "attachment; filename=" + fileName
        });
        fs.createReadStream(filePath).pipe(res);
      } else {
              return res.json({success: false, msg: 'File Does Not Exists'});
      }
    });
 


}
 else{
 
resume.getAllresume(function(err,rows){
 
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
// To test in postman use form-data
 router.post('/',upload.single('resume_pdf'),function(req,res,next){
   

resume.addresume(req.body,function(err,result){
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

 router.delete('/:id?/:id1?',function(req,res,next){
 
resume.deleteresume(req.params.id,req.params.id1,function(err,count){
 
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
router.put('/:id?/:id1?',upload.single('resume_pdf'),function(req,res,next){
 
resume.updateresume(req.params.id,req.params.id1,req.body,function(err,rows){
 
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


