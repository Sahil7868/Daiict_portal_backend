var express = require('express');
var router = express.Router();
var jobopeningReg=require('../models/jobopeningregistration_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
 
        jobopeningReg.getJobOpeningRegById(req.params.id,function(err,rows){
         
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
         
        jobopeningReg.getAllJobOpeningReg(function(err,rows){
         
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

    jobopeningReg.addJobOpeningReg(req.body,function(err,count){
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
 
    jobopeningReg.deleteJobOpeningReg(req.params.id,function(err,count){
    
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
router.put('/:id1?/:id2?',function(req,res,next){
 
    jobopeningReg.updateJobOpeningRegDate(req.params.id1,req.params.id2,req.body,function(err,rows){
        
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