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

    it('toName', () => {
        assert(PokeNatureUtil.toName(0) === 'がんばりや');
        assert(PokeNatureUtil.toName(1) === 'さみしがり');
        assert(PokeNatureUtil.toName(2) === 'ゆうかん');
        assert(PokeNatureUtil.toName(3) === 'いじっぱり');
        assert(PokeNatureUtil.toName(4) === 'やんちゃ');
        assert(PokeNatureUtil.toName(5) === 'ずぶとい');
        assert(PokeNatureUtil.toName(6) === 'すなお');
        assert(PokeNatureUtil.toName(7) === 'のんき');
        assert(PokeNatureUtil.toName(8) === 'わんぱく');
        assert(PokeNatureUtil.toName(9) === 'のうてんき');
        assert(PokeNatureUtil.toName(10) === 'おくびょう');
        assert(PokeNatureUtil.toName(11) === 'せっかち');
        assert(PokeNatureUtil.toName(12) === 'まじめ');
        assert(PokeNatureUtil.toName(13) === 'ようき');
        assert(PokeNatureUtil.toName(14) === 'むじゃき');
        assert(PokeNatureUtil.toName(15) === 'ひかえめ');
        assert(PokeNatureUtil.toName(16) === 'おっとり');
        assert(PokeNatureUtil.toName(17) === 'れいせい');
        assert(PokeNatureUtil.toName(18) === 'てれや');
        assert(PokeNatureUtil.toName(19) === 'うっかりや');
        assert(PokeNatureUtil.toName(20) === 'おだやか');
        assert(PokeNatureUtil.toName(21) === 'おとなしい');
        assert(PokeNatureUtil.toName(22) === 'なまいき');
        assert(PokeNatureUtil.toName(23) === 'しんちょう');
        assert(PokeNatureUtil.toName(24) === 'きまぐれ');
    });

    it('getNameArray', () => {
        let actual = PokeNatureUtil.getNameArray();
        let expect = [
            "がんばりや", "さみしがり", "ゆうかん", "いじっぱり", "やんちゃ",
            "ずぶとい", "すなお", "のんき", "わんぱく", "のうてんき",
            "おくびょう", "せっかち", "まじめ", "ようき", "むじゃき",
            "ひかえめ", "おっとり", "れいせい", "てれや", "うっかりや",
            "おだやか", "おとなしい", "なまいき", "しんちょう", "きまぐれ"
        ];
        assert.deepEqual(actual, expect);
    });
});