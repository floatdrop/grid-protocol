'use strict';

var ProtoBuf = require('protobufjs');
var message = require('./proto/message.proto.json');

function load(object) {
    var builder = ProtoBuf.newBuilder();
    builder.create(object);
    builder.reset();
    return builder;
}

module.exports = {
    Message: load(message)
};
