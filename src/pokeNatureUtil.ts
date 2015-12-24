export default class PokeNatureUtil {
    private static NATURES: string[] = [
        "がんばりや", "さみしがり", "ゆうかん", "いじっぱり", "やんちゃ",
        "ずぶとい", "すなお", "のんき", "わんぱく", "のうてんき",
        "おくびょう", "せっかち", "まじめ", "ようき", "むじゃき",
        "ひかえめ", "おっとり", "れいせい", "てれや", "うっかりや",
        "おだやか", "おとなしい", "なまいき", "しんちょう", "きまぐれ"
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
    
    static getFavoriteFlavor(idx: number): string {
        return this.FAVORITE_FLAVORS[idx];
    }
    
    static getDislikedFlavor(idx: number): string {
        return this.DISLIKED_FLAVORS[idx];
    }
}