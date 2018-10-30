exports.Stream = function(req, res, next){   
    res.render('stream.index', {'user': req.user});
}