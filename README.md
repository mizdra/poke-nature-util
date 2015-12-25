# poke-nature
ポケモン性格クラス。

## 特徴
- TypeScriptによる型補完。

## インストール
```bash
$ npm install @mizdra/poke-nature
```

## 使い方
```js
import PokeNature from '@mizdra/poke-nature';

let nature = new PokeNature('おくびょう');
// or ... let nature = new PokeNature(10);

console.log(nature.toIndex()); // 10
console.log(nature.toName()); // 'おくびょう'
console.log(nature.getIncreasedStat()); // 'すばやさ'
console.log(nature.getDecreasedStat()); // 'こうげき'
console.log(nature.getFavoriteFlavor()); // 'あまい'
console.log(nature.getDislikedFlavor()); // 'からい'
console.log(PokeNature.getNameArray()); // ['がんばりや', 'さみしがり', ...]

```

## ビルド
```bash
$ git clone https://github.com/mizdra/poke-nature.git
$ cd poke-nature
$ npm install -g  mocha gulp dtsm
$ npm install
$ dtsm install
$ gulp
```

### テスト
```bash
$ npm test
```