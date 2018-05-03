var db=require('../dbconnection'); //reference of dbconnection.js
 
var cjobprofile={
 
getAllcjobprofile:function(callback){
 
return db.query("Select * from tblcompanyjobprofile",callback);
 
},
 getcjobprofileById:function(id,id1,callback){
 
return db.query("select * from tblcompanyjobprofile where companyJobProfile_CompanyId=? and companyJobProfile_JobProfileId=?",[id,id1],callback);
 },
 
 addcjobprofile:function(cjobprofile,callback){
 return db.query("Insert into tblcompanyjobprofile(companyJobProfile_CompanyId,companyJobProfile_JobProfileId)values(?,?)",
 [cjobprofile.companyJobProfile_CompanyId,cjobprofile.companyJobProfile_JobProfileId],callback);
 },
 deletecjobprofile:function(id,id1,callback){
  return db.query("delete from tblcompanyjobprofile where companyJobProfile_CompanyId=? and companyJobProfile_JobProfileId=?",[id,id1],callback);
 },

 updatecjobprofile:function(id,id1,cjobprofile,callback){
  return db.query("update tblcompanyjobprofile set companyJobProfile_CompanyId=?,companyJobProfile_JobProfileId=? where companyJobProfile_CompanyId=? and companyJobProfile_JobProfileId=?",
  [cjobprofile.companyJobProfile_CompanyId,cjobprofile.companyJobProfile_JobProfileId,id,id1],callback);
 }
 
};
 module.exports=cjobprofile;