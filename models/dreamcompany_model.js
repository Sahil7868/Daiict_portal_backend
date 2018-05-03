var db = require('../dbconnection'); //reference of dbconnection.js

var dreamcompany = {

    getAllDreamCompany: function (callback) {

        return db.query("Select * from tbldreamcompany", callback);

    },
    getDreamCompanyById: function (id, callback) {

        return db.query("select * from tbldreamcompany where dreamCompany_CompanyId = ?", [id], callback);
    },
    addDreamCompany: function (dreamcompany, callback) {

        return db.query("INSERT INTO tbldreamcompany(dreamCompany_CompanyId,dreamCompany_PlacementSeason_Id) VALUES (?,?)",
            [dreamcompany.dreamCompany_CompanyId,dreamcompany.dreamCompany_PlacementSeason_Id], callback);
    },
    deleteDreamCompany: function (id, callback) {
        return db.query("delete from tbldreamcompany where dreamCompany_CompanyId=?", [id], callback);
    },

    updateDreamCompany: function (id, dreamcompany, callback) {
        return db.query("update tbldreamcompany set dreamCompany_PlacementSeason_Id=? where dreamCompany_CompanyId=?",
            [dreamcompany.dreamCompany_PlacementSeason_Id, id], callback);
    }
};
module.exports = dreamcompany;