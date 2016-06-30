$( document ).ready(function() {
  var username = $('body').attr('data-loggedInUsername');
  var socket = io.connect('http://localhost:8080');

  socket.emit('user logged in', username);

  socket.on('session query', function (requesterName) {
    console.log('requesterName is: ' + requesterName);
    $('body').append(`<div class="sessionCard">${requesterName} is requesting a session with you</div>`)
    $('.startSession').click(function(e) {
      // open new tab in this teacher's browser or modal with session window
    })
    socket.emit('session initiated', sessionURL);
  })

  socket.on('session link', function (sessionURL) {
    // open new tab in this student's browser or modal with session window
  })


  // $('.userStatus').click(function(e) {
  //   var userStatus = e.target.val();
  //   socket.emit('status change', userStatus);
  // })

  $('.requestSession').click(function() {
    var teacher = $(this).attr('id');
    console.log('var teacher is: ' + teacher);
      socket.emit('request session', {teacher: teacher, student: username});
  })



});
