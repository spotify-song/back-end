const express = require("express");
const fetch = require('node-fetch');
const querystring = require("querystring");

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = process.env.REDIRECT_URI;  // Your redirect uri

const app = express();

const scope =
  "user-read-private user-read-email streaming user-read-currently-playing user-read-playback-state user-library-read user-library-modify user-modify-playback-state playlist-modify-public playlist-modify-private";



function  generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};


app.get('/login', (req, res) => {
     var state = generateRandomString(16);
       res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scope}&${state}&show_dialog=true`);
  })


app.get('/logged', async (req, res) => {
   
     let body ={
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri,
        client_id,
        client_secret
     }
     
await fetch('https://accounts.spotify.com/api/token', {
   method: 'POST',
   headers: {
      "Content-Type": 'application/x-www-form-urlencoded',
      "Accept": "application/json"
   },
   body: encodedFormData(body)
}).then(response => response.json()).then(data => {
   let query = querystring.stringify(data);
   res.redirect(`${process.env.REDIRECT_TO}/${query}`);
})

  } )


function encodedFormData(data) {
   return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
}
 
module.exports = app;
