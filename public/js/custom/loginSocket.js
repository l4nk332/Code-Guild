$( document ).ready(function() {
  var username = $('ul').attr('[data-loggedInUsername]');
  var socket = io();

  socket.emit('user logged in', username)

  socket.on('session query', function (requesterName) {
    $('').append(`<p>${requesterName} is requesting a session with you</p>`)
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
