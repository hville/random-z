# normal-z

• [Introduction](#introduction) • [Installation](#installation) • [Usage](#usage) • [Test](#test) • [License](#license) •

## Introduction

Simple and small standalone random number generator for **Z**,
the **standard normal distribution** with an average of 0 and a variance of 1 (*μ=0, σ=1*).
The random number generator uses the
[Marsaglia polar method](http://en.wikipedia.org/wiki/Normal_distribution#Generating_values_from_normal_distribution).
The additional independent random sample is cashed for the next call.

## Installation

In node, from the root of the project folder type `npm install --save random-z`.


## Usage

The function takes no parameters and returns a random number.
Available in `cjs` (require), `es6` (import) or `browser` (script) formats

```javascript
var randomZ = require('random-z')
var newRandomSample = randomZ()
```

```javascript
import {randomZ} from 'random-z'
var newRandomSample = randomZ()
```

## License

[MIT](http://www.opensource.org/licenses/MIT) © [Hugo Villeneuve](https://github.com/hville)
