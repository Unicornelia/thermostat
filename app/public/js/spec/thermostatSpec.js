'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('it starts on 20 degrees', function() {
    expect(thermostat.degrees).toBe(20);
  });

  it('has a reset function', function() {
    thermostat.reset();
    expect(thermostat.degrees).toBe(20);
  });

  it('has a 25 max temp as default', function () {
    expect(thermostat.maxTemp()).toBe(25);
  });

  describe('changing temperatures', function() {

    it('can increase temperature', function() {
      thermostat.increase(1);
      expect(thermostat.degrees).toBe(21);
    });

    it('can decrease temperature', function() {
      thermostat.decrease(1);
      expect(thermostat.degrees).toBe(19);
    });

    it('cannot be decreased below the minimum temperature', function() {
      expect(function() {
        thermostat.decrease(11);
      }).toThrowError("Temperature cannot be decreased any further.");
    });
  });

  describe('termostat has powersaving', function() {
    it('has a power saving setting', function() {
      expect(thermostat.powerSaving).toBe(true);
    });

    it('powersaving can be toggled', function() {
      thermostat.powerSavingOff();
      expect(thermostat.maxTemp()).toBe(32);
    });
  });

  describe('termostat has energy usage function', function() {
    it('shows the level of energy usage is high', function() {
      thermostat.degrees;
      thermostat.powerSavingOff();
      thermostat.increase(6);
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

    it('shows the level of energy usage is low', function() {
      thermostat.degrees;
      thermostat.powerSavingOff();
      thermostat.decrease(3);
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('shows the level of energy usage is medium', function() {
      thermostat.degrees;
      thermostat.powerSavingOff();
      thermostat.decrease(1);
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });
});
