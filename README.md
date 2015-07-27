## normal-z

Implementation of the [Marsaglia polar method](http://en.wikipedia.org/wiki/Normal_distribution#Generating_values_from_normal_distribution)
with the additional result cashed for the next call.


## usage

The function takes no parameters and only returns the unit normal distribution *E=0, V=1*

		var randomZ = require('random-z')
		var newRandomSample = randomZ()

## test

		mocha
