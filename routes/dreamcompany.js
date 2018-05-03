var express = require('express');
var router = express.Router();
var dreamcompany=require('../models/dreamcompany_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
 
        dreamcompany.getDreamCompanyById(req.params.id,function(err,rows){
         
            if(err)
            {
            res.json(err);
            }
            else{
            res.json(rows);
            }
        });
    }else{
         
        dreamcompany.getAllDreamCompany(function(err,rows){
         
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

    dreamcompany.addDreamCompany(req.body,function(err,count){
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
 
    dreamcompany.deleteDreamCompany(req.params.id,function(err,count){
    
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
 
    dreamcompany.updateDreamCompany(req.params.id,req.body,function(err,rows){
        
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