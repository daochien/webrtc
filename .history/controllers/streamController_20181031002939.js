var Peer = require('simple-peer');
exports.Stream = function(req, res, next){
    var key = '';
    var location.hash = '#1';
    var p = new Peer({initiator: location.hash === '#1', trickle: false});
    p.on('singnal', token => {
        key = token;
    });
    res.send(key);
    res.render('class_room', {'user': req.user, title: 'Stream video'});
}