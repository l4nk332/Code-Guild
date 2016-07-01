$( document ).ready(function() {
  var username = $('body').attr('data-loggedInUsername');
  var socket = io.connect('https://codeguild.dyndns.org:9000');

  socket.emit('user logged in', username);

  socket.on('session query', function (modalInfo) {
    var sessionUsersString = username + '#' + modalInfo.student;
    var sessionURL = 'connect/' + sessionUsersString

    // put received student info into modal
    $('#studentPhoto').attr('src', modalInfo.studentPhoto);
    $('#requesting-user').text(modalInfo.student);
    $('#session-type').text(modalInfo.sessionType);
    $('#yes').parent('a').attr('href', sessionURL);
    // show modal
    $("#overlay").removeClass("hide");
    $("body").css({overflow: "hidden"});

    $('#yes').click(function() {
      // open new page in this teacher's browser
      socket.emit('session initiated', 'localhost:3000/connect/' + sessionUsersString);
    })

    $('#no').click(function() {
      // socket.emit('session declined')
      $("#overlay").addClass("hide");
      $("body").css({overflow: "visible"});
    })

  })

  socket.on('session link', function (sessionURL) {
    // open new page in this student's browser
    console.log(sessionURL);
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
