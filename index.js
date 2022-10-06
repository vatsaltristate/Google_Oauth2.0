const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const app = express();
const PORT = process.env.PORT || 5000;

passport.use(
  new googleStrategy(
    {
      clientID:
        "349101197024-hth022hdpbgq1lbmum84dtvqnc8ecd73.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("ACCESS TOKEN :: :: ::",accessToken),
      console.log("REFRESH TOKEN :: :: ::",refreshToken),
      console.log("PROFILE :: :: ::",profile)
      
    }
  )
);

app.get('/auth/google', passport.authenticate('google',{
    scope: ["profile", "email"]
}));

app.get('/auth/google/callback', passport.authenticate('google'))

app.listen(PORT, (err) =>{
    console.log('ERROR :: :: ::',err)
    console.log(`Port is listening http://localhost:${PORT}`)
})