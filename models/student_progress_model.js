var db=require('../dbconnection'); //reference of dbconnection.js
 
var studentprogress={
 
getAllstudentprogress:function(callback){
 
return db.query("Select * from tblstudentprogress",callback);
 
},
 getstudentprogressById:function(id,callback){
 
return db.query("select * from tblstudentprogress where studentProgress_StudentId=?",[id],callback);
 },
 
 addstudentprogress:function(studentprogress,callback){
 return db.query("Insert into tblstudentprogress(studentProgress_StudentId,studentProgress_QuestionId,studentProgress_Status)values(?,?,?)",
 [studentprogress.studentProgress_StudentId,studentprogress.studentProgress_QuestionId,studentprogress.studentProgress_Status],callback);
},

 deletestudentprogress:function(id,callback){
  return db.query("delete from tblstudentprogress where studentProgress_StudentId=?",[id],callback);
 },

 updatestudentprogress:function(id, id1,studentprogress,callback){
  return db.query("update tblstudentprogress set studentProgress_StudentId=?,studentProgress_QuestionId=?,studentProgress_Status=? where studentProgress_StudentId=? and studentProgress_QuestionId = ?",
  [studentprogress.studentProgress_StudentId,studentprogress.studentProgress_QuestionId,studentprogress.studentProgress_Status,id,id1],callback);
 }
 
};
 module.exports=studentprogress;