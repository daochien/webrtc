var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var UserSchema = new Schema({
    email: {type: String, require: true, trim: true},
    password: {type: String, require: true},
    username: {type: String, require: true},
    level: {type: Number, require: true},
    created_at: {type: Date, default : Date.now}
}, {collection : 'users' });

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser  = function(newUser){
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, function(err, hash){
            newUser.password = hash;
            newUser.save();
        });
    });
    
}