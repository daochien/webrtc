exports.Stream = function(req, res, next){
    if(req.user.level == 1){
        res.render('stream.teacher', {'user': req.user});
    }
    res.render('stream.student', {'user': req.user});
}