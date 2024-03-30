let emailInput=document.querySelector("#email");
let passwordInput=document.querySelector("#password");
let emailErrorDiv=document.querySelector("#emailError");
let passwordErrorDiv=document.querySelector("#passwordError");
let button=document.querySelector("button");

let emailChecked=false;
let passwordChecked=false;
function emailCheck() {
    let email=emailInput.value;
    let atPresent=false;
    let dotPresent=false;
    for(let i=0;i<email.length;i++) {
        if(email.charAt(i)=='@') atPresent=true;
        if(email.charAt(i)=='.') dotPresent=true;
    }
    if(email.length>=3 && atPresent && dotPresent) {
        if(passwordChecked) passwordErrorDiv.style.display="block";
        emailErrorDiv.style.display="none";
        emailChecked=true;
    }
    else {
        emailErrorDiv.style.display="block";
        emailChecked=false;
        passwordErrorDiv.style.display="none";
    }
}

function passwordCheck() {
    let password=passwordInput.value;
    if(password.length>8) {
        passwordChecked=true;
        if(emailChecked) {
            passwordErrorDiv.style.display="block";
            passwordErrorDiv.innerText="All good to go!";
            passwordErrorDiv.style.color="green";
        }
    }
    else {
        passwordChecked=false;
        passwordErrorDiv.innerText="Make sure password is more than 8 characters.";
        passwordErrorDiv.style.color="red";
    }
}

button.addEventListener("click",afterSubmit());

function afterSubmit() {
    alert("Successful signup!");
    // if(emailChecked && passwordChecked) {
    //     alert("Successful signup!");
    // }
    // else {
    //     alert("Fill all the fields");
    // }
    // console.log(emailChecked + " " + passwordChecked);
}