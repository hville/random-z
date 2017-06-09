/* hugov@runbox.com | https://github.com/hville/random-z.git | license:MIT */
'use strict';

// cached extra result
var spareValue = NaN;

/**
 * random number generator for the unit random variable
 * http://en.wikipedia.org/wiki/Normal_distribution#Generating_values_from_normal_distribution
 * @function
 * @returns {Number} random number
 */
function randomZ () {
	var u, v, s;

	if (!isNaN(spareValue)) {
		s = spareValue;
		spareValue = NaN;
		return s
	}

	do {
		u = Math.random() * 2 - 1;
		v = Math.random() * 2 - 1;
		s = u * u + v * v;
	} while (s === 0 || s >= 1)

	s = Math.sqrt(-2 * Math.log(s) / s);
	spareValue = u * s;

	return v * s
}

module.exports = randomZ;
