'use strict';

const DeviceReceiver = require('../../lib/DeviceReceiver');
const { RFUtil } = require('homey-rfdriver');

module.exports = class extends DeviceReceiver {
  /**
   * Inverts the tit command
   *
   * @param type
   * @returns {string|*}
   */
  static invertTilt(type) {
    if (type === 'tilt_up') {
      return 'tilt_down';
    }
    if (type === 'tilt_down') {
      return 'tilt_up';
    }

    return type;
  }

  static CAPABILITIES = {
    windowcoverings_state({ value, opts, data }) {
      let cmd = value;
      if (this.getSetting('rotated')) {
        if (value === 'up') {
          cmd = 'down';
        } else if (value === 'down') {
          cmd = 'up';
        }
      }

      if (cmd === 'idle') {
        data.repeatCount = 2;
      }
      else {
        data.repeatCount = 1;
      }

      return {
        ...data,
        rollingCode: opts.rollingCode,
        cmd,
        extCmd: data.extCmd,
      };
    },
    windowcoverings_tilt_up({ value, opts, data }) {
      return {
        ...data,
        rollingCode: opts.rollingCode,
        repeatCount: 1,
        cmd: 'ext',
        extCmd: this.getSetting('invert_tilt') ? this.constructor.invertTilt('tilt_up') : 'tilt_up',
      };
    },
    windowcoverings_tilt_down({ value, opts, data }) {
      return {
        ...data,
        rollingCode: opts.rollingCode,
        repeatCount: 1,
        cmd: 'ext',
        extCmd: this.getSetting('invert_tilt') ? this.constructor.invertTilt('tilt_down') : 'tilt_down',
      };
    },
  };
};
