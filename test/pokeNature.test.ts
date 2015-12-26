'use strict';

import PokeNature from '../';
import assert from 'power-assert';

describe('PokeNature', () => {
    let natureNames = [
        "がんばりや", "さみしがり", "ゆうかん", "いじっぱり", "やんちゃ",
        "ずぶとい", "すなお", "のんき", "わんぱく", "のうてんき",
        "おくびょう", "せっかち", "まじめ", "ようき", "むじゃき",
        "ひかえめ", "おっとり", "れいせい", "てれや", "うっかりや",
        "おだやか", "おとなしい", "なまいき", "しんちょう", "きまぐれ"
    ];
    let natures: PokeNature[] = new Array(25);

    natureNames.forEach((name, i) => natures[i] = new PokeNature(name));

    it('toNumber', () => {
        assert(natures[0].toNumber() === 0);
        assert(natures[1].toNumber() === 1);
        assert(natures[2].toNumber() === 2);
        assert(natures[3].toNumber() === 3);
        assert(natures[4].toNumber() === 4);
        assert(natures[5].toNumber() === 5);
        assert(natures[6].toNumber() === 6);
        assert(natures[7].toNumber() === 7);
        assert(natures[8].toNumber() === 8);
        assert(natures[9].toNumber() === 9);
        assert(natures[10].toNumber() === 10);
        assert(natures[11].toNumber() === 11);
        assert(natures[12].toNumber() === 12);
        assert(natures[13].toNumber() === 13);
        assert(natures[14].toNumber() === 14);
        assert(natures[15].toNumber() === 15);
        assert(natures[16].toNumber() === 16);
        assert(natures[17].toNumber() === 17);
        assert(natures[18].toNumber() === 18);
        assert(natures[19].toNumber() === 19);
        assert(natures[20].toNumber() === 20);
        assert(natures[21].toNumber() === 21);
        assert(natures[22].toNumber() === 22);
        assert(natures[23].toNumber() === 23);
        assert(natures[24].toNumber() === 24);
    });

    it('toString', () => {
        assert(natures[0].toString() === 'がんばりや');
        assert(natures[1].toString() === 'さみしがり');
        assert(natures[2].toString() === 'ゆうかん');
        assert(natures[3].toString() === 'いじっぱり');
        assert(natures[4].toString() === 'やんちゃ');
        assert(natures[5].toString() === 'ずぶとい');
        assert(natures[6].toString() === 'すなお');
        assert(natures[7].toString() === 'のんき');
        assert(natures[8].toString() === 'わんぱく');
        assert(natures[9].toString() === 'のうてんき');
        assert(natures[10].toString() === 'おくびょう');
        assert(natures[11].toString() === 'せっかち');
        assert(natures[12].toString() === 'まじめ');
        assert(natures[13].toString() === 'ようき');
        assert(natures[14].toString() === 'むじゃき');
        assert(natures[15].toString() === 'ひかえめ');
        assert(natures[16].toString() === 'おっとり');
        assert(natures[17].toString() === 'れいせい');
        assert(natures[18].toString() === 'てれや');
        assert(natures[19].toString() === 'うっかりや');
        assert(natures[20].toString() === 'おだやか');
        assert(natures[21].toString() === 'おとなしい');
        assert(natures[22].toString() === 'なまいき');
        assert(natures[23].toString() === 'しんちょう');
        assert(natures[24].toString() === 'きまぐれ');
    });

    it('getNameArray', () => {
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

    it('getIncreasedStat', () => {
        assert(natures[0].getIncreasedStat() === null);
        assert(natures[1].getIncreasedStat() === 'こうげき');
        assert(natures[2].getIncreasedStat() === 'こうげき');
        assert(natures[3].getIncreasedStat() === 'こうげき');
        assert(natures[4].getIncreasedStat() === 'こうげき');
        assert(natures[5].getIncreasedStat() === 'ぼうぎょ');
        assert(natures[6].getIncreasedStat() === null);
        assert(natures[7].getIncreasedStat() === 'ぼうぎょ');
        assert(natures[8].getIncreasedStat() === 'ぼうぎょ');
        assert(natures[9].getIncreasedStat() === 'ぼうぎょ');
        assert(natures[10].getIncreasedStat() === 'すばやさ');
        assert(natures[11].getIncreasedStat() === 'すばやさ');
        assert(natures[12].getIncreasedStat() === null);
        assert(natures[13].getIncreasedStat() === 'すばやさ');
        assert(natures[14].getIncreasedStat() === 'すばやさ');
        assert(natures[15].getIncreasedStat() === 'とくこう');
        assert(natures[16].getIncreasedStat() === 'とくこう');
        assert(natures[17].getIncreasedStat() === 'とくこう');
        assert(natures[18].getIncreasedStat() === null);
        assert(natures[19].getIncreasedStat() === 'とくこう');
        assert(natures[20].getIncreasedStat() === 'とくぼう');
        assert(natures[21].getIncreasedStat() === 'とくぼう');
        assert(natures[22].getIncreasedStat() === 'とくぼう');
        assert(natures[23].getIncreasedStat() === 'とくぼう');
        assert(natures[24].getIncreasedStat() === null);
    });

    it('getDecreasedStat', () => {
        assert(natures[0].getDecreasedStat() === null);
        assert(natures[1].getDecreasedStat() === 'ぼうぎょ');
        assert(natures[2].getDecreasedStat() === 'すばやさ');
        assert(natures[3].getDecreasedStat() === 'とくこう');
        assert(natures[4].getDecreasedStat() === 'とくぼう');
        assert(natures[5].getDecreasedStat() === 'こうげき');
        assert(natures[6].getDecreasedStat() === null);
        assert(natures[7].getDecreasedStat() === 'すばやさ');
        assert(natures[8].getDecreasedStat() === 'とくこう');
        assert(natures[9].getDecreasedStat() === 'とくぼう');
        assert(natures[10].getDecreasedStat() === 'こうげき');
        assert(natures[11].getDecreasedStat() === 'ぼうぎょ');
        assert(natures[12].getDecreasedStat() === null);
        assert(natures[13].getDecreasedStat() === 'とくこう');
        assert(natures[14].getDecreasedStat() === 'とくぼう');
        assert(natures[15].getDecreasedStat() === 'こうげき');
        assert(natures[16].getDecreasedStat() === 'ぼうぎょ');
        assert(natures[17].getDecreasedStat() === 'すばやさ');
        assert(natures[18].getDecreasedStat() === null);
        assert(natures[19].getDecreasedStat() === 'とくぼう');
        assert(natures[20].getDecreasedStat() === 'こうげき');
        assert(natures[21].getDecreasedStat() === 'ぼうぎょ');
        assert(natures[22].getDecreasedStat() === 'すばやさ');
        assert(natures[23].getDecreasedStat() === 'とくこう');
        assert(natures[24].getDecreasedStat() === null);
    });

    it('getFavoriteFlavor', () => {
        assert(natures[0].getFavoriteFlavor() === null);
        assert(natures[1].getFavoriteFlavor() === 'からい');
        assert(natures[2].getFavoriteFlavor() === 'からい');
        assert(natures[3].getFavoriteFlavor() === 'からい');
        assert(natures[4].getFavoriteFlavor() === 'からい');
        assert(natures[5].getFavoriteFlavor() === 'すっぱい');
        assert(natures[6].getFavoriteFlavor() === null);
        assert(natures[7].getFavoriteFlavor() === 'すっぱい');
        assert(natures[8].getFavoriteFlavor() === 'すっぱい');
        assert(natures[9].getFavoriteFlavor() === 'すっぱい');
        assert(natures[10].getFavoriteFlavor() === 'あまい');
        assert(natures[11].getFavoriteFlavor() === 'あまい');
        assert(natures[12].getFavoriteFlavor() === null);
        assert(natures[13].getFavoriteFlavor() === 'あまい');
        assert(natures[14].getFavoriteFlavor() === 'あまい');
        assert(natures[15].getFavoriteFlavor() === 'しぶい');
        assert(natures[16].getFavoriteFlavor() === 'しぶい');
        assert(natures[17].getFavoriteFlavor() === 'しぶい');
        assert(natures[18].getFavoriteFlavor() === null);
        assert(natures[19].getFavoriteFlavor() === 'しぶい');
        assert(natures[20].getFavoriteFlavor() === 'にがい');
        assert(natures[21].getFavoriteFlavor() === 'にがい');
        assert(natures[22].getFavoriteFlavor() === 'にがい');
        assert(natures[23].getFavoriteFlavor() === 'にがい');
        assert(natures[24].getFavoriteFlavor() === null);
    });

    it('getDislikedFlavor', () => {
        assert(natures[0].getDislikedFlavor() === null);
        assert(natures[1].getDislikedFlavor() === 'すっぱい');
        assert(natures[2].getDislikedFlavor() === 'あまい');
        assert(natures[3].getDislikedFlavor() === 'しぶい');
        assert(natures[4].getDislikedFlavor() === 'にがい');
        assert(natures[5].getDislikedFlavor() === 'からい');
        assert(natures[6].getDislikedFlavor() === null);
        assert(natures[7].getDislikedFlavor() === 'あまい');
        assert(natures[8].getDislikedFlavor() === 'しぶい');
        assert(natures[9].getDislikedFlavor() === 'にがい');
        assert(natures[10].getDislikedFlavor() === 'からい');
        assert(natures[11].getDislikedFlavor() === 'すっぱい');
        assert(natures[12].getDislikedFlavor() === null);
        assert(natures[13].getDislikedFlavor() === 'しぶい');
        assert(natures[14].getDislikedFlavor() === 'にがい');
        assert(natures[15].getDislikedFlavor() === 'からい');
        assert(natures[16].getDislikedFlavor() === 'すっぱい');
        assert(natures[17].getDislikedFlavor() === 'あまい');
        assert(natures[18].getDislikedFlavor() === null);
        assert(natures[19].getDislikedFlavor() === 'にがい');
        assert(natures[20].getDislikedFlavor() === 'からい');
        assert(natures[21].getDislikedFlavor() === 'すっぱい');
        assert(natures[22].getDislikedFlavor() === 'あまい');
        assert(natures[23].getDislikedFlavor() === 'しぶい');
        assert(natures[24].getDislikedFlavor() === null);
    });
});