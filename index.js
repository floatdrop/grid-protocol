'use strict';

var ProtoBuf = require('protobufjs');
var message = require('./proto/message.json');

function load(object) {
    return ProtoBuf.loadJson(JSON.stringify(object));
}

module.exports = {
    Message: load(message).build('Message')
};
