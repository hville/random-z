'use strict'
var c = require('cotest')
var randomZ = require('./random-z.js')

var N = 10000
var sum = 0
var sum2 = 0
for (var i = 0; i < N; ++i) {
	var rnd = randomZ()
	sum += rnd
	sum2 += rnd * rnd
}

var average = sum / N
var variance = sum2 / N - average * average

c('random-z, average and variance', function () {
	c('<', Math.abs(average), 0.02)
	c('<', Math.abs(variance - 1), 1)
})
