var express = require('express');
var router = express.Router();
var spcpolicy=require('../models/spcpolicy_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
 
        spcpolicy.getSPCPolicyById(req.params.id,function(err,rows){
         
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
         
        spcpolicy.getAllSPCPolicy(function(err,rows){
         
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

    spcpolicy.addSPCPolicy(req.body,function(err,count){
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

router.delete('/:id?',function(req,res,next){
 
    spcpolicy.deleteSPCPolicy(req.params.id,function(err,count){
    
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
 
    spcpolicy.updateSPCPolicy(req.params.id,req.body,function(err,rows){
        
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