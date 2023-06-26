'use strict';

const DeviceReceiver = require('../../lib/DeviceReceiver');

module.exports = class extends DeviceReceiver {
  static CAPABILITIES = {
    onoff({ value, opts, data }) {
      let cmd;

      // Translate te onn/off command to the window covering state command
      if(value) {
        cmd = 'up'
      }
      else {
        cmd = 'down'
      }

      return {
        ...data,
        rollingCode: opts.rollingCode,
        cmd,
        extCmd: data.extCmd,
      };
    },
  };
};
