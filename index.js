'use strict';

var ProtoBuf = require('protobufjs/ProtoBuf.min.js');
var message = require('./proto/message.protojs');

module.exports = {
    Message: ProtoBuf.loadProto(message)
};
