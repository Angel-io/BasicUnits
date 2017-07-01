'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = round;
exports.metreTo = metreTo;
exports.kilometreTo = kilometreTo;
exports.centimetreTo = centimetreTo;
exports.mileTo = mileTo;
exports.footTo = footTo;
exports.inchTo = inchTo;
exports.kilogramTo = kilogramTo;
exports.gramTo = gramTo;
exports.tonneTo = tonneTo;
exports.poundTo = poundTo;
exports.secondTo = secondTo;
exports.minuteTo = minuteTo;
exports.hourTo = hourTo;
exports.kelvinTo = kelvinTo;
exports.celsiusTo = celsiusTo;
exports.fahrenheitTo = fahrenheitTo;
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
//LENGTH
function metreTo(unit, lengths) {
  var _unit = unit.toLowerCase();
  if (_unit == "kilometre" || _unit == "km") {
    var newUnit = lengths / 1000;
    return round(newUnit, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    var _newUnit = lengths * 0.00062137;
    return round(_newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    var _newUnit2 = lengths * 100;
    return round(_newUnit2, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    var _newUnit3 = lengths * 3.2808;
    return round(_newUnit3, 7);
  } else if (_unit == "inch" || _unit == "in") {
    var _newUnit4 = lengths * 39.370;
    return round(_newUnit4, 7);
  } else {
    return false;
  }
}

function kilometreTo(unit, length) {
  var _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    var newUnit = length * 1000;
    return round(newUnit, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    var _newUnit5 = length * 0.62137;
    return round(_newUnit5, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    var _newUnit6 = length * 100000;
    return round(_newUnit6, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    var _newUnit7 = length * 3280.8;
    return round(_newUnit7, 7);
  } else if (_unit == "inch" || _unit == "in") {
    var _newUnit8 = length * 39370;
    return round(_newUnit8, 7);
  } else {
    return false;
  }
}

function centimetreTo(unit, length) {
  var _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    var newUnit = length / 100;
    return round(newUnit, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    var _newUnit9 = length * 0.0000062137;
    return round(_newUnit9, 7);
  } else if (_unit == "kilometre" || _unit == "km") {
    var _newUnit10 = length / 100000;
    return round(_newUnit10, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    var _newUnit11 = length * 0.032808;
    return round(_newUnit11, 7);
  } else if (_unit == "inch" || _unit == "in") {
    var _newUnit12 = length * 0.39370;
    return round(_newUnit12, 7);
  } else {
    return false;
  }
}

function mileTo(unit, length) {
  var _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    var newUnit = length / 0.00062137;
    return round(newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    var _newUnit13 = length / 0.0000062137;
    return round(_newUnit13, 7);
  } else if (_unit == "kilometre" || _unit == "km") {
    var _newUnit14 = length / 0.62137;
    return round(_newUnit14, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    var _newUnit15 = length * 5280;
    return round(_newUnit15, 7);
  } else if (_unit == "inch" || _unit == "in") {
    var _newUnit16 = length * 63360;
    return round(_newUnit16, 7);
  } else {
    return false;
  }
}

function footTo(unit, length) {
  var _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    var newUnit = length / 3.2808;
    return round(newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    var _newUnit17 = length / .032808;
    return round(_newUnit17, 7);
  } else if (_unit == "kilometre" || _unit == "km") {
    var _newUnit18 = length / 3280.8;
    return round(_newUnit18, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    var _newUnit19 = length * 0.00018939;
    return round(_newUnit19, 7);
  } else if (_unit == "inch" || _unit == "in") {
    var _newUnit20 = length * 12;
    return round(_newUnit20, 7);
  } else {
    return false;
  }
}

function inchTo(unit, length) {
  var _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    var newUnit = length / 39.370;
    return round(newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    var _newUnit21 = length / 0.39370;
    return round(_newUnit21, 7);
  } else if (_unit == "kilometre" || _unit == "km") {
    var _newUnit22 = length / 39370;
    return round(_newUnit22, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    var _newUnit23 = length * 0.000015783;
    return round(_newUnit23, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    var _newUnit24 = length * 0.083333;
    return round(_newUnit24, 7);
  } else {
    return false;
  }
}
//MASS
function kilogramTo(unit, mass) {
  var _unit = unit.toLowerCase();
  if (_unit == "gram" || _unit == "g") {
    var newUnit = mass / .0010000;
    return round(newUnit, 7);
  } else if (_unit == "tonne" || _unit == "t") {
    var _newUnit25 = mass / 1000;
    return round(_newUnit25, 7);
  } else if (_unit == "pound" || _unit == "lb") {
    var _newUnit26 = mass * 2.2046;
    return round(_newUnit26, 7);
  } else {
    return false;
  }
}

function gramTo(unit, mass) {
  var _unit = unit.toLowerCase();
  if (_unit == "kilogram" || _unit == "kg") {
    var newUnit = mass / 1000;
    return round(newUnit, 7);
  } else if (_unit == "tonne" || _unit == "t") {
    var _newUnit27 = mass / 1000000;
    return round(_newUnit27, 7);
  } else if (_unit == "pound" || _unit == "lb") {
    var _newUnit28 = mass * 0.0022046;
    return round(_newUnit28, 7);
  } else {
    return false;
  }
}

function tonneTo(unit, mass) {
  var _unit = unit.toLowerCase();
  if (_unit == "gram" || _unit == "g") {
    var newUnit = mass / .0000010000;
    return round(newUnit, 7);
  } else if (_unit == "kilogram" || _unit == "kg") {
    var _newUnit29 = mass / .0010000;
    return round(_newUnit29, 7);
  } else if (_unit == "pound" || _unit == "lb") {
    var _newUnit30 = mass * 2204.6;
    return round(_newUnit30, 7);
  } else {
    return false;
  }
}

function poundTo(unit, mass) {
  var _unit = unit.toLowerCase();
  if (_unit == "gram" || _unit == "g") {
    var newUnit = mass / .0022046;
    return round(newUnit, 7);
  } else if (_unit == "kilogram" || _unit == "kg") {
    var _newUnit31 = mass / 2.2046;
    return round(_newUnit31, 7);
  } else if (_unit == "tonne" || _unit == "t") {
    var _newUnit32 = mass / 2204.6;
    return round(_newUnit32, 7);
  } else {
    return false;
  }
}
//TIME
function secondTo(unit, time) {
  var _unit = unit.toLowerCase();
  if (_unit == "minute" || _unit == "min") {
    var newUnit = time / 60;
    return round(newUnit, 7);
  } else if (_unit == "hour" || _unit == "hr") {
    var _newUnit33 = time / 60 / 60;
    return round(_newUnit33, 7);
  } else {
    return false;
  }
}

function minuteTo(unit, time) {
  var _unit = unit.toLowerCase();
  if (_unit == "second" || _unit == "s") {
    var newUnit = time * 60;
    return round(newUnit, 7);
  } else if (_unit == "hour" || _unit == "hr") {
    var _newUnit34 = time / 60;
    return round(_newUnit34, 7);
  } else {
    return false;
  }
}

function hourTo(unit, time) {
  var _unit = unit.toLowerCase();
  if (_unit == "second" || _unit == "s") {
    var newUnit = time * 60 * 60;
    return round(newUnit, 7);
  } else if (_unit == "minute" || _unit == "min") {
    var _newUnit35 = time * 60;
    return round(_newUnit35, 7);
  } else {
    return false;
  }
}
//TEMPERATURE
function kelvinTo(unit, temperature) {
  var _unit = unit.toLowerCase();
  if (_unit == "celsius" || _unit == "c") {
    var newUnit = temperature - 273.15;
    return round(newUnit, 7);
  } else if (_unit == "fahrenheit" || _unit == "f") {
    var _newUnit36 = (temperature - 273.15) * 1.8000 + 32.00;
    return round(_newUnit36, 7);
  } else {
    return false;
  }
}

function celsiusTo(unit, temperature) {
  var _unit = unit.toLowerCase();
  if (_unit == "kelvin" || _unit == "k") {
    var newUnit = temperature + 273.15;
    return round(newUnit, 7);
  } else if (_unit == "fahrenheit" || _unit == "f") {
    var _newUnit37 = temperature * 1.8000 + 32.00;
    return round(_newUnit37, 7);
  } else {
    return false;
  }
}

function fahrenheitTo(unit, temperature) {
  var _unit = unit.toLowerCase();
  if (_unit == "celsius" || _unit == "c") {
    var newUnit = (temperature - 32) / 1.8000;
    return round(newUnit, 7);
  } else if (_unit == "kelvin" || _unit == "k") {
    var _newUnit38 = (temperature - 32) / 1.8000 + 273.15;
    return round(_newUnit38, 7);
  } else {
    return false;
  }
}
