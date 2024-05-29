require('dotenv').config();


const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');




passport.use(new GoogleStrategy(
   { 
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SERCRET,
    callbackURL: "/api/users/google/callback",
    scope: ['profile', 'email']
    },
    
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }

));

passport.serializeUser(function(user, done) {
    done(null, user);
  }
);

passport.deserializeUser(function(user, done) {
    done(null, user);
  }
);