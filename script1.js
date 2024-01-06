document.getElementById('btn').addEventListener('click', function() {
   
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var email= document.getElementById('email').value;

  
    var mailtoLink = 'mailto:jobisaacmaina22@gmail.com?subject=Subject&body=Name: ' + encodeURIComponent(name) +
                     '%0D%0A%0D%0AMessage: ' + encodeURIComponent(message) +
                     '%0D%0A%0D%0AEmail: ' + encodeURIComponent(email);

   
    window.location.href = mailtoLink;
});

