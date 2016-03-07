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
### PokeNature.NAMES: string[]
The list of Nature names according to Nature id order.
```js
let natures: string[] = PokeNature.NAMES;
console.log(natures.toString());
/**
 * Output (Actually, newline characters are not included.):
 * 'hardy,lonely,brave,adamant,naughty,
 * bold,docile,relaxed,impish,lax,
 * timid,hasty,serious,jolly,naive,
 * modest,mild,quiet,bashful,rash,
 * calm,gentle,sassy,careful,quirky'
 */
```

##### Tips :bulb:
Nature id order is below.

| id | name    |
|:--:|---------|
| 0  | hardy   |
| 1  | lonely  |
| 2  | brave   |
| 3  | adamant |
| 4  | naughty |
| 5  | bold    |
| 6  | docile  |
| 7  | relaxed |
| 8  | impish  |
| 9  | lax     |
| 10 | timid   |
| 11 | hasty   |
| 12 | serious |
| 13 | jolly   |
| 14 | naive   |
| 15 | modest  |
| 16 | mild    |
| 17 | quiet   |
| 18 | bashful |
| 19 | rash    |
| 20 | calm    |
| 21 | gentle  |
| 22 | sassy   |
| 23 | careful |
| 24 | quirky  |




### PokeNature.toId(name: string): number
Converts a Nature name into the id.
```js
console.log(PokeNature.toId('hardy'));  // => 0
console.log(PokeNature.toId('quirky')); // => 24
```

#### name: string
The Nature name, which is converted, must be lowercase.




### PokeNature.toName(id: number): string
Converts a Nature id into the name.
```js
console.log(PokeNature.toName(0));  // => 'hardy'
console.log(PokeNature.toName(24)); // => 'quirky'
```

#### id: number
The Nature id, which is converted, must be 0 to 24.




### PokeNature.getIncreasedStat(id: number): string
Returns the increased stat for the specified id.
```js
console.log(PokeNature.getIncreasedStat(5));  // => 'defense'
console.log(PokeNature.getIncreasedStat(13)); // => 'speed'
console.log(PokeNature.getIncreasedStat(22)); // => 'special-defense'
```

#### id: number
The Nature id for the increased stat to return.




### PokeNature.getDecreasedStat(id: number): string
Returns the decreased stat for the specified id.
```js
console.log(PokeNature.getDecreasedStat(5));  // => 'attack'
console.log(PokeNature.getDecreasedStat(13)); // => 'special-attack'
console.log(PokeNature.getDecreasedStat(0));  // => null
```

#### id: number
The Nature id for the decreased stat to return.




### PokeNature.getFavoriteFlavor(id: number): string
Returns the favorite flavor for the specified id.
```js
console.log(PokeNature.getFavoriteFlavor(5));  // => 'sour'
console.log(PokeNature.getFavoriteFlavor(13)); // => 'sweet'
console.log(PokeNature.getFavoriteFlavor(22)); // => 'bitter'
```

#### id: number
The Nature id for the favorite flavor to return.




### PokeNature.getDislikedFlavor(id: number): string
Returns the disliked flavor for the specified id.
```js
console.log(PokeNature.getDislikedFlavor(5));  // => 'spicy'
console.log(PokeNature.getDislikedFlavor(13)); // => 'dry'
console.log(PokeNature.getDislikedFlavor(0));  // => null
```

#### id: number
The Nature id for the disliked flavor to return.





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