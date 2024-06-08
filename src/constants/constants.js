// constants/constants.js 
import images from "./images";

const baseUserEnergy = 500; 
const userLevel = 1;
const multiTapLevel = 0;
const refillLevel = 0;
const userEnergy = baseUserEnergy*userLevel;

export const defaultUserData = {
    name: "Spyder",
    coins: 7.43e5,

    baseUserEnergy: baseUserEnergy,
    userLevel: userLevel,
    userEnergy: baseUserEnergy*userLevel,
    userMaxEnergy: baseUserEnergy*userLevel,

    multiTapLevel: multiTapLevel,
    energyCost: userLevel+multiTapLevel,

    refillLevel: refillLevel,
    refillPerSecond: userLevel+refillLevel,
    
    monsterEnergy: 50000,
    autoTapEnergyCost: userEnergy/100,

    isAutoTapSubscribed: true,
};

export const menuItems = [
    {
        title: 'Ref',
        path: '/referrals',
        icon : images.friend ,
        active: false,
    },
    {
        title: 'Task',
        path: '/task',
        icon : images.goal ,
        active: false,

    },
    
    {
        title: 'Tap',
        path: '/tap',
        // hand icon
        icon : images.orangecoin ,
        active: true,
    },
    {
        title: 'Boost',
        path: '/boosters',
        icon : images.rocket ,
        active: false,
    },
    {
        title: 'Stats',
        path: '/stats',
        icon : images.piechart ,
        active: false,
    },
     
];