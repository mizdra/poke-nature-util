'use strict';

import PokeNature from '../';
import assert from 'power-assert';

describe('PokeNature', () => {

    it('PokeNature.NAMES', () => {
        const actual: string[] = PokeNature.NAMES;
        const expect: string[] = [
            "hardy" , "lonely", "brave"  , "adamant", "naughty",
            "bold"  , "docile", "relaxed", "impish" , "lax",
            "timid" , "hasty" , "serious", "jolly"  , "naive",
            "modest", "mild"  , "quiet"  , "bashful", "rash",
            "calm"  , "gentle", "sassy"  , "careful", "quirky"
        ];
        assert.deepEqual(actual, expect);
    });

    it('PokeNature.INCREASED_STATS', () => {
        const actual: string[] = PokeNature.INCREASED_STATS;
        const expect: string[] = [
            null             , 'attack'         , 'attack'         , 'attack'         , 'attack',
            'defense'        , null             , 'defense'        , 'defense'        , 'defense',
            'speed'          , 'speed'          , null             , 'speed'          , 'speed',
            'special-attack' , 'special-attack' , 'special-attack' , null             , 'special-attack',
            'special-defense', 'special-defense', 'special-defense', 'special-defense', null
        ];
        assert.deepEqual(actual, expect);
    });

    it('PokeNature.DECREASED_STATS', () => {
        const actual: string[] = PokeNature.DECREASED_STATS;
        const expect: string[] = [
            null    , 'defense', 'speed', 'special-attack', 'special-defense',
            'attack', null     , 'speed', 'special-attack', 'special-defense',
            'attack', 'defense', null   , 'special-attack', 'special-defense',
            'attack', 'defense', 'speed', null            , 'special-defense',
            'attack', 'defense', 'speed', 'special-attack', null
        ];
        assert.deepEqual(actual, expect);
    });

    it('PokeNature.FAVORITE_FLAVORS', () => {
        const actual: string[] = PokeNature.FAVORITE_FLAVORS;
        const expect: string[] = [
            null    , 'spicy' , 'spicy' , 'spicy', 'spicy',
            'sour'  , null    , 'sour'  , 'sour', 'sour',
            'sweet' , 'sweet' , null    , 'sweet', 'sweet',
            'dry'   , 'dry'   , 'dry'   , null, 'dry',
            'bitter', 'bitter', 'bitter', 'bitter', null
        ];
        assert.deepEqual(actual, expect);
    });

    it('PokeNature.DISLIKED_FLAVORS', () => {
        const actual: string[] = PokeNature.DISLIKED_FLAVORS;
        const expect: string[] = [
            null   , 'sour', 'sweet', 'dry', 'bitter',
            'spicy', null  , 'sweet', 'dry', 'bitter',
            'spicy', 'sour', null   , 'dry', 'bitter',
            'spicy', 'sour', 'sweet', null , 'bitter',
            'spicy', 'sour', 'sweet', 'dry', null
        ];
        assert.deepEqual(actual, expect);
    });

    it('PokeNature.toId', () => {
        assert(PokeNature.toId('hardy')   === 0);
        assert(PokeNature.toId('lonely')  === 1);
        assert(PokeNature.toId('brave')   === 2);
        assert(PokeNature.toId('adamant') === 3);
        assert(PokeNature.toId('naughty') === 4);
        assert(PokeNature.toId('bold')    === 5);
        assert(PokeNature.toId('docile')  === 6);
        assert(PokeNature.toId('relaxed') === 7);
        assert(PokeNature.toId('impish')  === 8);
        assert(PokeNature.toId('lax')     === 9);
        assert(PokeNature.toId('timid')   === 10);
        assert(PokeNature.toId('hasty')   === 11);
        assert(PokeNature.toId('serious') === 12);
        assert(PokeNature.toId('jolly')   === 13);
        assert(PokeNature.toId('naive')   === 14);
        assert(PokeNature.toId('modest')  === 15);
        assert(PokeNature.toId('mild')    === 16);
        assert(PokeNature.toId('quiet')   === 17);
        assert(PokeNature.toId('bashful') === 18);
        assert(PokeNature.toId('rash')    === 19);
        assert(PokeNature.toId('calm')    === 20);
        assert(PokeNature.toId('gentle')  === 21);
        assert(PokeNature.toId('sassy')   === 22);
        assert(PokeNature.toId('careful') === 23);
        assert(PokeNature.toId('quirky')  === 24);
    });

    it('PokeNature.toName', () => {
        assert(PokeNature.toName(0)  === 'hardy');
        assert(PokeNature.toName(1)  === 'lonely');
        assert(PokeNature.toName(2)  === 'brave');
        assert(PokeNature.toName(3)  === 'adamant');
        assert(PokeNature.toName(4)  === 'naughty');
        assert(PokeNature.toName(5)  === 'bold');
        assert(PokeNature.toName(6)  === 'docile');
        assert(PokeNature.toName(7)  === 'relaxed');
        assert(PokeNature.toName(8)  === 'impish');
        assert(PokeNature.toName(9)  === 'lax');
        assert(PokeNature.toName(10) === 'timid');
        assert(PokeNature.toName(11) === 'hasty');
        assert(PokeNature.toName(12) === 'serious');
        assert(PokeNature.toName(13) === 'jolly');
        assert(PokeNature.toName(14) === 'naive');
        assert(PokeNature.toName(15) === 'modest');
        assert(PokeNature.toName(16) === 'mild');
        assert(PokeNature.toName(17) === 'quiet');
        assert(PokeNature.toName(18) === 'bashful');
        assert(PokeNature.toName(19) === 'rash');
        assert(PokeNature.toName(20) === 'calm');
        assert(PokeNature.toName(21) === 'gentle');
        assert(PokeNature.toName(22) === 'sassy');
        assert(PokeNature.toName(23) === 'careful');
        assert(PokeNature.toName(24) === 'quirky');
    });

    it('PokeNature.getIncreasedStat', () => {
        assert(PokeNature.getIncreasedStat(0)  === null);
        assert(PokeNature.getIncreasedStat(1)  === 'attack');
        assert(PokeNature.getIncreasedStat(2)  === 'attack');
        assert(PokeNature.getIncreasedStat(3)  === 'attack');
        assert(PokeNature.getIncreasedStat(4)  === 'attack');
        assert(PokeNature.getIncreasedStat(5)  === 'defense');
        assert(PokeNature.getIncreasedStat(6)  === null);
        assert(PokeNature.getIncreasedStat(7)  === 'defense');
        assert(PokeNature.getIncreasedStat(8)  === 'defense');
        assert(PokeNature.getIncreasedStat(9)  === 'defense');
        assert(PokeNature.getIncreasedStat(10) === 'speed');
        assert(PokeNature.getIncreasedStat(11) === 'speed');
        assert(PokeNature.getIncreasedStat(12) === null);
        assert(PokeNature.getIncreasedStat(13) === 'speed');
        assert(PokeNature.getIncreasedStat(14) === 'speed');
        assert(PokeNature.getIncreasedStat(15) === 'special-attack');
        assert(PokeNature.getIncreasedStat(16) === 'special-attack');
        assert(PokeNature.getIncreasedStat(17) === 'special-attack');
        assert(PokeNature.getIncreasedStat(18) === null);
        assert(PokeNature.getIncreasedStat(19) === 'special-attack');
        assert(PokeNature.getIncreasedStat(20) === 'special-defense');
        assert(PokeNature.getIncreasedStat(21) === 'special-defense');
        assert(PokeNature.getIncreasedStat(22) === 'special-defense');
        assert(PokeNature.getIncreasedStat(23) === 'special-defense');
        assert(PokeNature.getIncreasedStat(24) === null);
    });

    it('PokeNature.getDecreasedStat', () => {
        assert(PokeNature.getDecreasedStat(0)  === null);
        assert(PokeNature.getDecreasedStat(1)  === 'defense');
        assert(PokeNature.getDecreasedStat(2)  === 'speed');
        assert(PokeNature.getDecreasedStat(3)  === 'special-attack');
        assert(PokeNature.getDecreasedStat(4)  === 'special-defense');
        assert(PokeNature.getDecreasedStat(5)  === 'attack');
        assert(PokeNature.getDecreasedStat(6)  === null);
        assert(PokeNature.getDecreasedStat(7)  === 'speed');
        assert(PokeNature.getDecreasedStat(8)  === 'special-attack');
        assert(PokeNature.getDecreasedStat(9)  === 'special-defense');
        assert(PokeNature.getDecreasedStat(10) === 'attack');
        assert(PokeNature.getDecreasedStat(11) === 'defense');
        assert(PokeNature.getDecreasedStat(12) === null);
        assert(PokeNature.getDecreasedStat(13) === 'special-attack');
        assert(PokeNature.getDecreasedStat(14) === 'special-defense');
        assert(PokeNature.getDecreasedStat(15) === 'attack');
        assert(PokeNature.getDecreasedStat(16) === 'defense');
        assert(PokeNature.getDecreasedStat(17) === 'speed');
        assert(PokeNature.getDecreasedStat(18) === null);
        assert(PokeNature.getDecreasedStat(19) === 'special-defense');
        assert(PokeNature.getDecreasedStat(20) === 'attack');
        assert(PokeNature.getDecreasedStat(21) === 'defense');
        assert(PokeNature.getDecreasedStat(22) === 'speed');
        assert(PokeNature.getDecreasedStat(23) === 'special-attack');
        assert(PokeNature.getDecreasedStat(24) === null);
    });

    it('PokeNature.getFavoriteFlavor', () => {
        assert(PokeNature.getFavoriteFlavor(0)  === null);
        assert(PokeNature.getFavoriteFlavor(1)  === 'spicy');
        assert(PokeNature.getFavoriteFlavor(2)  === 'spicy');
        assert(PokeNature.getFavoriteFlavor(3)  === 'spicy');
        assert(PokeNature.getFavoriteFlavor(4)  === 'spicy');
        assert(PokeNature.getFavoriteFlavor(5)  === 'sour');
        assert(PokeNature.getFavoriteFlavor(6)  === null);
        assert(PokeNature.getFavoriteFlavor(7)  === 'sour');
        assert(PokeNature.getFavoriteFlavor(8)  === 'sour');
        assert(PokeNature.getFavoriteFlavor(9)  === 'sour');
        assert(PokeNature.getFavoriteFlavor(10) === 'sweet');
        assert(PokeNature.getFavoriteFlavor(11) === 'sweet');
        assert(PokeNature.getFavoriteFlavor(12) === null);
        assert(PokeNature.getFavoriteFlavor(13) === 'sweet');
        assert(PokeNature.getFavoriteFlavor(14) === 'sweet');
        assert(PokeNature.getFavoriteFlavor(15) === 'dry');
        assert(PokeNature.getFavoriteFlavor(16) === 'dry');
        assert(PokeNature.getFavoriteFlavor(17) === 'dry');
        assert(PokeNature.getFavoriteFlavor(18) === null);
        assert(PokeNature.getFavoriteFlavor(19) === 'dry');
        assert(PokeNature.getFavoriteFlavor(20) === 'bitter');
        assert(PokeNature.getFavoriteFlavor(21) === 'bitter');
        assert(PokeNature.getFavoriteFlavor(22) === 'bitter');
        assert(PokeNature.getFavoriteFlavor(23) === 'bitter');
        assert(PokeNature.getFavoriteFlavor(24) === null);
    });

    it('PokeNature.getDislikedFlavor', () => {
        assert(PokeNature.getDislikedFlavor(0)  === null);
        assert(PokeNature.getDislikedFlavor(1)  === 'sour');
        assert(PokeNature.getDislikedFlavor(2)  === 'sweet');
        assert(PokeNature.getDislikedFlavor(3)  === 'dry');
        assert(PokeNature.getDislikedFlavor(4)  === 'bitter');
        assert(PokeNature.getDislikedFlavor(5)  === 'spicy');
        assert(PokeNature.getDislikedFlavor(6)  === null);
        assert(PokeNature.getDislikedFlavor(7)  === 'sweet');
        assert(PokeNature.getDislikedFlavor(8)  === 'dry');
        assert(PokeNature.getDislikedFlavor(9)  === 'bitter');
        assert(PokeNature.getDislikedFlavor(10) === 'spicy');
        assert(PokeNature.getDislikedFlavor(11) === 'sour');
        assert(PokeNature.getDislikedFlavor(12) === null);
        assert(PokeNature.getDislikedFlavor(13) === 'dry');
        assert(PokeNature.getDislikedFlavor(14) === 'bitter');
        assert(PokeNature.getDislikedFlavor(15) === 'spicy');
        assert(PokeNature.getDislikedFlavor(16) === 'sour');
        assert(PokeNature.getDislikedFlavor(17) === 'sweet');
        assert(PokeNature.getDislikedFlavor(18) === null);
        assert(PokeNature.getDislikedFlavor(19) === 'bitter');
        assert(PokeNature.getDislikedFlavor(20) === 'spicy');
        assert(PokeNature.getDislikedFlavor(21) === 'sour');
        assert(PokeNature.getDislikedFlavor(22) === 'sweet');
        assert(PokeNature.getDislikedFlavor(23) === 'dry');
        assert(PokeNature.getDislikedFlavor(24) === null);
    });
});