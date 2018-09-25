// Toggle between seeing the password and not seeing it

// 1. A way to listen for when the checkbox is checked or unchecked.
const passApp = {};

//Reference all password fields
passApp.loginPassword = document.querySelector('#password');
passApp.currentPassword = document.querySelector('#current-password');
passApp.newPassword = document.querySelector('#new-pw');


// Listen for clicks on checkboxes and change input type of passwords
passApp.form = document.querySelector('form');
passApp.checkbox = document.querySelector('input[name="show-passwords"]');

passApp.form.addEventListener('submit', (e) => {

    e.preventDefault();

}, false);




// 2. reference the password field and switch from password to text and vice versa


