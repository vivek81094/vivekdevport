const loginForm = document.getElementById("loginForm");
window.onload = function openNewWindow() {
  document.getElementById("contact_name").value = "";
  document.getElementById("contact_email").value = "";
  document.getElementById("contact_subject").value = "";
  document.getElementById("message").value = "";
};
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
 
  let username = document.getElementById("contact_name");
  let email = document.getElementById("contact_email");
  let subject = document.getElementById("contact_subject");
  let message = document.getElementById("message");
  

  let newWindow = window.open('', '_blank');
  newWindow.document.write(`<html> <link rel="stylesheet" href="submitform.css"> <body> <div id="thanksform"> <img src="submit-icon.png"  alt=""> 
  <div class="text"><h3>Thanks ${username.value} for submitting your contact details.</h3></div>
  
  </div> <body> </html>`);
  username.value='';
  email.value='';
  subject.value='';
  message.value='';

 
});
