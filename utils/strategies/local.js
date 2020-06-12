const UserService = require('../../app/users/services');
const userService = new UserService();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
    userService.auth(username, password)
        .then(res => done(null, res))
        .catch(err => done(null, false, {'message': 'Incorrecto'}));
}));
