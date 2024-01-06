document.getElementById('btn').addEventListener('click', function() {
    // Get user inputs
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var email= document.getElementById('email').value;

    // Construct the mailto link with user inputs
    var mailtoLink = 'mailto:jobisaacmaina22@gmail.com?subject=Subject&body=Name: ' + encodeURIComponent(name) +
                     '%0D%0A%0D%0AMessage: ' + encodeURIComponent(message) +
                     '%0D%0A%0D%0AEmail: ' + encodeURIComponent(email);

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
});

