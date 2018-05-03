var db=require('../dbconnection'); //reference of dbconnection.js
 
var jobperstudent={
 

 getstudentById:function(id,callback){
 
return db.query("select j.jobOpening_Id from tblprogramopening AS p, tblcompany AS c, tbljobopening AS j, tbluser AS s where p.programOpening_ProgramId=s.user_ProgramId AND j.jobOpening_RegistrationStartDate <= CURDATE() AND j.jobOpening_RegistrationEndDate >= CURDATE() AND s.user_QualifyingPercentage>=j.jobOpening_RequirementGraduationCpi AND s.user_Cpi >= j.jobOpening_RequirementPostGraduationCpi AND s.user_sscMarks>=j.jobOpening_RequirementSscPercentage AND s.user_hscMarks>=j.jobOpening_RequirementHscPercentage AND s.user_IsPlaced=0 AND c.company_Id=j.jobOpening_CompanyId AND p.programOpening_OpeningId=j.jobOpening_Id AND s.user_StudentId=?",[id],callback);
 }

 
 
};
 module.exports=jobperstudent;