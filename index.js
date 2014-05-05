'use strict';

var PSON = require('pson');
var pson = new PSON.StaticPair(require('./dictionary.json'));

function Message(dest, data) {
    return pson.encode({ dest: dest, data: data });
}

Message.Welcome = function Welcome(id) {
    return pson.encode({ type: 'WELCOME', id: id });
};

Message.Trace = function Trace(position, who) {
    return pson.encode({ type: 'TRACE', position: position, id: who });
};

Message.Connected = function Connected(who, position) {
    return pson.encode({ type: 'CONNECTED', id: who, position: position });
};

Message.Disconnected = function Disconnected(who) {
    return pson.encode({ type: 'DISCONNECTED', id: who });
};

Message.Log = function Log(data) {
    return pson.encode({ type: 'LOG', data: data });
};

Message.decode = pson.decode.bind(pson);

module.exports = {
    Messages: Message
};
