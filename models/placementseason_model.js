var db=require('../dbconnection'); //reference of dbconnection.js
 
var placementSeason={
 
    getAllPlacementSeason:function(callback){
    
        return db.query("Select * from tblplacementseason",callback);
    
    },    
    getPlacementSeasonById:function(id,callback){
            
        return db.query("select * from tblplacementseason where placementSeason_Id=?",[id],callback);
    },
    addPlacementSeason:function(pseason,callback){

        return db.query("INSERT INTO tblplacementseason (placementSeason_Id,placementSeason_Year ) VALUES (?,?)",
        [pseason.placementSeason_Id,pseason.placementSeason_Year],callback);

    },
    deletePlacementSeason:function(id,callback){
        return db.query("delete from tblplacementseason where placementSeason_Id=?",[id],callback);
    },
    
    updatePlacementSeason:function(id,pseason,callback){

        return db.query("update tblplacementseason set placementSeason_Year=? where placementSeason_Id=?",
        [pseason.placementSeason_Year,id],callback);

    }
};
 module.exports=placementSeason;