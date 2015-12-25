'use strict';

export default class PokeNature {
    private static NATURES: string[] = [
        'がんばりや', 'さみしがり', 'ゆうかん', 'いじっぱり', 'やんちゃ',
        'ずぶとい', 'すなお', 'のんき', 'わんぱく', 'のうてんき',
        'おくびょう', 'せっかち', 'まじめ', 'ようき', 'むじゃき',
        'ひかえめ', 'おっとり', 'れいせい', 'てれや', 'うっかりや',
        'おだやか', 'おとなしい', 'なまいき', 'しんちょう', 'きまぐれ'
    ];

    private static INCREASED_STATS: string[] = [
        null, 'こうげき', 'こうげき', 'こうげき', 'こうげき',
        'ぼうぎょ', null, 'ぼうぎょ', 'ぼうぎょ', 'ぼうぎょ',
        'すばやさ', 'すばやさ', null, 'すばやさ', 'すばやさ',
        'とくこう', 'とくこう', 'とくこう', null, 'とくこう',
        'とくぼう', 'とくぼう', 'とくぼう', 'とくぼう', null
    ];

    private static DECREASED_STATS: string[] = [
        null, 'ぼうぎょ', 'すばやさ', 'とくこう', 'とくぼう',
        'こうげき', null, 'すばやさ', 'とくこう', 'とくぼう',
        'こうげき', 'ぼうぎょ', null, 'とくこう', 'とくぼう',
        'こうげき', 'ぼうぎょ', 'すばやさ', null, 'とくぼう',
        'こうげき', 'ぼうぎょ', 'すばやさ', 'とくこう', null
    ];

    private static FAVORITE_FLAVORS: string[] = [
        null, 'からい', 'からい', 'からい', 'からい',
        'すっぱい', null, 'すっぱい', 'すっぱい', 'すっぱい',
        'あまい', 'あまい', null, 'あまい', 'あまい',
        'しぶい', 'しぶい', 'しぶい', null, 'しぶい',
        'にがい', 'にがい', 'にがい', 'にがい', null
    ];

    private static DISLIKED_FLAVORS: string[] = [
        null, 'すっぱい', 'あまい', 'しぶい', 'にがい',
        'からい', null, 'あまい', 'しぶい', 'にがい',
        'からい', 'すっぱい', null, 'しぶい', 'にがい',
        'からい', 'すっぱい', 'あまい', null, 'にがい',
        'からい', 'すっぱい', 'あまい', 'しぶい', null
    ];
    
    private idx: number;

    constructor(name: string);
    constructor(idx: number);
    constructor(nature: any) {
        if (typeof nature === 'string') {
            this.idx = PokeNature.NATURES.indexOf(nature);
        } else {
            this.idx = nature;
        }
    }

    toIndex(): number {
        return this.idx;
    }

    toName(): string {
        return PokeNature.NATURES[this.idx];
    }

    getIncreasedStat(): string {
        return PokeNature.INCREASED_STATS[this.idx];
    }

    getDecreasedStat(): string {
        return PokeNature.DECREASED_STATS[this.idx];
    }

    getFavoriteFlavor(): string {
        return PokeNature.FAVORITE_FLAVORS[this.idx];
    }

    getDislikedFlavor(): string {
        return PokeNature.DISLIKED_FLAVORS[this.idx];
    }

    static getNameArray(): string[] {
        return PokeNature.NATURES;
    }
}