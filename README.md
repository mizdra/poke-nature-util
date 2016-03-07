# poke-nature [![npm (scoped)][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
Provides utility methods to get information of Pokemon's Natures.



## Install
```bash
$ npm install @mizdra/poke-nature
```



## Usage
```js
import PokeNature from '@mizdra/poke-nature';

// Get the list of Nature names.
console.log(PokeNature.NAMES);                 // ['hardy', 'lonely', ...]

// Convert a Nature name into the id.
console.log(PokeNature.toId('timid'));         // 10

// Convert a Nature id into the name.
console.log(PokeNature.toName(10));            // 'timid'

// Get a increased stat for the specified id, 10.
console.log(PokeNature.getIncreasedStat(10));  // 'speed'

// Get a decreased stat for the specified id, 10.
console.log(PokeNature.getDecreasedStat(10));  // 'attack'

// Get a favorite flavor for the specified id, 10.
console.log(PokeNature.getFavoriteFlavor(10)); // 'sweet'

// Get a disliked flavor for the specified id, 10.
console.log(PokeNature.getDislikedFlavor(10)); // 'spicy'
```


## API docs
See [API.md](./API.md).



## Develop

### Build
```bash
$ git clone https://github.com/mizdra/poke-nature.git
$ cd poke-nature
$ npm install
$ npm run build
```

### Test
```bash
$ npm run test
```

### Lint
```bash
$ npm run lint
```

[npm-image]: https://img.shields.io/npm/v/@mizdra/poke-nature.svg
[npm-url]: https://www.npmjs.com/package/@mizdra/poke-nature
[travis-image]: https://travis-ci.org/mizdra/poke-nature.svg?branch=master
[travis-url]: https://travis-ci.org/mizdra/poke-nature