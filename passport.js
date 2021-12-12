const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport=require ("passport")
const CLIENT_ID="582480542332-enpurjpo7hq51u85vk6eca9fst73p66p.apps.googleusercontent.com"
const CLIENT_SECRET="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"



passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile )
  }
));

passport.serializeUser((user,done)=>{
    done (null,user)
})
passport.deserializeUser((user,done)=>{
    done (null,user)
})