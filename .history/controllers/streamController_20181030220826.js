exports.Stream = function(req, res, next){
    if(req.user.level == 1){
        res.render('stream.teacher', {'teacher': req.user});
    }
    res.render('stream.student', {'student': req.user});
}