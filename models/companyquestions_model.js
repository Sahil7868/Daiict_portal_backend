var db=require('../dbconnection'); //reference of dbconnection.js
 
var cquestions={
 
getAllcquestions:function(callback){
 
return db.query("Select * from tblcompanyquestion",callback);
 
},
 getccquestionsById:function(id,id1,callback){
 
return db.query("select * from tblcompanyquestion where companyQuestion_QuestionId=? and companyQuestion_CompanyId=?",[id,id1],callback);
 },
 
 addcquestions:function(cquestions,callback){
 return db.query("Insert into tblcompanyquestion(companyQuestion_QuestionId,companyQuestion_CompanyId)values(?,?)",
 [cquestions.companyQuestion_QuestionId,cquestions.companyQuestion_CompanyId],callback);
 },
 deletecquestions:function(id,id1,callback){
  return db.query("delete from tblcompanyquestion where companyQuestion_QuestionId=? and companyQuestion_CompanyId=?",[id,id1],callback);
 },

 updatecquestions:function(id,id1,cquestions,callback){
  return db.query("update tblcompanyquestion set companyQuestion_QuestionId=?,companyQuestion_CompanyId=? where companyQuestion_QuestionId=? and companyQuestion_CompanyId=?",
  [cquestions.companyQuestion_QuestionId,cquestions.companyQuestion_CompanyId,id,id1],callback);
 }
 
};
 module.exports=cquestions;