const loginForm=document.getElementById('loginForm')
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let username = document.getElementById("username");
  let password = document.getElementById("password");
  let thanksform=document.getElementById('thanksform')
  let submit_icon=document.getElementById('submit_icon')

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    // alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    // document.body.textContent = `This form has a username of ${username.value} and password of ${password.value}`
    document.body.innerHTML =`<h1>This form has a username of ${username.value} and password of ${password.value}</h1>`
    document.body.innerHTML =`<div id="thanksform">
    <div> <img src="submit-icon.png" alt=""></div>
    <div class="text"><h1>Thank You</h1></div>
    <div class="text"><h3>Thanks ${username.value} for submitting your contact details.</h3></div>
    </div>`
    username.value = "";
    password.value = "";
  }
});

