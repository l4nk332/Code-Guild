$( document ).ready(function() {
  var username = $('body').attr('data-loggedInUsername');
  var socket = io.connect('http://localhost:9000');

  socket.emit('user logged in', username);

  socket.on('session query', function (requesterName) {

    $('body').append(`${requesterName.teacher}${requesterName.student}${requesterName.studentPhoto}${requesterName.sessionType} is requesting a session with you</div>`)
    $('.startSession').click(function(e) {
      // open new page in this teacher's browser
      var sessionUsersString = username + '/' + requesterName;
    })
    socket.emit('session initiated', sessionURL);
  })

  socket.on('session link', function (sessionURL) {
    // open new page in this student's browser
  })

  socket.on('status change', function(userStatusChange) {
    var statusChangeUser = userStatusChange.username;
    var userStatus = userStatusChange.status;
    var cardToChange = $('.card').attr('data-teacherusername').val(loggedOutUser).closest('.status-container');

    if (user.available) {
      $(cardToChange).html("<span class='status-text'>Available</span><span class='status-available'></span>")
    }
    else {}
      // <span class="status-text">Unavailable</span>
      // <span class="status-unavailable"></span>
  })


  $('.userStatus').click(function(e) {
    var userStatus = {username: username, status: e.target.val()};
    socket.emit('status change', userStatus);
  })

  // socket.on('status change', function(userAndStatus) {
  //   var statusUser = userAndStatus.username;
  //   var status = userAndStatus.status;
  //   code needed here to change status of specific user in the dom
  // })

  $('.session-request').click(function() {
    var teacher = $(this).closest('.card').attr('data-teacherusername');
    var sessionType = $(this).text();
    var studentPhoto = $('#avatar-dropdown').attr('src');

      socket.emit('request session', {teacher: teacher, student: username, studentPhoto: studentPhoto, sessionType: sessionType});
  })



});
