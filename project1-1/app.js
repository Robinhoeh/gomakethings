// Toggle between seeing the password and not seeing it

// 1. A way to listen for when the checkbox is checked or unchecked.
const app = {};

//Reference all password fields
app.loginPassword = document.querySelector('#password');
app.currentPassword = document.querySelector('#current-pw');
app.newPassword = document.querySelector('#new-pw');
app.document = document;



// Listen for clicks on checkboxes and change input type of passwords
// app.form = document.querySelector('form');
// app.checkbox = document.querySelector('input[name="show-passwords"]');

app.document.addEventListener('click', function (e) {
  if (e.target.id === 'show-password') {
    if(app.loginPassword.getAttribute('type') === 'password') {
      app.loginPassword.setAttribute('type', 'text');
    } else {
      app.loginPassword.setAttribute('type', 'password');
    }
  }
  if (e.target.id === 'show-passwords') {
    if(app.currentPassword.getAttribute('type') === 'password' && app.newPassword.getAttribute('type') === 'password') {
      app.currentPassword.setAttribute('type', 'text');
      app.newPassword.setAttribute('type', 'text');
    } else {
      app.currentPassword.setAttribute('type', 'password');
      app.newPassword.setAttribute('type', 'password');
    }
  }
});





// 2. reference the password field and switch from password to text and vice versa


