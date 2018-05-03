var db=require('../dbconnection'); //reference of dbconnection.js
 
var messagetemp={
 
getAllmessagetemp:function(callback){
 
return db.query("Select * from tblmessagetemplate",callback);
 
},
 getmessagetempById:function(id,callback){
 
return db.query("select * from tblmessagetemplate where messageTemplate_UserId=?",[id],callback);
 },
 
 addmessagetemp:function(messagetemp,callback){
 return db.query("Insert into tblmessagetemplate (messageTemplate_UserId,messageTemplate_MessageContent)values(?,?)",
 [messagetemp.messageTemplate_UserId,messagetemp.messageTemplate_MessageContent],callback);
},


 deletemessagetemp:function(id,callback){
  return db.query("delete from tblmessagetemplate where messageTemplate_Id=?",[id],callback);
 },

 updatemessagetemp:function(id,messagetemp,callback){
  return db.query("update tblmessagetemplate set messageTemplate_UserId=?,messageTemplate_MessageContent=? where messageTemplate_Id=?",
  [messagetemp.messageTemplate_UserId,messagetemp.messageTemplate_MessageContent,id],callback);
 }
 
};
 module.exports=messagetemp;