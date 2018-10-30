exports.Stream = function(req, res, next){   
    res.render('class_room', {'user': req.user, title: 'Stream video'});
}