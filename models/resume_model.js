var db=require('../dbconnection'); //reference of dbconnection.js
 
var resume={
 
getAllresume:function(callback){
 
return db.query("Select * from tblresume",callback);
 
},
 getresumeById:function(id,id1,callback){
 
return db.query("select * from tblresume where resume_StudentId=? and resume_JobProfileId=?",[id,id1],callback);
 },
 
 addresume:function(resume,callback){
 return db.query("Insert into tblresume(resume_StudentId,resume_JobProfileId)values(?,?)",
 [resume.resume_StudentId,resume.resume_JobProfileId],callback);
 },
 deleteresume:function(id,id1,callback){
  return db.query("delete from tblresume where resume_StudentId=? and resume_JobProfileId=?",[id,id1],callback);
 },

 updateresume:function(id,id1,resume,callback){
  return db.query("update tblresume set resume_StudentId=?,resume_JobProfileId=? where resume_StudentId=? and resume_JobProfileId=?",
  [resume.resume_StudentId,resume.resume_JobProfileId,id,id1],callback);
 }
 
};
 module.exports=resume;