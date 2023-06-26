
const { RFDriver } = require('homey-rfdriver');
const SomfyRFSignal = require('./SomfyRFSignal');

module.exports = class extends RFDriver {
  static SIGNAL = SomfyRFSignal;
};
