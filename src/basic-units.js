export function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
//LENGTH
export function metreTo(unit, lengths) {
  let _unit = unit.toLowerCase();
  if (_unit == "kilometre" || _unit == "km") {
    let newUnit = lengths/1000;
    return round(newUnit, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    let newUnit = lengths * 0.00062137;
    return round(newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    let newUnit = lengths * 100;
    return round(newUnit, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    let newUnit = lengths * 3.2808;
    return round(newUnit, 7);
  } else if (_unit == "inch" || _unit == "in") {
    let newUnit = lengths * 39.370;
    return round(newUnit, 7);
  } else { return false; }
}

export function kilometreTo(unit, length) {
  let _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    let newUnit = length * 1000;
    return round(newUnit, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    let newUnit = length * 0.62137;
    return round(newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    let newUnit = length * 100000;
    return round(newUnit, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    let newUnit = length * 3280.8;
    return round(newUnit, 7);
  } else if (_unit == "inch" || _unit == "in") {
    let newUnit = length * 39370;
    return round(newUnit, 7);
  } else { return false; }
}

export function centimetreTo(unit, length) {
  let _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    let newUnit = length/100;
    return round(newUnit, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    let newUnit = length * 0.0000062137;
    return round(newUnit, 7);
  } else if (_unit == "kilometre" || _unit == "km") {
    let newUnit = length/100000;
    return round(newUnit, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    let newUnit = length * 0.032808;
    return round(newUnit, 7);
  } else if (_unit == "inch" || _unit == "in") {
    let newUnit = length * 0.39370;
    return round(newUnit, 7);
  } else { return false }
}

export function mileTo(unit, length) {
  let _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    let newUnit = length/0.00062137;
    return round(newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    let newUnit = length/0.0000062137;
    return round(newUnit, 7);
  } else if (_unit == "kilometre" || _unit == "km") {
    let newUnit = length/0.62137;
    return round(newUnit, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    let newUnit = length * 5280;
    return round(newUnit, 7);
  } else if (_unit == "inch" || _unit == "in") {
    let newUnit = length * 63360;
    return round(newUnit, 7);
  } else { return false }
}

export function footTo(unit, length) {
  let _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    let newUnit = length/3.2808;
    return round(newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    let newUnit = length/.032808;
    return round(newUnit, 7);
  } else if (_unit == "kilometre" || _unit == "km") {
    let newUnit = length/3280.8;
    return round(newUnit, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    let newUnit = length * 0.00018939;
    return round(newUnit, 7);
  } else if (_unit == "inch" || _unit == "in") {
    let newUnit = length * 12;
    return round(newUnit, 7);
  } else { return false }
}

export function inchTo(unit, length) {
  let _unit = unit.toLowerCase();
  if (_unit == "metre" || _unit == "m") {
    let newUnit = length/39.370;
    return round(newUnit, 7);
  } else if (_unit == "centimetre" || _unit == "cm") {
    let newUnit = length/0.39370;
    return round(newUnit, 7);
  } else if (_unit == "kilometre" || _unit == "km") {
    let newUnit = length/39370;
    return round(newUnit, 7);
  } else if (_unit == "mile" || _unit == "mi") {
    let newUnit = length * 0.000015783;
    return round(newUnit, 7);
  } else if (_unit == "foot" || _unit == "ft") {
    let newUnit = length * 0.083333;
    return round(newUnit, 7);
  } else { return false }
}
//MASS
export function kilogramTo(unit, mass) {
  let _unit = unit.toLowerCase();
  if (_unit == "gram" || _unit == "g") {
    let newUnit = mass/.0010000;
    return round(newUnit, 7);
  } else if (_unit == "tonne" || _unit == "t") {
    let newUnit = mass/1000;
    return round(newUnit, 7);
  } else if (_unit == "pound" || _unit == "lb") {
    let newUnit = mass * 2.2046;
    return round(newUnit, 7);
  } else { return false }
}

export function gramTo(unit, mass) {
  let _unit = unit.toLowerCase();
  if (_unit == "kilogram" || _unit == "kg") {
    let newUnit = mass/1000;
    return round(newUnit, 7);
  } else if (_unit == "tonne" || _unit == "t") {
    let newUnit = mass/1000000;
    return round(newUnit, 7);
  } else if (_unit == "pound" || _unit == "lb") {
    let newUnit = mass * 0.0022046;
    return round(newUnit, 7);
  } else { return false }
}

export function tonneTo(unit, mass) {
  let _unit = unit.toLowerCase();
  if (_unit == "gram" || _unit == "g") {
    let newUnit = mass/.0000010000;
    return round(newUnit, 7);
  } else if (_unit == "kilogram" || _unit == "kg") {
    let newUnit = mass/.0010000;
    return round(newUnit, 7);
  } else if (_unit == "pound" || _unit == "lb") {
    let newUnit = mass * 2204.6;
    return round(newUnit, 7);
  } else { return false }
}

export function poundTo(unit, mass) {
  let _unit = unit.toLowerCase();
  if (_unit == "gram" || _unit == "g") {
    let newUnit = mass/.0022046;
    return round(newUnit, 7);
  } else if (_unit == "kilogram" || _unit == "kg") {
    let newUnit = mass/2.2046;
    return round(newUnit, 7);
  } else if (_unit == "tonne" || _unit == "t") {
    let newUnit = mass/2204.6;
    return round(newUnit, 7);
  } else { return false }
}
//TIME
export function secondTo(unit, time) {
  let _unit = unit.toLowerCase();
  if (_unit == "minute" || _unit == "min") {
    let newUnit = time/60;
    return round(newUnit, 7);
  } else if (_unit == "hour" || _unit == "hr") {
    let newUnit = time/60/60;
    return round(newUnit, 7);
  } else { return false }
}

export function minuteTo(unit, time) {
  let _unit = unit.toLowerCase();
  if (_unit == "second" || _unit == "s") {
    let newUnit = time * 60;
    return round(newUnit, 7);
  } else if (_unit == "hour" || _unit == "hr") {
    let newUnit = time/60;
    return round(newUnit, 7);
  } else { return false }
}

export function hourTo(unit, time) {
  let _unit = unit.toLowerCase();
  if (_unit == "second" || _unit == "s") {
    let newUnit = time * 60 * 60;
    return round(newUnit, 7);
  } else if (_unit == "minute" || _unit == "min") {
    let newUnit = time * 60;
    return round(newUnit, 7);
  } else { return false }
}
//TEMPERATURE
export function kelvinTo(unit, temperature) {
  let _unit = unit.toLowerCase();
  if (_unit == "celsius" || _unit == "c") {
    let newUnit = temperature - 273.15;
    return round(newUnit, 7);
  } else if (_unit == "fahrenheit" || _unit == "f") {
    let newUnit = (temperature - 273.15)*1.8000 + 32.00;
    return round(newUnit, 7);
  } else { return false }
}

export function celsiusTo(unit, temperature) {
  let _unit = unit.toLowerCase();
  if (_unit == "kelvin" || _unit == "k") {
    let newUnit = temperature + 273.15;
    return round(newUnit, 7);
  } else if (_unit == "fahrenheit" || _unit == "f") {
    let newUnit = temperature * 1.8000 + 32.00;
    return round(newUnit, 7);
  } else { return false }
}

export function fahrenheitTo(unit, temperature) {
  let _unit = unit.toLowerCase();
  if (_unit == "celsius" || _unit == "c") {
    let newUnit = (temperature - 32)/1.8000;
    return round(newUnit, 7);
  } else if (_unit == "kelvin" || _unit == "k") {
    let newUnit = (temperature - 32)/1.8000 + 273.15;
    return round(newUnit, 7);
  } else { return false }
}
