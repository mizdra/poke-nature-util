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

    it('toIndex', () => {
        assert(natures[0].toIndex() === 0);
        assert(natures[1].toIndex() === 1);
        assert(natures[2].toIndex() === 2);
        assert(natures[3].toIndex() === 3);
        assert(natures[4].toIndex() === 4);
        assert(natures[5].toIndex() === 5);
        assert(natures[6].toIndex() === 6);
        assert(natures[7].toIndex() === 7);
        assert(natures[8].toIndex() === 8);
        assert(natures[9].toIndex() === 9);
        assert(natures[10].toIndex() === 10);
        assert(natures[11].toIndex() === 11);
        assert(natures[12].toIndex() === 12);
        assert(natures[13].toIndex() === 13);
        assert(natures[14].toIndex() === 14);
        assert(natures[15].toIndex() === 15);
        assert(natures[16].toIndex() === 16);
        assert(natures[17].toIndex() === 17);
        assert(natures[18].toIndex() === 18);
        assert(natures[19].toIndex() === 19);
        assert(natures[20].toIndex() === 20);
        assert(natures[21].toIndex() === 21);
        assert(natures[22].toIndex() === 22);
        assert(natures[23].toIndex() === 23);
        assert(natures[24].toIndex() === 24);
    });

    it('toName', () => {
        assert(natures[0].toName() === 'がんばりや');
        assert(natures[1].toName() === 'さみしがり');
        assert(natures[2].toName() === 'ゆうかん');
        assert(natures[3].toName() === 'いじっぱり');
        assert(natures[4].toName() === 'やんちゃ');
        assert(natures[5].toName() === 'ずぶとい');
        assert(natures[6].toName() === 'すなお');
        assert(natures[7].toName() === 'のんき');
        assert(natures[8].toName() === 'わんぱく');
        assert(natures[9].toName() === 'のうてんき');
        assert(natures[10].toName() === 'おくびょう');
        assert(natures[11].toName() === 'せっかち');
        assert(natures[12].toName() === 'まじめ');
        assert(natures[13].toName() === 'ようき');
        assert(natures[14].toName() === 'むじゃき');
        assert(natures[15].toName() === 'ひかえめ');
        assert(natures[16].toName() === 'おっとり');
        assert(natures[17].toName() === 'れいせい');
        assert(natures[18].toName() === 'てれや');
        assert(natures[19].toName() === 'うっかりや');
        assert(natures[20].toName() === 'おだやか');
        assert(natures[21].toName() === 'おとなしい');
        assert(natures[22].toName() === 'なまいき');
        assert(natures[23].toName() === 'しんちょう');
        assert(natures[24].toName() === 'きまぐれ');
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