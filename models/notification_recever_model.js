var db=require('../dbconnection'); //reference of dbconnection.js
 
var recever={
 
getAllrecever:function(callback){
 
return db.query("Select * from tblnotificationrecipient",callback);
 
},
 getreceverById:function(id,callback){
 
return db.query("select * from tblnotificationrecipient where notificationRecipient_Status=?",[id],callback);
 },
 
 addrecever:function(recever,callback){
   //  console.log(recever.notification_id);
 return db.query("Insert into tblnotificationrecipient(notificationRecipient_NotificationId,notificationRecipient_ReceiverStudentId,notificationRecipient_Status)values(?,?,?)",
 [recever.notification_id,recever.item,recever.status],callback);
 },
 deleterecever:function(id,callback){
  return db.query("delete from tblnotificationrecipient where notificationRecipient_Status=?",[id],callback);
 },

 updaterecever:function(id,recever,callback){
  return db.query("update tblnotificationrecipient set notificationRecipient_ReceiverStudentId=?,notificationRecipient_Status=? where notificationRecipient_Status=?",
  [recever.notificationRecipient_ReceiverStudentId,recever.notificationRecipient_Status,id],callback);
 }
 
};
 module.exports=recever;