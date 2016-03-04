# poke-nature [![npm (scoped)][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
Provides utility methods to get information of nature.

## Install
```bash
$ npm install @mizdra/poke-nature
```

## Usage
```js
import {ja as PokeNature} from '@mizdra/poke-nature';

console.log(PokeNature.toNumber('おくびょう')); // 10
console.log(PokeNature.toString(10)); // 'おくびょう'
console.log(PokeNature.getIncreasedStat(10)); // 'すばやさ'
console.log(PokeNature.getDecreasedStat(10)); // 'こうげき'
console.log(PokeNature.getFavoriteFlavor(10)); // 'あまい'
console.log(PokeNature.getDislikedFlavor(10)); // 'からい'
console.log(PokeNature.NAMES); // ['がんばりや', 'さみしがり', ...]
console.log(PokeNature.INCREASED_STATS); // [null, 'こうげき', ...]
console.log(PokeNature.DECREASED_STATS); // [null, 'ぼうぎょ', ...]
console.log(PokeNature.FAVORITE_FLAVORS); // [null, 'からい', ...]
console.log(PokeNature.DISLIKED_FLAVORS); // [null, 'すっぱい', ...]
```

## Language
| de | en | es | fr | it | ja | ko |
|----|----|----|----|----|----|----|
|    |    |    |    |    | ✓ |   |

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