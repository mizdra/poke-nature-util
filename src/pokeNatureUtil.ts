export default class PokeNatureUtil {
    private static natures: string[] = [
        "がんばりや", "さみしがり", "ゆうかん", "いじっぱり", "やんちゃ",
        "ずぶとい", "すなお", "のんき", "わんぱく", "のうてんき",
        "おくびょう", "せっかち", "まじめ", "ようき", "むじゃき",
        "ひかえめ", "おっとり", "れいせい", "てれや", "うっかりや",
        "おだやか", "おとなしい", "なまいき", "しんちょう", "きまぐれ"
    ];

    static toNumber(natureName: string): number {
        return this.natures.indexOf(natureName);
    }

    static toString(natureNum: number): string {
        return this.natures[natureNum];
    }
    
    static getArray(): string[] {
        return this.natures;
    }
}