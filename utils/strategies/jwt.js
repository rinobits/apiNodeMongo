const passport = require('passport');
const {Strategy,ExtractJwt} = require('passport-jwt');
const {config} = require('../../config');
const {authJwtSecret} = config;

passport.use(new Strategy({
    secretOrKey: authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, (tokenPayload, cb) => {
    cb(null, tokenPayload);
}));