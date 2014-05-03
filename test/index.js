/* global it */

'use strict';

var should = require('should');

it('should require protocols without errors', function () {
    require('../');
});

it('should create Welcome message', function () {
    var Message = require('../').Message;
    var msg = new Message(Message.Type.WELCOME, 'id');
    should.exist(msg);
    msg.dest.should.eql('id');
});
