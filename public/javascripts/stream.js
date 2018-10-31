const wrtc = require('electron-webrtc')
const Peer = require('simple-peer');
const p = new Peer({initiator: location.hash === "#1", trickle: false});
p.on('signal', token => {
    $("#token_stream_teacher").val(JSON.stringify(token));
});

$("body").on('click', '#connect_class', function(){
    const friendSignal = JSON.parse($('#get_token_stream').val());
    console.log(friendSignal);
    p.signal(friendSignal);
});

p.on('connect', function(){
    console.log('Đã connect giáo viên vs học viên');
});

console.log('xin chao cac ban');