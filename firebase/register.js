var login_btn = document.querySelector("#login_btn");

function createUser (event){
	var email_txt = document.querySelector("#email_txt");
	var password_txt = document.querySelector("#password_txt");
	console.log("click " + email_txt.value)

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
  // ...
});
}

login_btn.addEventListener("click", createUser)