'use strict';

export default class PokeNature {
    private static NATURES: string[] = [
        "がんばりや", "さみしがり", "ゆうかん", "いじっぱり", "やんちゃ",
        "ずぶとい", "すなお", "のんき", "わんぱく", "のうてんき",
        "おくびょう", "せっかち", "まじめ", "ようき", "むじゃき",
        "ひかえめ", "おっとり", "れいせい", "てれや", "うっかりや",
        "おだやか", "おとなしい", "なまいき", "しんちょう", "きまぐれ"
    ];

    private static INCREASED_STATS: string[] = [
        null, "こうげき", "こうげき", "こうげき", "こうげき",
        "ぼうぎょ", null, "ぼうぎょ", "ぼうぎょ", "ぼうぎょ",
        "すばやさ", "すばやさ", null, "すばやさ", "すばやさ",
        "とくこう", "とくこう", "とくこう", null, "とくこう",
        "とくぼう", "とくぼう", "とくぼう", "とくぼう", null
    ];

    private static DECREASED_STATS: string[] = [
        null, "ぼうぎょ", "すばやさ", "とくこう", "とくぼう",
        "こうげき", null, "すばやさ", "とくこう", "とくぼう",
        "こうげき", "ぼうぎょ", null, "とくこう", "とくぼう",
        "こうげき", "ぼうぎょ", "すばやさ", null, "とくぼう",
        "こうげき", "ぼうぎょ", "すばやさ", "とくこう", null
    ];

    private static FAVORITE_FLAVORS: string[] = [
        null, "からい", "からい", "からい", "からい",
        "すっぱい", null, "すっぱい", "すっぱい", "すっぱい",
        "あまい", "あまい", null, "あまい", "あまい",
        "しぶい", "しぶい", "しぶい", null, "しぶい",
        "にがい", "にがい", "にがい", "にがい", null
    ];

    private static DISLIKED_FLAVORS: string[] = [
        null, "すっぱい", "あまい", "しぶい", "にがい",
        "からい", null, "あまい", "しぶい", "にがい",
        "からい", "すっぱい", null, "しぶい", "にがい",
        "からい", "すっぱい", "あまい", null, "にがい",
        "からい", "すっぱい", "あまい", "しぶい", null
    ];

    static toIndex(name: string): number {
        return this.NATURES.indexOf(name);
    }

    static toName(idx: number): string {
        return this.NATURES[idx];
    }

    static getNameArray(): string[] {
        return this.NATURES;
    }

    static getIncreasedStat(idx: number): string {
        return this.INCREASED_STATS[idx];
    }

    static getDecreasedStat(idx: number): string {
        return this.DECREASED_STATS[idx];
    }

    static getFavoriteFlavor(idx: number): string {
        return this.FAVORITE_FLAVORS[idx];
    }

    static getDislikedFlavor(idx: number): string {
        return this.DISLIKED_FLAVORS[idx];
    }
}