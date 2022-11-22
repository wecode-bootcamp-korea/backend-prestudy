const signInButton = document.querySelector("#signInBtn");
const axios = require("axios");

const signIn = (e) => {
  const signInOptions = {
    url: 'localhost:8000/signup',
    method: 'POST', 
  }

  axios.post(signInOptions);
}

signInButton.addEventListener(signIn);