$( document ).ready(function() {
  var username = $('body').attr('data-loggedInUsername');
  var socket = io.connect('http://localhost:9000');

  socket.emit('user logged in', username);

// click listener to emit session request
  $('.session-request').click(function() {
    var teacher = $(this).closest('.card').attr('data-teacherusername');
    var sessionType = $(this).text();
    var studentPhoto = $('#avatar-dropdown').attr('src');

      socket.emit('request session', {teacher: teacher, student: username, studentPhoto: studentPhoto, sessionType: sessionType});
  })

// socket listener to receive session request in modal
  socket.on('session query', function (modalInfo) {
    var sessionUsersString = username + '#' + modalInfo.student;
    var sessionURL = '/connect/' + sessionUsersString
    var teacherPhoto = $('#avatar-dropdown').attr('src')
    var sessionLinkObj = {sessionURL: sessionURL, teacherPhoto: teacherPhoto, teacherName: username}
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
      console.log(sessionLinkObj);
      socket.emit('session initiated', sessionLinkObj);
    })

    $('#no').click(function() {
      // socket.emit('session declined')
      $("#overlay").addClass("hide");
      $("body").css({overflow: "visible"});
    })

  })

  socket.on('session link', function (sessionLinkObj) {
    // launch second modal
    console.log(sessionLinkObj);

    $('#teacherPhoto').attr('src', sessionLinkObj.teacherPhoto);
    $('#responding-user').text(sessionLinkObj.teacherName);
    $('#yes2').parent('a').attr('href', sessionLinkObj.sessionURL);
    // show modal
    $("#overlay2").removeClass("hide");
    $("body").css({overflow: "hidden"});

    $('#yes2').click(function() {

    })

    $('#no2').click(function() {
      // socket.emit('session declined')
      $("#overlay2").addClass("hide");
      $("body").css({overflow: "visible"});
    })
  })

  socket.on('status change', function(userStatusChange) {
    var statusChangeUser = userStatusChange.username;
    var userStatus = userStatusChange.status;
    var cardToChange = $('.card').attr('data-teacherusername', statusChangeUser).closest('.status-container');

    if (userStatus === "available") {
      $(cardToChange).html("<span class='status-text'>Available</span><span class='status-available'></span>");
    }
    else {
      $(cardToChange).html("<span class='status-text'>Unavailable</span><span class='status-unavailable'></span>");
    }
  })

// socket emmission when user changes status manually
  // $('.userStatus').click(function(e) {
  //   var userStatus = {username: username, status: e.target.val()};
  //   socket.emit('status change', userStatus);
  // })

  // socket.on('status change', function(userAndStatus) {
  //   var statusUser = userAndStatus.username;
  //   var status = userAndStatus.status;
  //   code needed here to change status of specific user in the dom
  // })





});
