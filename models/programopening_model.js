var db=require('../dbconnection'); //reference of dbconnection.js
 
var progOpening={
 
    getAllProgOpening:function(callback){
    
        return db.query("Select * from tblprogramopening",callback);
    
    },  
    getProgBatchByIds:function(id1,id2,callback){
            
        return db.query("select * from tblprogramopening where programOpening_OpeningId=? and programOpening_ProgramId=?",[id1,id2],callback);
    },  
    addProgOpening:function(popening,callback){

        return db.query("INSERT INTO tblprogramopening ( programOpening_OpeningId ,programOpening_ProgramId ,programOpening_Batch ) VALUES (?,?,?)",
        [popening.programOpening_OpeningId ,popening.programOpening_ProgramId ,popening.programOpening_Batch],callback);

    },
    deleteProgOpening:function(id1,id2,callback){
        return db.query("delete from tblprogramopening where programOpening_OpeningId=? and programOpening_ProgramId=?",[id1,id2],callback);
    },
    
    updateProgOpening:function(id1,id2,popening,callback){

        return db.query("update tblprogramopening set programOpening_Batch=? where programOpening_OpeningId=? and programOpening_ProgramId=?",
        [popening.programOpening_Batch,id1,id2],callback);

    }
};
 module.exports=progOpening;