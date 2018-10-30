var User = require('../models/user');

exports.register = function(req, res, next){
   
    res.render('register', { title: 'Register', errors: null });
}

exports.create = function(req, res, next){
    req.checkBody('email', 'Đây không phải là email').isEmail();
    req.checkBody('password', 'Vui lòng nhập password').notEmpty();
    req.checkBody('password_confirmation', 'Hai mật khẩu không trùng nhau').equals(req.body.password);
    req.checkBody('username', 'Vui lòng nhập username').notEmpty();
    req.checkBody('level', 'Vui lòng chọn level').notEmpty();
    req.checkBody('email', 'Vui lòng nhập email').notEmpty();
    var errors = req.validationErrors();
    if(errors){
        res.render('register', {errors: errors, title: 'Register'});
    }else{
        var newUser = new User({
            email: req.body.email,
            username: req.body.username,
            level: req.body.level,
            password: req.body.password
        });
        User.createUser(newUser);
        req.flash('success_msg', 'Đăng ký thành viên thành công');
        res.redirect('/');
    }
}

exports.login = function(req, res, next){
    res.render('login');
}
exports.signin = function(req, res, next){
    
}