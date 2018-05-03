var db=require('../dbconnection'); //reference of dbconnection.js
 
var qtag={
 
getAllqtag:function(callback){
 
return db.query("Select * from tblquestiontag",callback);
 
},
 getqtagById:function(id,id1,callback){
 
return db.query("select * from tblquestiontag where questionTag_QuestionId=? and questionTag_TagId=?",[id,id1],callback);
 },
 
 addqtag:function(qtag,callback){
 return db.query("Insert into tblquestiontag(questionTag_QuestionId,questionTag_TagId)values(?,?)",
 [qtag.questionTag_QuestionId,qtag.questionTag_TagId],callback);
 },
 deleteqtag:function(id,id1,callback){
  return db.query("delete from tblquestiontag where questionTag_QuestionId=? and questionTag_TagId=?",[id,id1],callback);
 },

 updateqtag:function(id,id1,qtag,callback){
  return db.query("update tblquestiontag set questionTag_QuestionId=?,questionTag_TagId=? where questionTag_QuestionId=? and questionTag_TagId=?",
  [qtag.questionTag_QuestionId,qtag.questionTag_TagId,id,id1],callback);
 }
 
};
 module.exports=qtag;