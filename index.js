'use strict';

var PSON = require('pson');
var pson = new PSON.StaticPair(require('./dictionary.json'));

module.exports = {
    Messages: {
        Welcome: function Welcome(id) {
            return pson.encode({ type: 'WELCOME', id: id });
        },
        Trace: function Trace(position, who) {
            return pson.encode({ type: 'TRACE', position: position, id: who });
        },
        Connected: function Connected(who, position) {
            return pson.encode({ type: 'CONNECTED', id: who, position: position });
        },
        Disconnected: function Disconnected(who) {
            return pson.encode({ type: 'DISCONNECTED', id: who });
        },
        Log: function Log(payload) {
            return pson.encode({ type: 'LOG', payload: payload });
        },
        decode: pson.decode.bind(pson)
    }
};
