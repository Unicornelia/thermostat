
var Thermostat = function() {
  this.ABSOLUTE_MAXIMUM_TEMP = 33;
  this.POWER_MAXIMUM_TEMP = 26;
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.degrees = 20;
  this.powerSaving = true;
};

Thermostat.prototype.maxTemp = function() {
  if (this.powerSaving) {
    return this.POWER_MAXIMUM_TEMP;
  } else {
    return this.ABSOLUTE_MAXIMUM_TEMP;
  }
};

Thermostat.prototype.increase = function(value) {
  if (this.degrees + value < this.maxTemp()){
    this.degrees += value;
  }
};

Thermostat.prototype.decrease = function(value) {
  if ((this.degrees - value) < this.MINIMUM_TEMPERATURE) {
    throw new Error("Temperature cannot be decreased any further.");
  } else {
    this.degrees -= value;
  }
};

Thermostat.prototype.reset = function(){
  this.degrees = this.DEFAULT_TEMP;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true
};

Thermostat.prototype.energyUsage = function() {
  if (this.degrees < 18) {
    return 'low-usage';
  } else if (this.degrees < 25 && this.degrees >= 18) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
