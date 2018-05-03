var express = require('express');
var router = express.Router();
var jobopening=require('../models/jobopening_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
 
        jobopening.getJobOpeningById(req.params.id,function(err,rows){
         
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
         
        jobopening.getAllJobOpening(function(err,rows){
         
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

    jobopening.addJobOpening(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
			jobopening.getrecentopening((err, openings) => {
                    if(err) throw err;
                 else {

                         res.json({
                                      success: true,
                                        openings
                
                              });
                    }
    
                  });
        }
    });
});

router.delete('/:id',function(req,res,next){
 
    jobopening.deleteJobOpening(req.params.id,function(err,count){
    
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
 
    jobopening.updateJobOpening(req.params.id,req.body,function(err,rows){
        
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