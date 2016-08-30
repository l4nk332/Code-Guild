var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var routes = require('./routes/index');
var users = require('./routes/users');
var connect = require('./routes/connect');
var about = require('./routes/about');
var login = require('./routes/login');
var logout = require('./routes/logout');
var about = require('./routes/about');
var register = require('./routes/register');
var testing = require('./routes/testing');
var knex = require('./db/knex');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(9000);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: [
    process.env.SESSION_KEY1,
    process.env.SESSION_KEY2,
    process.env.SESSION_KEY3
  ]}));

app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/logout', logout);
app.use('/about', about);
app.use('/register', register);
app.use('/testing', testing);
app.use('/connect', connect);
app.get('/firepad/:id', function(req, res, next) {
	res.render('firepad.nunjucks', {id: req.params.id});
});

var loggedInUsers = {};

io.on('connection', function (socket) {

  socket.on("user logged in", function (username) {
    console.log('username is: ' + username);
    loggedInUsers[username] = socket.id;
    knex('users').where('username', '=', username).update('available', true).then(function(results) {});
    var userStatus = {username: username, status: "available"};
    console.log(username + 'socket connected!');
    console.log('loggedInUsers is: ' + JSON.stringify(loggedInUsers));
    socket.broadcast.emit('status change', userStatus);

    socket.on('request session', function(teacherStudent){
      var teacherSocketId = loggedInUsers[teacherStudent.teacher];
      socket.broadcast.to(teacherSocketId).emit('session query', teacherStudent);
    });

    socket.on('session initiated', function(sessionLinkObj) {
      console.log('sessionLinkObj received in app.js!: ' + JSON.stringify(sessionLinkObj));
      var studentSocketId = loggedInUsers[sessionLinkObj.student];
      console.log('loggedInUsers is: ' + JSON.stringify(loggedInUsers), 'student and studentSocketId is: ' + sessionLinkObj.student + ' '+ studentSocketId)
      socket.broadcast.to(studentSocketId).emit('session link', sessionLinkObj);
    })

    socket.on('disconnect', function () {
      delete loggedInUsers[username];
      console.log('disconnected username is: ' + username);
      knex('users').where('username', '=', username).update('available', false).then(function(results) {});
      userStatus = {username: username, status: "unavailable"};
      console.log(userStatus.username + ' socket disconnected!');
      socket.broadcast.emit('status change', userStatus);
    });

    // socket.on('status change', function(userStatus){
    //   socket.broadcast.emit('status change', userStatus);
    //
    //   var userStatusChange = {username: username, status: available}
    //   var available;
    //
    //   if (userStatus.status === 'available') {
    //     available = true;
    //   } else {
    //     available = false;
    //   }
    //
    //   knex('users').where('username', userStatus.username).update('available', available);
    // });

  })

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	res.status(404);
	res.render('404.nunjucks');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
