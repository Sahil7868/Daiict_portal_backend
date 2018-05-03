var db=require('../dbconnection'); //reference of dbconnection.js
 
var tags={
 
getAlltags:function(callback){
 
return db.query("Select * from tblalltags",callback);
 
},
 gettagsById:function(id,callback){
 
return db.query("select * from tblalltags where allTags_Id=?",[id],callback);
 },
 
 addtags:function(tags,callback){
 return db.query("Insert into tblalltags(allTags_TagName)values(?)",
 [tags.allTags_TagName],callback);
 },
 deletetags:function(id,callback){
  return db.query("delete from tblalltags where allTags_Id=?",[id],callback);
 },

 updatetags:function(id,tags,callback){
  return db.query("update tblalltags set allTags_TagName=? where allTags_Id=?",
  [tags.allTags_TagName,id],callback);
 }
 
};
 module.exports=tags;