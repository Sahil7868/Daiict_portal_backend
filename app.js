var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var index = require('./routes/index');
var program = require('./routes/program');
var areaofinterest = require('./routes/areaofinterest');
var forgotpass = require('./routes/forgotpassword');
var user = require('./routes/user');
var alltags = require('./routes/alltags');
var companyjobprofile = require('./routes/comjobprofile');
var companyquestions = require('./routes/companyquestions');
var jobprofile = require('./routes/jobprofile');
var questiontag = require('./routes/questiontag');
var messagetemplate = require('./routes/messagetemplate');
var notification = require('./routes/notification');
var notification_recever = require('./routes/notification_recever');
var resume = require('./routes/resume');
var studentprogress = require('./routes/studentprogress');
var interviewexperience = require('./routes/interviewexperience');
var interviewround = require('./routes/interviewround');
var interviewrounddetail = require('./routes/interviewrounddetail');
var placedstudent = require('./routes/placedstudent');
var question = require('./routes/question');
var company = require('./routes/company');
var dreamcompany = require('./routes/dreamcompany');
var jobopening = require('./routes/jobopening');
var jobopeningreg = require('./routes/jobopeningregistration');
var pseason = require('./routes/placementseason');
var progOpening = require('./routes/programopening');
var spcPolicy = require('./routes/spcpolicy');

// custom apis
var jobasperstudent = require('./routes/jobopening_asperstudent');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ limit:'50mb',extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/program', program);
app.use('/areaofinterest', areaofinterest);
app.use('/forgotpassword', forgotpass);
app.use('/user', user);
app.use('/alltags',alltags);
app.use('/companyjobprofile',companyjobprofile);
app.use('/companyquestions',companyquestions);
app.use('/jobprofile',jobprofile);
app.use('/questiontag',questiontag);
app.use('/messagetemplate',messagetemplate);
app.use('/notification',notification);
app.use('/notification_recever',notification_recever);
app.use('/resume',resume);
app.use('/studentprogress',studentprogress);
app.use('/placedstudent', placedstudent);
app.use('/interviewexperience', interviewexperience);
app.use('/interviewround', interviewround);
app.use('/interviewrounddetail', interviewrounddetail);
app.use('/question', question);
app.use('/company',company);
app.use('/dreamcompany',dreamcompany);
app.use('/jobopening',jobopening);
app.use('/jobopeningregistration',jobopeningreg);
app.use('/placementseason',pseason);
app.use('/programopening',progOpening);
app.use('/spcpolicy',spcPolicy);
app.use('/jobasperstudent',jobasperstudent);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
