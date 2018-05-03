var db=require('../dbconnection'); //reference of dbconnection.js
 
var jobopeningReg={
 
    getAllJobOpeningReg:function(callback){
    
        return db.query("Select * from tbljobopeningregistration",callback);
    
    },
    getJobOpeningRegById:function(id,callback){
            
        return db.query("select * from tbljobopeningregistration where jobOpeningRegistration_OpeningId=?",[id],callback);
    },
    addJobOpeningReg:function(jobopeningreg,callback){
		console.log(jobopeningreg)
        return db.query("INSERT INTO tbljobopeningregistration (jobOpeningRegistration_OpeningId,jobOpeningRegistration_StudentId) VALUES(?,?)",
        [jobopeningreg.jobOpeningRegistration_OpeningId,jobopeningreg.jobOpeningRegistration_StudentId],callback);

    },
    deleteJobOpeningReg:function(id,callback){
        return db.query("delete from tbljobopeningregistration where jobOpeningRegistration_OpeningId=?",[id],callback);
    },

    updateJobOpeningRegDate:function(id1,id2,jobopeningreg,callback){

        return db.query("update tbljobopeningregistration set jobOpeningRegistration_Timestamp=? where jobOpeningRegistration_OpeningId=? and jobOpeningRegistration_StudentId=?",
        [jobopeningreg.jobOpeningRegistration_Timestamp, id1,id2],callback);

    }
 
};
 module.exports=jobopeningReg;