$( document ).ready(function() {
  var username = $('ul').attr('[data-loggedInUsername]');
  var socket = io();

  socket.emit('user logged in', username)

  socket.on('session query', function (requesterName) {
    $('body').append(`<div class="sessionCard">${requesterName} is requesting a session with you</div>`)
    $('.startSession').click(function(e) {
      // open new tab in this teacher's browser or modal with session window
    })
    socket.emit('session initiated', sessionURL);
  }

  socket.on('session link', function (sessionURL) {
    // open new tab in this student's browser or modal with session window
  }

  socket.on()
  $('.userStatus').click(function(e) {
    var userStatus = e.target.val();
    socket.emit('status change', userStatus);
  })

  $('.requestSession').click(function(e) {
    var teacher = e.target.val();
      socket.emit('request session', teacher, username)
  })



});
