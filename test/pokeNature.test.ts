'use strict';

import PokeNature from '../';
import assert from 'power-assert';

describe('PokeNature', () => {
    it('PokeNature.toNumber', () => {
        assert(PokeNature.toNumber('がんばりや') === 0);
        assert(PokeNature.toNumber('さみしがり') === 1);
        assert(PokeNature.toNumber('ゆうかん') === 2);
        assert(PokeNature.toNumber('いじっぱり') === 3);
        assert(PokeNature.toNumber('やんちゃ') === 4);
        assert(PokeNature.toNumber('ずぶとい') === 5);
        assert(PokeNature.toNumber('すなお') === 6);
        assert(PokeNature.toNumber('のんき') === 7);
        assert(PokeNature.toNumber('わんぱく') === 8);
        assert(PokeNature.toNumber('のうてんき') === 9);
        assert(PokeNature.toNumber('おくびょう') === 10);
        assert(PokeNature.toNumber('せっかち') === 11);
        assert(PokeNature.toNumber('まじめ') === 12);
        assert(PokeNature.toNumber('ようき') === 13);
        assert(PokeNature.toNumber('むじゃき') === 14);
        assert(PokeNature.toNumber('ひかえめ') === 15);
        assert(PokeNature.toNumber('おっとり') === 16);
        assert(PokeNature.toNumber('れいせい') === 17);
        assert(PokeNature.toNumber('てれや') === 18);
        assert(PokeNature.toNumber('うっかりや') === 19);
        assert(PokeNature.toNumber('おだやか') === 20);
        assert(PokeNature.toNumber('おとなしい') === 21);
        assert(PokeNature.toNumber('なまいき') === 22);
        assert(PokeNature.toNumber('しんちょう') === 23);
        assert(PokeNature.toNumber('きまぐれ') === 24);
    });

    it('PokeNature.toString', () => {
        assert(PokeNature.toString(0) === 'がんばりや');
        assert(PokeNature.toString(1) === 'さみしがり');
        assert(PokeNature.toString(2) === 'ゆうかん');
        assert(PokeNature.toString(3) === 'いじっぱり');
        assert(PokeNature.toString(4) === 'やんちゃ');
        assert(PokeNature.toString(5) === 'ずぶとい');
        assert(PokeNature.toString(6) === 'すなお');
        assert(PokeNature.toString(7) === 'のんき');
        assert(PokeNature.toString(8) === 'わんぱく');
        assert(PokeNature.toString(9) === 'のうてんき');
        assert(PokeNature.toString(10) === 'おくびょう');
        assert(PokeNature.toString(11) === 'せっかち');
        assert(PokeNature.toString(12) === 'まじめ');
        assert(PokeNature.toString(13) === 'ようき');
        assert(PokeNature.toString(14) === 'むじゃき');
        assert(PokeNature.toString(15) === 'ひかえめ');
        assert(PokeNature.toString(16) === 'おっとり');
        assert(PokeNature.toString(17) === 'れいせい');
        assert(PokeNature.toString(18) === 'てれや');
        assert(PokeNature.toString(19) === 'うっかりや');
        assert(PokeNature.toString(20) === 'おだやか');
        assert(PokeNature.toString(21) === 'おとなしい');
        assert(PokeNature.toString(22) === 'なまいき');
        assert(PokeNature.toString(23) === 'しんちょう');
        assert(PokeNature.toString(24) === 'きまぐれ');
    });

    it('PokeNature.getNameArray', () => {
        let actual = PokeNature.getNameArray();
        let expect = [
            "がんばりや", "さみしがり", "ゆうかん", "いじっぱり", "やんちゃ",
            "ずぶとい", "すなお", "のんき", "わんぱく", "のうてんき",
            "おくびょう", "せっかち", "まじめ", "ようき", "むじゃき",
            "ひかえめ", "おっとり", "れいせい", "てれや", "うっかりや",
            "おだやか", "おとなしい", "なまいき", "しんちょう", "きまぐれ"
        ];
        assert.deepEqual(actual, expect);
    });

    it('PokeNature.getIncreasedStat', () => {
        assert(PokeNature.getIncreasedStat(0) === null);
        assert(PokeNature.getIncreasedStat(1) === 'こうげき');
        assert(PokeNature.getIncreasedStat(2) === 'こうげき');
        assert(PokeNature.getIncreasedStat(3) === 'こうげき');
        assert(PokeNature.getIncreasedStat(4) === 'こうげき');
        assert(PokeNature.getIncreasedStat(5) === 'ぼうぎょ');
        assert(PokeNature.getIncreasedStat(6) === null);
        assert(PokeNature.getIncreasedStat(7) === 'ぼうぎょ');
        assert(PokeNature.getIncreasedStat(8) === 'ぼうぎょ');
        assert(PokeNature.getIncreasedStat(9) === 'ぼうぎょ');
        assert(PokeNature.getIncreasedStat(10) === 'すばやさ');
        assert(PokeNature.getIncreasedStat(11) === 'すばやさ');
        assert(PokeNature.getIncreasedStat(12) === null);
        assert(PokeNature.getIncreasedStat(13) === 'すばやさ');
        assert(PokeNature.getIncreasedStat(14) === 'すばやさ');
        assert(PokeNature.getIncreasedStat(15) === 'とくこう');
        assert(PokeNature.getIncreasedStat(16) === 'とくこう');
        assert(PokeNature.getIncreasedStat(17) === 'とくこう');
        assert(PokeNature.getIncreasedStat(18) === null);
        assert(PokeNature.getIncreasedStat(19) === 'とくこう');
        assert(PokeNature.getIncreasedStat(20) === 'とくぼう');
        assert(PokeNature.getIncreasedStat(21) === 'とくぼう');
        assert(PokeNature.getIncreasedStat(22) === 'とくぼう');
        assert(PokeNature.getIncreasedStat(23) === 'とくぼう');
        assert(PokeNature.getIncreasedStat(24) === null);
    });

    it('PokeNature.getDecreasedStat', () => {
        assert(PokeNature.getDecreasedStat(0) === null);
        assert(PokeNature.getDecreasedStat(1) === 'ぼうぎょ');
        assert(PokeNature.getDecreasedStat(2) === 'すばやさ');
        assert(PokeNature.getDecreasedStat(3) === 'とくこう');
        assert(PokeNature.getDecreasedStat(4) === 'とくぼう');
        assert(PokeNature.getDecreasedStat(5) === 'こうげき');
        assert(PokeNature.getDecreasedStat(6) === null);
        assert(PokeNature.getDecreasedStat(7) === 'すばやさ');
        assert(PokeNature.getDecreasedStat(8) === 'とくこう');
        assert(PokeNature.getDecreasedStat(9) === 'とくぼう');
        assert(PokeNature.getDecreasedStat(10) === 'こうげき');
        assert(PokeNature.getDecreasedStat(11) === 'ぼうぎょ');
        assert(PokeNature.getDecreasedStat(12) === null);
        assert(PokeNature.getDecreasedStat(13) === 'とくこう');
        assert(PokeNature.getDecreasedStat(14) === 'とくぼう');
        assert(PokeNature.getDecreasedStat(15) === 'こうげき');
        assert(PokeNature.getDecreasedStat(16) === 'ぼうぎょ');
        assert(PokeNature.getDecreasedStat(17) === 'すばやさ');
        assert(PokeNature.getDecreasedStat(18) === null);
        assert(PokeNature.getDecreasedStat(19) === 'とくぼう');
        assert(PokeNature.getDecreasedStat(20) === 'こうげき');
        assert(PokeNature.getDecreasedStat(21) === 'ぼうぎょ');
        assert(PokeNature.getDecreasedStat(22) === 'すばやさ');
        assert(PokeNature.getDecreasedStat(23) === 'とくこう');
        assert(PokeNature.getDecreasedStat(24) === null);
    });

    it('PokeNature.getFavoriteFlavor', () => {
        assert(PokeNature.getFavoriteFlavor(0) === null);
        assert(PokeNature.getFavoriteFlavor(1) === 'からい');
        assert(PokeNature.getFavoriteFlavor(2) === 'からい');
        assert(PokeNature.getFavoriteFlavor(3) === 'からい');
        assert(PokeNature.getFavoriteFlavor(4) === 'からい');
        assert(PokeNature.getFavoriteFlavor(5) === 'すっぱい');
        assert(PokeNature.getFavoriteFlavor(6) === null);
        assert(PokeNature.getFavoriteFlavor(7) === 'すっぱい');
        assert(PokeNature.getFavoriteFlavor(8) === 'すっぱい');
        assert(PokeNature.getFavoriteFlavor(9) === 'すっぱい');
        assert(PokeNature.getFavoriteFlavor(10) === 'あまい');
        assert(PokeNature.getFavoriteFlavor(11) === 'あまい');
        assert(PokeNature.getFavoriteFlavor(12) === null);
        assert(PokeNature.getFavoriteFlavor(13) === 'あまい');
        assert(PokeNature.getFavoriteFlavor(14) === 'あまい');
        assert(PokeNature.getFavoriteFlavor(15) === 'しぶい');
        assert(PokeNature.getFavoriteFlavor(16) === 'しぶい');
        assert(PokeNature.getFavoriteFlavor(17) === 'しぶい');
        assert(PokeNature.getFavoriteFlavor(18) === null);
        assert(PokeNature.getFavoriteFlavor(19) === 'しぶい');
        assert(PokeNature.getFavoriteFlavor(20) === 'にがい');
        assert(PokeNature.getFavoriteFlavor(21) === 'にがい');
        assert(PokeNature.getFavoriteFlavor(22) === 'にがい');
        assert(PokeNature.getFavoriteFlavor(23) === 'にがい');
        assert(PokeNature.getFavoriteFlavor(24) === null);
    });

    it('PokeNature.getDislikedFlavor', () => {
        assert(PokeNature.getDislikedFlavor(0) === null);
        assert(PokeNature.getDislikedFlavor(1) === 'すっぱい');
        assert(PokeNature.getDislikedFlavor(2) === 'あまい');
        assert(PokeNature.getDislikedFlavor(3) === 'しぶい');
        assert(PokeNature.getDislikedFlavor(4) === 'にがい');
        assert(PokeNature.getDislikedFlavor(5) === 'からい');
        assert(PokeNature.getDislikedFlavor(6) === null);
        assert(PokeNature.getDislikedFlavor(7) === 'あまい');
        assert(PokeNature.getDislikedFlavor(8) === 'しぶい');
        assert(PokeNature.getDislikedFlavor(9) === 'にがい');
        assert(PokeNature.getDislikedFlavor(10) === 'からい');
        assert(PokeNature.getDislikedFlavor(11) === 'すっぱい');
        assert(PokeNature.getDislikedFlavor(12) === null);
        assert(PokeNature.getDislikedFlavor(13) === 'しぶい');
        assert(PokeNature.getDislikedFlavor(14) === 'にがい');
        assert(PokeNature.getDislikedFlavor(15) === 'からい');
        assert(PokeNature.getDislikedFlavor(16) === 'すっぱい');
        assert(PokeNature.getDislikedFlavor(17) === 'あまい');
        assert(PokeNature.getDislikedFlavor(18) === null);
        assert(PokeNature.getDislikedFlavor(19) === 'にがい');
        assert(PokeNature.getDislikedFlavor(20) === 'からい');
        assert(PokeNature.getDislikedFlavor(21) === 'すっぱい');
        assert(PokeNature.getDislikedFlavor(22) === 'あまい');
        assert(PokeNature.getDislikedFlavor(23) === 'しぶい');
        assert(PokeNature.getDislikedFlavor(24) === null);
    });
});