var express = require('express');
var router = express.Router();
var progOpening=require('../models/programopening_model');

router.get('/:id1?/:id2?',function(req,res,next){

    if(req.params.id1 && req.params.id2){
 
        progOpening.getProgBatchByIds(req.params.id1,req.params.id2,function(err,rows){
         
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
         
        progOpening.getAllProgOpening(function(err,rows){
         
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

    progOpening.addProgOpening(req.body,function(err,count){
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

router.delete('/:id1?/:id2?',function(req,res,next){
 
    progOpening.deleteProgOpening(req.params.id1,req.params.id2,function(err,count){
    
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
 
    progOpening.updateProgOpening(req.params.id1,req.params.id2,req.body,function(err,rows){
        
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