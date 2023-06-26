'use strict';

const { RFDevice } = require('homey-rfdriver');

module.exports = class extends RFDevice {
  async onAdded() {
    if (this.hasCapability('onoff')) {
      await this.setCapabilityValue('onoff', false);
    }
  }

  async onCapability(capabilityId, value, opts) {
    opts.rollingCode = await this.updateRollingCode();

    await super.onCapability(capabilityId, value, opts);
  }

  /**
   * Updates the Rolling code number and stores it in the settings
   *
   * @returns {Promise<*|number>}
   */
  async updateRollingCode() {
    // Update  the rollingCode everytime a new command is send
    let rollingCode = this.getStoreValue('rollingCode') || 0;
    rollingCode++;
    await this.setStoreValue('rollingCode', rollingCode);

    return rollingCode;
  }

};
