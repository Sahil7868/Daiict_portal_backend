var db=require('../dbconnection'); //reference of dbconnection.js
 
var notification={
 
getAllnotification:function(callback){
 
return db.query("Select * from tblnotification",callback);
 
},
 getnotificationById:function(id,callback){
 
return db.query("select * from tblnotification where notification_Id=?",[id],callback);
 },
 
 addnotification:function(notification,callback){
	 //console.log(notification)
 return db.query("Insert into tblnotification(notification_SenderId,notification_Message,notification_MessageSubject,notification_Time,notification_ViaEmail,notification_ViaPhone,notification_ViaPortal)values(?,?,?,?,?,?,?)",
 [notification.notification_SenderId,notification.notification_Message,notification.notification_MessageSubject,notification.notification_Time,notification.notification_ViaEmail,notification.notification_ViaPhone,notification.notification_ViaPortal],callback);
},


 deletenotification:function(id,callback){
  return db.query("delete from tblnotification where notification_Id=?",[id],callback);
 },

 updatenotification:function(id,notification,callback){
  return db.query("update tblnotification set notification_SenderId=?,notification_Message=?,notification_MessageSubject=?,notification_Time=?,notification_ViaEmail=?,notification_ViaPhone=?,notification_ViaPortal=?  where notification_Id=?",
  [notification.notification_SenderId,notification.notification_Message,notification.notification_MessageSubject,notification.notification_Time,notification.notification_ViaEmail,notification.notification_ViaPhone,notification.notification_ViaPortal,id],callback);
 }
 
};
 module.exports=notification;