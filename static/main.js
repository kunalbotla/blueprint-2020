$(document).ready(function(){
  $('#login').click(function(){
    const username = $('#username').val();
    console.log(username);
    $.post('/login', { //send a login request to the backend
      username: username,
    }).done(function() {
      document.location.reload();
    });
  });

  $('#logout').click(function(){
    const message = $('#message').val();
    $.post('/logout', {}).done(function() {
      document.location.reload();

    });
  });


  $('#submit').click(function(){
    const message = $('#message').val();
    $.post('/message', { //send a post request to the backend
    message: message
    }).done(function() {
      document.location.reload();
    });
  });
});
