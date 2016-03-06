# poke-nature [![npm (scoped)][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
Provides utility methods to get information of Pokemon's Natures.

## Install
```bash
$ npm install @mizdra/poke-nature
```

## Usage
```js
import PokeNature from '@mizdra/poke-nature';

// Convert Nature name into Nature id.
console.log(PokeNature.toId('timid'));     // 10

// Convert Nature id into Nature name.
console.log(PokeNature.toName(10));          // 'timid'

// Get a increased stat for Nature id, 10.
console.log(PokeNature.getIncreasedStat(10));  // 'speed'

// Get a decreased stat for Nature id, 10.
console.log(PokeNature.getDecreasedStat(10));  // 'attack'

// Get a favorite flavor for Nature id, 10.
console.log(PokeNature.getFavoriteFlavor(10)); // 'sweet'

// Get a disliked flavor for Nature id, 10.
console.log(PokeNature.getDislikedFlavor(10)); // 'spicy'

// Get the list of Nature names.
console.log(PokeNature.NAMES);                 // ['hardy', 'lonely', ...]

// Get the list of increased stats.
console.log(PokeNature.INCREASED_STATS);       // [null, 'attack', ...]

// Get the list of decreased stats.
console.log(PokeNature.DECREASED_STATS);       // [null, 'defense', ...]

// Get the list of favorite flavors.
console.log(PokeNature.FAVORITE_FLAVORS);      // [null, 'spicy', ...]

// Get the list of disliked flavors.
console.log(PokeNature.DISLIKED_FLAVORS);      // [null, 'sour', ...]
```

## Build
```bash
$ git clone https://github.com/mizdra/poke-nature.git
$ cd poke-nature
$ npm install
$ npm run build
```

## Test
```bash
$ npm run test
```

## Lint
```bash
$ npm run lint
```

[npm-image]: https://img.shields.io/npm/v/@mizdra/poke-nature.svg
[npm-url]: https://www.npmjs.com/package/@mizdra/poke-nature
[travis-image]: https://travis-ci.org/mizdra/poke-nature.svg?branch=master
[travis-url]: https://travis-ci.org/mizdra/poke-nature