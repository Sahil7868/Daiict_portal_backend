var db=require('../dbconnection'); //reference of dbconnection.js
 
var spcpolicy={
 
    getAllSPCPolicy:function(callback){
    
        return db.query("Select * from tblspcpolicy",callback);
    
    },  
    getSPCPolicyById:function(id,callback){
            
        return db.query("select * from tblspcpolicy where spcPolicy_Id=?",[id],callback);
    },
    addSPCPolicy:function(spcpolicy,callback){

        return db.query("INSERT INTO tblspcpolicy (spcPolicy_Id ,spcPolicy_PlacementSeasonId ,spcPolicy_CriteareaOrCategory,spcPolicy_Minimum,spcPolicy_Maximum,spcPolicy_SwitchAllowed, spcPolicy_Multiplier,spcPolicy_Description ) VALUES (?,?,?,?,?,?,?,?)",
        [spcpolicy.spcPolicy_Id ,spcpolicy.spcPolicy_PlacementSeasonId ,spcpolicy.spcPolicy_CriteareaOrCategory,spcpolicy.spcPolicy_Minimum,spcpolicy.spcPolicy_Maximum,spcpolicy.spcPolicy_SwitchAllowed,spcpolicy.spcPolicy_Multiplier,spcpolicy.spcPolicy_Description],callback);

    },  
    deleteSPCPolicy:function(id,callback){
        return db.query("delete from tblspcpolicy where spcPolicy_Id=?",[id],callback);
    },
    
    updateSPCPolicy:function(id,spcpolicy,callback){

        return db.query("update tblspcpolicy set spcPolicy_PlacementSeasonId=?,spcPolicy_CriteareaOrCategory=?,spcPolicy_Minimum=?,spcPolicy_Maximum=?,spcPolicy_SwitchAllowed=?, spcPolicy_Multiplier=?,spcPolicy_Description=? where spcPolicy_Id=?",
        [spcpolicy.spcPolicy_PlacementSeasonId ,spcpolicy.spcPolicy_CriteareaOrCategory,spcpolicy.spcPolicy_Minimum,spcpolicy.spcPolicy_Maximum,spcpolicy.spcPolicy_SwitchAllowed,spcpolicy.spcPolicy_Multiplier,spcpolicy.spcPolicy_Description,id],callback);

    }
};
 module.exports=spcpolicy;