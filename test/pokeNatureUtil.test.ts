'use strict';

import PokeNatureUtil from '../';
import assert from 'power-assert';

describe('PokeNatureUtil', () => {
    it('toIndex', () => {
        assert(PokeNatureUtil.toIndex('がんばりや') === 0);
        assert(PokeNatureUtil.toIndex('さみしがり') === 1);
        assert(PokeNatureUtil.toIndex('ゆうかん') === 2);
        assert(PokeNatureUtil.toIndex('いじっぱり') === 3);
        assert(PokeNatureUtil.toIndex('やんちゃ') === 4);
        assert(PokeNatureUtil.toIndex('ずぶとい') === 5);
        assert(PokeNatureUtil.toIndex('すなお') === 6);
        assert(PokeNatureUtil.toIndex('のんき') === 7);
        assert(PokeNatureUtil.toIndex('わんぱく') === 8);
        assert(PokeNatureUtil.toIndex('のうてんき') === 9);
        assert(PokeNatureUtil.toIndex('おくびょう') === 10);
        assert(PokeNatureUtil.toIndex('せっかち') === 11);
        assert(PokeNatureUtil.toIndex('まじめ') === 12);
        assert(PokeNatureUtil.toIndex('ようき') === 13);
        assert(PokeNatureUtil.toIndex('むじゃき') === 14);
        assert(PokeNatureUtil.toIndex('ひかえめ') === 15);
        assert(PokeNatureUtil.toIndex('おっとり') === 16);
        assert(PokeNatureUtil.toIndex('れいせい') === 17);
        assert(PokeNatureUtil.toIndex('てれや') === 18);
        assert(PokeNatureUtil.toIndex('うっかりや') === 19);
        assert(PokeNatureUtil.toIndex('おだやか') === 20);
        assert(PokeNatureUtil.toIndex('おとなしい') === 21);
        assert(PokeNatureUtil.toIndex('なまいき') === 22);
        assert(PokeNatureUtil.toIndex('しんちょう') === 23);
        assert(PokeNatureUtil.toIndex('きまぐれ') === 24);
    });
});