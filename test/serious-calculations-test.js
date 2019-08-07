var assert = require('assert'),
    vows = require('vows'),
    seriousCalculations = require('../');

vows.describe('serious-calculations').addBatch({
  'when performing serious calculations': {
    topic: function() {
      return seriousCalculations.performSeriousCalculations(434);
    },
    'result should be valid': function (topic) {
      assert.isNumber(topic);
      assert.equal(topic, 9);
    }
  }
}).export(module);
