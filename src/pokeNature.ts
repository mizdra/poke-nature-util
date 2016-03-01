'use strict';

export default class PokeNature {
    private static NAMES: string[] = [
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

    static toNumber(name: string): number {
        return PokeNature.NAMES.indexOf(name);
    }

    static toString(num: number): string {
        return PokeNature.NAMES[num];
    }

    static getIncreasedStat(num: number): string {
        return PokeNature.INCREASED_STATS[num];
    }

    static getDecreasedStat(num: number): string {
        return PokeNature.DECREASED_STATS[num];
    }

    static getFavoriteFlavor(num: number): string {
        return PokeNature.FAVORITE_FLAVORS[num];
    }

    static getDislikedFlavor(num: number): string {
        return PokeNature.DISLIKED_FLAVORS[num];
    }

    static getNameArray(): string[] {
        return PokeNature.NAMES;
    }
}