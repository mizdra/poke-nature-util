'use strict';

export default class PokeNature {
    /**
     * The list of Nature names according to Nature id order.
     */
    static NAMES: string[] = [
        "hardy" , "lonely", "brave"  , "adamant", "naughty",
        "bold"  , "docile", "relaxed", "impish" , "lax",
        "timid" , "hasty" , "serious", "jolly"  , "naive",
        "modest", "mild"  , "quiet"  , "bashful", "rash",
        "calm"  , "gentle", "sassy"  , "careful", "quirky"
    ];

    /**
     * The list of increased stats according to Nature id order.
     */
    static INCREASED_STATS: string[] = [
        null             , 'attack'         , 'attack'         , 'attack'         , 'attack',
        'defense'        , null             , 'defense'        , 'defense'        , 'defense',
        'speed'          , 'speed'          , null             , 'speed'          , 'speed',
        'special-attack' , 'special-attack' , 'special-attack' , null             , 'special-attack',
        'special-defense', 'special-defense', 'special-defense', 'special-defense', null
    ];

    /**
     * The list of decreased stats according to Nature id order.
     */
    static DECREASED_STATS: string[] = [
        null    , 'defense', 'speed', 'special-attack', 'special-defense',
        'attack', null     , 'speed', 'special-attack', 'special-defense',
        'attack', 'defense', null   , 'special-attack', 'special-defense',
        'attack', 'defense', 'speed', null            , 'special-defense',
        'attack', 'defense', 'speed', 'special-attack', null
    ];

    /**
     * The list of favorite flavors according to Nature id order.
     */
    static FAVORITE_FLAVORS: string[] = [
        null    , 'spicy' , 'spicy' , 'spicy', 'spicy',
        'sour'  , null    , 'sour'  , 'sour', 'sour',
        'sweet' , 'sweet' , null    , 'sweet', 'sweet',
        'dry'   , 'dry'   , 'dry'   , null, 'dry',
        'bitter', 'bitter', 'bitter', 'bitter', null
    ];

    /**
     * The list of disliked flavors according to Nature id order.
     */
    static DISLIKED_FLAVORS: string[] = [
        null   , 'sour', 'sweet', 'dry', 'bitter',
        'spicy', null  , 'sweet', 'dry', 'bitter',
        'spicy', 'sour', null   , 'dry', 'bitter',
        'spicy', 'sour', 'sweet', null , 'bitter',
        'spicy', 'sour', 'sweet', 'dry', null
    ];

    /**
     * Converts a Nature name into the id.
     * @param name - The Nature name to convert
     * @returns    - The Nature id for the specified name
     */
    static toId(name: string): number {
        return PokeNature.NAMES.indexOf(name);
    }

    /**
     * Converts a Nature id into the name.
     * @param id - The Nature id to convert
     * @returns  - The Nature name for the specified id
     */
    static toName(id: number): string {
        return PokeNature.NAMES[id];
    }

    /**
     * Returns the increased stat for the specified id.
     * @param id - The Nature id for the increased stat to return
     * @returns  - The increased stat for the specified id.
     */
    static getIncreasedStat(id: number): string {
        return PokeNature.INCREASED_STATS[id];
    }

    /**
     * Returns the decreased stat for the specified id.
     * @param id - The Nature id for the decreased stat to return
     * @returns  - The decreased stat for the specified id.
     */
    static getDecreasedStat(id: number): string {
        return PokeNature.DECREASED_STATS[id];
    }

    /**
     * Returns the favorite flavor for the specified id.
     * @param id - The Nature id for the favorite flavor to return
     * @returns  - The favorite flavor for the specified id.
     */
    static getFavoriteFlavor(id: number): string {
        return PokeNature.FAVORITE_FLAVORS[id];
    }

    /**
     * Returns the disliked flavor for the specified id.
     * @param id - The Nature id for the disliked flavor to return
     * @returns  - The disliked flavor for the specified id.
     */
    static getDislikedFlavor(id: number): string {
        return PokeNature.DISLIKED_FLAVORS[id];
    }
}