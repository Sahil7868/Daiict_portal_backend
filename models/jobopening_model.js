var db=require('../dbconnection'); //reference of dbconnection.js
 
var jobopening={
 
    getAllJobOpening:function(callback){
    
        return db.query("Select * from tbljobopening",callback);
    
    },
	getrecentopening: function (callback) {
        return db.query("select * from tbljobopening ORDER BY jobOpening_Id DESC limit 1", callback);
    },
    getJobOpeningById:function(id,callback){
            
        return db.query("select * from tbljobopening where jobOpening_Id=?",[id],callback);
    },
    addJobOpening:function(jobopening,callback){

        return db.query("INSERT INTO tbljobopening (jobOpening_Id,jobOpening_CompanyId ,jobOpening_JobProfileId ,jobOpening_HrContact, jobOpening_HrName, jobOpening_PackageForJob ,  jobOpening_StipendForInternship ,  jobOpening_RequirementInternship ,  jobOpening_RequirementInternshipJob ,  jobOpening_RequirementJob , jobOpening_RegistrationStartDate ,  jobOpening_RegistrationEndDate ,  jobOpening_Information,  jobOpening_RequirementSscPercentage , jobOpening_RequirementHscPercentage , jobOpening_RequirementGraduationCpi ,  jobOpening_RequirementPostGraduationCpi ,jobOpening_PlacementSeasonId, jobOpening_IsSummerInternship) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [jobopening.jobOpening_Id,jobopening.jobOpening_CompanyId ,jobopening.jobOpening_JobProfileId ,jobopening.jobOpening_HrContact,jobopening.jobOpening_HrName,jobopening.jobOpening_PackageForJob , jobopening.jobOpening_StipendForInternship ,  jobopening.jobOpening_RequirementInternship ,  jobopening.jobOpening_RequirementInternshipJob ,  jobopening.jobOpening_RequirementJob , jobopening.jobOpening_RegistrationStartDate ,  jobopening.jobOpening_RegistrationEndDate ,  jobopening.jobOpening_Information,  jobopening.jobOpening_RequirementSscPercentage , jobopening.jobOpening_RequirementHscPercentage , jobopening.jobOpening_RequirementGraduationCpi ,  jobopening.jobOpening_RequirementPostGraduationCpi ,jobopening.jobOpening_PlacementSeasonId, jobopening.jobOpening_IsSummerInternship],callback);

    },
    deleteJobOpening:function(id,callback){
        return db.query("delete from tbljobopening where jobOpening_Id=?",[id],callback);
    },

    updateJobOpening:function(id,jobopening,callback){

        return db.query("update tbljobopening set jobOpening_CompanyId=? ,jobOpening_JobProfileId=? ,jobOpening_HrContact=?, jobOpening_HrName=?, jobOpening_PackageForJob=?,  jobOpening_StipendForInternship=?,  jobOpening_RequirementInternship=? ,  jobOpening_RequirementInternshipJob=? ,  jobOpening_RequirementJob=? , jobOpening_RegistrationStartDate=? ,  jobOpening_RegistrationEndDate=? ,  jobOpening_Information=?,  jobOpening_RequirementSscPercentage=? , jobOpening_RequirementHscPercentage=? , jobOpening_RequirementGraduationCpi=? ,  jobOpening_RequirementPostGraduationCpi=? ,jobOpening_PlacementSeasonId=?, jobOpening_IsSummerInternship=? where jobOpening_Id=?",
        [jobopening.jobOpening_CompanyId ,jobopening.jobOpening_JobProfileId ,jobopening.jobOpening_HrContact,jobopening.jobOpening_HrName,jobopening.jobOpening_PackageForJob , jobopening.jobOpening_StipendForInternship ,  jobopening.jobOpening_RequirementInternship ,  jobopening.jobOpening_RequirementInternshipJob ,  jobopening.jobOpening_RequirementJob , jobopening.jobOpening_RegistrationStartDate ,  jobopening.jobOpening_RegistrationEndDate ,  jobopening.jobOpening_Information,  jobopening.jobOpening_RequirementSscPercentage , jobopening.jobOpening_RequirementHscPercentage , jobopening.jobOpening_RequirementGraduationCpi ,  jobopening.jobOpening_RequirementPostGraduationCpi ,jobopening.jobOpening_PlacementSeasonId, jobopening.jobOpening_IsSummerInternship,id],callback);

    }
 
};
 module.exports=jobopening;