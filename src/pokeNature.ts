'use strict';

export default class PokeNature {
    static NAMES: string[] = [
        "hardy" , "lonely", "brave"  , "adamant", "naughty",
        "bold"  , "docile", "relaxed", "impish" , "lax",
        "timid" , "hasty" , "serious", "jolly"  , "naive",
        "modest", "mild"  , "quiet"  , "bashful", "rash",
        "calm"  , "gentle", "sassy"  , "careful", "quirky"
    ];

    static INCREASED_STATS: string[] = [
        null             , 'attack'         , 'attack'         , 'attack'         , 'attack',
        'defense'        , null             , 'defense'        , 'defense'        , 'defense',
        'speed'          , 'speed'          , null             , 'speed'          , 'speed',
        'special-attack' , 'special-attack' , 'special-attack' , null             , 'special-attack',
        'special-defense', 'special-defense', 'special-defense', 'special-defense', null
    ];

    static DECREASED_STATS: string[] = [
        null    , 'defense', 'speed', 'special-attack', 'special-defense',
        'attack', null     , 'speed', 'special-attack', 'special-defense',
        'attack', 'defense', null   , 'special-attack', 'special-defense',
        'attack', 'defense', 'speed', null            , 'special-defense',
        'attack', 'defense', 'speed', 'special-attack', null
    ];

    static FAVORITE_FLAVORS: string[] = [
        null    , 'spicy' , 'spicy' , 'spicy', 'spicy',
        'sour'  , null    , 'sour'  , 'sour', 'sour',
        'sweet' , 'sweet' , null    , 'sweet', 'sweet',
        'dry'   , 'dry'   , 'dry'   , null, 'dry',
        'bitter', 'bitter', 'bitter', 'bitter', null
    ];

    static DISLIKED_FLAVORS: string[] = [
        null   , 'sour', 'sweet', 'dry', 'bitter',
        'spicy', null  , 'sweet', 'dry', 'bitter',
        'spicy', 'sour', null   , 'dry', 'bitter',
        'spicy', 'sour', 'sweet', null , 'bitter',
        'spicy', 'sour', 'sweet', 'dry', null
    ];

    static toId(name: string): number {
        return PokeNature.NAMES.indexOf(name);
    }

    static toName(id: number): string {
        return PokeNature.NAMES[id];
    }

    static getIncreasedStat(id: number): string {
        return PokeNature.INCREASED_STATS[id];
    }

    static getDecreasedStat(id: number): string {
        return PokeNature.DECREASED_STATS[id];
    }

    static getFavoriteFlavor(id: number): string {
        return PokeNature.FAVORITE_FLAVORS[id];
    }

    static getDislikedFlavor(id: number): string {
        return PokeNature.DISLIKED_FLAVORS[id];
    }
}