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

    it('getIncreasedStat', () => {
        assert(PokeNatureUtil.getIncreasedStat(0) === null);
        assert(PokeNatureUtil.getIncreasedStat(1) === 'こうげき');
        assert(PokeNatureUtil.getIncreasedStat(2) === 'こうげき');
        assert(PokeNatureUtil.getIncreasedStat(3) === 'こうげき');
        assert(PokeNatureUtil.getIncreasedStat(4) === 'こうげき');
        assert(PokeNatureUtil.getIncreasedStat(5) === 'ぼうぎょ');
        assert(PokeNatureUtil.getIncreasedStat(6) === null);
        assert(PokeNatureUtil.getIncreasedStat(7) === 'ぼうぎょ');
        assert(PokeNatureUtil.getIncreasedStat(8) === 'ぼうぎょ');
        assert(PokeNatureUtil.getIncreasedStat(9) === 'ぼうぎょ');
        assert(PokeNatureUtil.getIncreasedStat(10) === 'すばやさ');
        assert(PokeNatureUtil.getIncreasedStat(11) === 'すばやさ');
        assert(PokeNatureUtil.getIncreasedStat(12) === null);
        assert(PokeNatureUtil.getIncreasedStat(13) === 'すばやさ');
        assert(PokeNatureUtil.getIncreasedStat(14) === 'すばやさ');
        assert(PokeNatureUtil.getIncreasedStat(15) === 'とくこう');
        assert(PokeNatureUtil.getIncreasedStat(16) === 'とくこう');
        assert(PokeNatureUtil.getIncreasedStat(17) === 'とくこう');
        assert(PokeNatureUtil.getIncreasedStat(18) === null);
        assert(PokeNatureUtil.getIncreasedStat(19) === 'とくこう');
        assert(PokeNatureUtil.getIncreasedStat(20) === 'とくぼう');
        assert(PokeNatureUtil.getIncreasedStat(21) === 'とくぼう');
        assert(PokeNatureUtil.getIncreasedStat(22) === 'とくぼう');
        assert(PokeNatureUtil.getIncreasedStat(23) === 'とくぼう');
        assert(PokeNatureUtil.getIncreasedStat(24) === null);
    });

    it('getDecreasedStat', () => {
        assert(PokeNatureUtil.getDecreasedStat(0) === null);
        assert(PokeNatureUtil.getDecreasedStat(1) === 'ぼうぎょ');
        assert(PokeNatureUtil.getDecreasedStat(2) === 'すばやさ');
        assert(PokeNatureUtil.getDecreasedStat(3) === 'とくこう');
        assert(PokeNatureUtil.getDecreasedStat(4) === 'とくぼう');
        assert(PokeNatureUtil.getDecreasedStat(5) === 'こうげき');
        assert(PokeNatureUtil.getDecreasedStat(6) === null);
        assert(PokeNatureUtil.getDecreasedStat(7) === 'すばやさ');
        assert(PokeNatureUtil.getDecreasedStat(8) === 'とくこう');
        assert(PokeNatureUtil.getDecreasedStat(9) === 'とくぼう');
        assert(PokeNatureUtil.getDecreasedStat(10) === 'こうげき');
        assert(PokeNatureUtil.getDecreasedStat(11) === 'ぼうぎょ');
        assert(PokeNatureUtil.getDecreasedStat(12) === null);
        assert(PokeNatureUtil.getDecreasedStat(13) === 'とくこう');
        assert(PokeNatureUtil.getDecreasedStat(14) === 'とくぼう');
        assert(PokeNatureUtil.getDecreasedStat(15) === 'こうげき');
        assert(PokeNatureUtil.getDecreasedStat(16) === 'ぼうぎょ');
        assert(PokeNatureUtil.getDecreasedStat(17) === 'すばやさ');
        assert(PokeNatureUtil.getDecreasedStat(18) === null);
        assert(PokeNatureUtil.getDecreasedStat(19) === 'とくぼう');
        assert(PokeNatureUtil.getDecreasedStat(20) === 'こうげき');
        assert(PokeNatureUtil.getDecreasedStat(21) === 'ぼうぎょ');
        assert(PokeNatureUtil.getDecreasedStat(22) === 'すばやさ');
        assert(PokeNatureUtil.getDecreasedStat(23) === 'とくこう');
        assert(PokeNatureUtil.getDecreasedStat(24) === null);
    });

    it('getFavoriteFlavor', () => {
        assert(PokeNatureUtil.getFavoriteFlavor(0) === null);
        assert(PokeNatureUtil.getFavoriteFlavor(1) === 'からい');
        assert(PokeNatureUtil.getFavoriteFlavor(2) === 'からい');
        assert(PokeNatureUtil.getFavoriteFlavor(3) === 'からい');
        assert(PokeNatureUtil.getFavoriteFlavor(4) === 'からい');
        assert(PokeNatureUtil.getFavoriteFlavor(5) === 'すっぱい');
        assert(PokeNatureUtil.getFavoriteFlavor(6) === null);
        assert(PokeNatureUtil.getFavoriteFlavor(7) === 'すっぱい');
        assert(PokeNatureUtil.getFavoriteFlavor(8) === 'すっぱい');
        assert(PokeNatureUtil.getFavoriteFlavor(9) === 'すっぱい');
        assert(PokeNatureUtil.getFavoriteFlavor(10) === 'あまい');
        assert(PokeNatureUtil.getFavoriteFlavor(11) === 'あまい');
        assert(PokeNatureUtil.getFavoriteFlavor(12) === null);
        assert(PokeNatureUtil.getFavoriteFlavor(13) === 'あまい');
        assert(PokeNatureUtil.getFavoriteFlavor(14) === 'あまい');
        assert(PokeNatureUtil.getFavoriteFlavor(15) === 'しぶい');
        assert(PokeNatureUtil.getFavoriteFlavor(16) === 'しぶい');
        assert(PokeNatureUtil.getFavoriteFlavor(17) === 'しぶい');
        assert(PokeNatureUtil.getFavoriteFlavor(18) === null);
        assert(PokeNatureUtil.getFavoriteFlavor(19) === 'しぶい');
        assert(PokeNatureUtil.getFavoriteFlavor(20) === 'にがい');
        assert(PokeNatureUtil.getFavoriteFlavor(21) === 'にがい');
        assert(PokeNatureUtil.getFavoriteFlavor(22) === 'にがい');
        assert(PokeNatureUtil.getFavoriteFlavor(23) === 'にがい');
        assert(PokeNatureUtil.getFavoriteFlavor(24) === null);
    });

    it('getDislikedFlavor', () => {
        assert(PokeNatureUtil.getDislikedFlavor(0) === null);
        assert(PokeNatureUtil.getDislikedFlavor(1) === 'すっぱい');
        assert(PokeNatureUtil.getDislikedFlavor(2) === 'あまい');
        assert(PokeNatureUtil.getDislikedFlavor(3) === 'しぶい');
        assert(PokeNatureUtil.getDislikedFlavor(4) === 'にがい');
        assert(PokeNatureUtil.getDislikedFlavor(5) === 'からい');
        assert(PokeNatureUtil.getDislikedFlavor(6) === null);
        assert(PokeNatureUtil.getDislikedFlavor(7) === 'あまい');
        assert(PokeNatureUtil.getDislikedFlavor(8) === 'しぶい');
        assert(PokeNatureUtil.getDislikedFlavor(9) === 'にがい');
        assert(PokeNatureUtil.getDislikedFlavor(10) === 'からい');
        assert(PokeNatureUtil.getDislikedFlavor(11) === 'すっぱい');
        assert(PokeNatureUtil.getDislikedFlavor(12) === null);
        assert(PokeNatureUtil.getDislikedFlavor(13) === 'しぶい');
        assert(PokeNatureUtil.getDislikedFlavor(14) === 'にがい');
        assert(PokeNatureUtil.getDislikedFlavor(15) === 'からい');
        assert(PokeNatureUtil.getDislikedFlavor(16) === 'すっぱい');
        assert(PokeNatureUtil.getDislikedFlavor(17) === 'あまい');
        assert(PokeNatureUtil.getDislikedFlavor(18) === null);
        assert(PokeNatureUtil.getDislikedFlavor(19) === 'にがい');
        assert(PokeNatureUtil.getDislikedFlavor(20) === 'からい');
        assert(PokeNatureUtil.getDislikedFlavor(21) === 'すっぱい');
        assert(PokeNatureUtil.getDislikedFlavor(22) === 'あまい');
        assert(PokeNatureUtil.getDislikedFlavor(23) === 'しぶい');
        assert(PokeNatureUtil.getDislikedFlavor(24) === null);
    });
});