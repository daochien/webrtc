exports.Stream = function(req, res, next){   
    res.render('stream.class_room', {'user': req.user});
}