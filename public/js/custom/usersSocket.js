$( document ).ready(function() {
  var username = $('body').attr('data-loggedinusername');
  var socket = io.connect('https://codeguild.dyndns.org/');
  // var socket = io.connect('10.3.34.130:9000');


  socket.emit('user logged in', username);

// click listener to emit session request
  $('.session-request').click(function(e) {
    e.preventDefault();
    var teacher = $(this).closest('.card').attr('data-teacherusername');
    var sessionType = $(this).text();
    var studentPhoto = $('body').attr('data-loggedinuserphoto');

    socket.emit('request session', {teacher: teacher, student: username, studentPhoto: studentPhoto, sessionType: sessionType});
  })

// socket listener to receive session request in modal
  socket.on('session query', function (modalInfo) {
    var sessionUsersString = username + '#' + modalInfo.student;
    var sessionURL = '/connect/' + sessionUsersString
    var teacherPhoto = $('body').attr('data-loggedinuserphoto');
    var sessionLinkObj = {sessionURL: sessionURL, teacherPhoto: teacherPhoto, teacherName: username, student: modalInfo.student}
    // put received student info into modal

    $('#studentPhoto').attr('src', modalInfo.studentPhoto);
    $('#requesting-user').text(modalInfo.student);
    $('#session-type').text(modalInfo.sessionType);
    // show modal
    $("#overlay").removeClass("hide");
    $("body").css({overflow: "hidden"});

    $('#yes').click(function(e) {
      e.preventDefault();
      // open new page in this teacher's browser
      console.log('once #yes is clicked sessionLinkObj is: ' + JSON.stringify(sessionLinkObj));
      socket.emit('session initiated', sessionLinkObj);
      window.location.href = sessionURL;
    })

    $('#no').click(function(e) {
      // socket.emit('session declined')
      e.preventDefault();
      $("#overlay").addClass("hide");
      $("body").css({overflow: "visible"});
    })

  })

  socket.on('session link', function (sessionLinkObj) {
    // launch second modal
    console.log("final step hit! sessionLinkObj is: " + JSON.stringify(sessionLinkObj));

    // $('#teacherPhoto').attr('src', sessionLinkObj.teacherPhoto);
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
    console.log('status change is: ' + JSON.stringify(userStatusChange));
    var statusChangeUser = userStatusChange.username;
    var userStatus = userStatusChange.status;
    var cardToChange = $("div[data-teacherusername='" + statusChangeUser + "']").find('.status-container');
    console.log('cardToChange is: ' + JSON.stringify(cardToChange));

    if (userStatus === "available") {
      cardToChange.html("<span class='status-text'>Available</span> <span class='status-available'></span>");
      cardToChange.after("<div class='dropdown'><button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'> Connect <span class='caret'></span> </button> <ul class='dropdown-menu' aria-labelledby='dropdownMenu1'> <li><a class='session-request'>Learn</a></li> <li role='separator' class='divider'></li> <li><a class='session-request'>Review</a></li> </ul></div>")
    }
    else {
      cardToChange.html("<span class='status-text'>Unavailable</span> <span class='status-unavailable'></span>");
      cardToChange.next().remove();
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
