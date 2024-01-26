const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth2').Strategy; 

passport.serializeUser((user , done) => { 
	done(null , user); 
}) 
passport.deserializeUser(function(user, done) { 
	done(null, user); 
}); 

passport.use(new GoogleStrategy({ 
	clientID:"XXXX_YYYY_ZZZZ", // Your Credentials here. 
	clientSecret:"XXXX_YYYY_ZZZZ", // Your Credentials here. 
	callbackURL:"http://localhost:3000/auth/callback", 
	passReqToCallback:true
}, 
function(request, accessToken, refreshToken, profile, done) { 
	return done(null, profile); 
} 
));
