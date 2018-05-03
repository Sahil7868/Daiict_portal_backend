var db=require('../dbconnection'); //reference of dbconnection.js
 
var jobprofile={
 
getAlljobprofile:function(callback){
 
return db.query("Select * from tbljobprofile",callback);
 
},
 getjobprofileById:function(id,callback){
 
return db.query("select * from tbljobprofile where jobProfile_Name=?",[id],callback);
 },
 
 addjobprofile:function(jobprofile,callback){
 return db.query("Insert into tbljobprofile(jobProfile_Id,jobProfile_Name)values(?,?)",
 [jobprofile.jobProfile_Id,jobprofile.jobProfile_Name],callback);
 },
 deletejobprofile:function(jobprofile,callback){
  return db.query("delete from tbljobprofile where jobProfile_Name=?",[id],callback);
 },

 updatejobprofile:function(id,jobprofile,callback){
  return db.query("update tbljobprofile set jobProfile_Id=?,jobProfile_Name=? where jobProfile_Name=?",
  [jobprofile.jobProfile_Id,jobprofile.jobProfile_Name,id],callback);
 }
 
};
 module.exports=jobprofile;