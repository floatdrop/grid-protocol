/* global it */

'use strict';

var should = require('should');

it('should require protocols without errors', function () {
    require('../');
});

it('should encode and decode general message', function () {
    var Message = require('../').Messages;

    var encoded = new Message({}, { some: 'data' });
    should.exist(encoded);

    var decoded = Message.decode(encoded.compact());
    decoded.dest.should.eql({});
    decoded.data.some.should.eql('data');
});

it('should encode and decode Welcome message', function () {
    var Message = require('../').Messages;

    var encoded = new Message.Welcome('id');
    should.exist(encoded);

    var decoded = Message.decode(encoded.compact());
    decoded.id.should.eql('id');
});
