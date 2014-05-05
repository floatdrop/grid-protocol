/* global it */

'use strict';

var should = require('should');

it('should require protocols without errors', function () {
    require('../');
});

it('should create Welcome and decode message', function () {
    var Message = require('../').Messages;
    var msg = new Message.Welcome('id');
    should.exist(msg);
    msg = Message.decode(msg);
    console.log(msg);
    //msg.id.should.eql('id');
});
