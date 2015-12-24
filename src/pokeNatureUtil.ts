export default class PokeNatureUtil {
    private static natures: string[] = [
        "がんばりや", "さみしがり", "ゆうかん", "いじっぱり", "やんちゃ",
        "ずぶとい", "すなお", "のんき", "わんぱく", "のうてんき",
        "おくびょう", "せっかち", "まじめ", "ようき", "むじゃき",
        "ひかえめ", "おっとり", "れいせい", "てれや", "うっかりや",
        "おだやか", "おとなしい", "なまいき", "しんちょう", "きまぐれ"
    ];

    static toIndex(name: string): number {
        return this.natures.indexOf(name);
    }

    static toName(idx: number): string {
        return this.natures[idx];
    }
    
    static getNameArray(): string[] {
        return this.natures;
    }
}