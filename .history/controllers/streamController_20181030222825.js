exports.Stream = function(req, res, next){   
    res.render('index', {'user': req.user});
}