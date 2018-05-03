var db = require('../dbconnection'); //reference of dbconnection.js

var ques = {

    getAllque: function (callback) {

        return db.query("Select * from tblQuestion", callback);

    },
     getrecentques: function (callback) {

        return db.query("select * from tblQuestion ORDER BY question_Id DESC limit 1", callback);

    },
    
    getQueById: function (id, callback) {

        return db.query("select * from tblQuestion where question_Id=?", [id], callback);
    },
    addQue: function (ques, callback) {
			console.log(ques)
        return db.query("INSERT INTO tblQuestion (question_Id, question_Title,question_Description,question_Solution,question_DifficultyLevel,question_IsActive,question_CreatorUserId,question_ApprovedByUserId) VALUES (NULL, ?,?,?,?,?,?,?)",
            [ques.question_Title, ques.question_Description, ques.question_Solution, ques.question_DifficultyLevel, ques.question_IsActive, ques.question_CreatorUserId, ques.question_ApprovedByUserId], callback);
    },
    deleteQue: function (id, callback) {
        return db.query("delete from tblQuestion where question_Id=?", [id], callback);
    },

    updateQue: function (id, ques, callback) {
        return db.query("update tblQuestion set question_Title=?,question_Description=?,question_Solution=?,question_DifficultyLevel=?,question_IsActive=?,question_CreatorUserId=?,question_ApprovedByUserId=? where question_Id=?",
            [ques.question_Title, ques.question_Description, ques.question_Solution, ques.question_DifficultyLevel, ques.question_IsActive, ques.question_CreatorUserId, ques.question_ApprovedByUserId, id], callback);
    }
};
module.exports = ques;