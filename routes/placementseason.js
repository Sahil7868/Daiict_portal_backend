var express = require('express');
var router = express.Router();
var pseason=require('../models/placementseason_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
 
        pseason.getPlacementSeasonById(req.params.id,function(err,rows){
         
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
         
        pseason.getAllPlacementSeason(function(err,rows){
         
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

    pseason.addPlacementSeason(req.body,function(err,count){
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
 
    pseason.deletePlacementSeason(req.params.id,function(err,count){
    
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
 
    pseason.updatePlacementSeason(req.params.id,req.body,function(err,rows){
        
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