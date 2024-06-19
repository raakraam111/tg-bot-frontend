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

    isVip1: false, // 2x coins
    isVip2: false, // 3x coins // if both true, 4x

};

export const menuItems = [
    {
        title: 'Mine',
        path: '/mine',
        icon : images.icons_mine ,
        active: false,
    },
    {
        title: 'Task',
        path: '/task',
        icon : images.icons_goal ,
        active: false,

    },
    
    {
        title: 'Attack',
        path: '/tap',
        // hand icon
        icon : images.coins_usd1 ,
        active: true,
    },
    {
        title: 'Boost',
        path: '/boosters',
        icon : images.icons_rocket ,
        active: false,
    },
    {
        title: 'Stats',
        path: '/stats',
        icon : images.icons_pie_chart ,
        active: false,
    },
     
];
 
export const damageMultiplier = [
    {
        "NORMAL": {
          "FIGHTING": 2,
          "GHOST": 0
        },
        "FIGHTING": {
          "FLYING": 0.5,
          "POISON": 0.5,
          "ROCK": 2,
          "BUG": 0.5,
          "GHOST": 0,
          "STEEL": 2,
          "PSYCHIC": 0.5,
          "ICE": 2,
          "DARK": 2,
          "FAIRY": 0.5
        },
        "FLYING": {
          "FIGHTING": 2,
          "ROCK": 0.5,
          "BUG": 2,
          "GRASS": 2,
          "ELECTRIC": 0.5
        },
        "POISON": {
          "POISON": 0.5,
          "GROUND": 0.5,
          "ROCK": 0.5,
          "GHOST": 0.5,
          "GRASS": 2,
          "FAIRY": 2
        },
        "GROUND": {
          "FLYING": 0,
          "POISON": 2,
          "ROCK": 2,
          "STEEL": 2,
          "FIRE": 2,
          "GRASS": 0.5,
          "ELECTRIC": 2
        },
        "ROCK": {
          "FIGHTING": 0.5,
          "FLYING": 2,
          "GROUND": 0.5,
          "BUG": 2,
          "STEEL": 0.5,
          "FIRE": 2,
          "ICE": 2
        },
        "BUG": {
          "FIGHTING": 0.5,
          "FLYING": 0.5,
          "POISON": 0.5,
          "GHOST": 0.5,
          "STEEL": 0.5,
          "FIRE": 0.5,
          "GRASS": 2,
          "PSYCHIC": 2,
          "DARK": 2,
          "FAIRY": 0.5
        },
        "GHOST": {
          "NORMAL": 0,
          "GHOST": 2,
          "PSYCHIC": 2,
          "DARK": 0.5
        },
        "STEEL": {
          "ROCK": 2,
          "STEEL": 0.5,
          "FIRE": 0.5,
          "WATER": 0.5,
          "ELECTRIC": 0.5,
          "ICE": 2,
          "FAIRY": 2
        },
        "FIRE": {
          "ROCK": 0.5,
          "BUG": 2,
          "STEEL": 2,
          "FIRE": 0.5,
          "WATER": 0.5,
          "GRASS": 2,
          "ICE": 2,
          "DRAGON": 0.5
        },
        "WATER": {
          "GROUND": 2,
          "ROCK": 2,
          "FIRE": 2,
          "WATER": 0.5,
          "GRASS": 0.5,
          "DRAGON": 0.5
        },
        "GRASS": {
          "FLYING": 0.5,
          "POISON": 0.5,
          "GROUND": 2,
          "ROCK": 2,
          "BUG": 0.5,
          "FIRE": 0.5,
          "WATER": 2,
          "GRASS": 0.5,
          "ELECTRIC": 0.5,
          "ICE": 0.5,
          "DRAGON": 0.5
        },
        "ELECTRIC": {
          "FLYING": 2,
          "GROUND": 0,
          "WATER": 2,
          "GRASS": 0.5,
          "ELECTRIC": 0.5,
          "DRAGON": 0.5
        },
        "PSYCHIC": {
          "FIGHTING": 2,
          "POISON": 2,
          "PSYCHIC": 0.5,
          "DARK": 0
        },
        "ICE": {
          "FLYING": 2,
          "GROUND": 2,
          "STEEL": 0.5,
          "FIRE": 0.5,
          "WATER": 0.5,
          "GRASS": 2,
          "ICE": 0.5,
          "DRAGON": 2
        },
        "DRAGON": {
          "STEEL": 0.5,
          "DRAGON": 2,
          "FAIRY": 0
        },
        "DARK": {
          "FIGHTING": 0.5,
          "GHOST": 2,
          "PSYCHIC": 2,
          "DARK": 0.5,
          "FAIRY": 0.5
        },
        "FAIRY": {
          "FIGHTING": 2,
          "POISON": 0.5,
          "BUG": 0.5,
          "DRAGON": 2,
          "DARK": 2,
          "STEEL": 0.5
        }
      }
]

export const monsterData = [
    {"Energy": 10000, "Level": 1, "Name": "Skycreech", "Type": "Flying"},
    {"Energy": 20000, "Level": 2, "Name": "Fyrant", "Type": "Fire"},
    {"Energy": 30000, "Level": 3, "Name": "Aquanox", "Type": "Water"},
    {"Energy": 40000, "Level": 4, "Name": "Terradon", "Type": "Ground"},
    {"Energy": 50000, "Level": 5, "Name": "Glaciera", "Type": "Ice"},
    {"Energy": 60000, "Level": 6, "Name": "Ghoulight", "Type": "Ghost"},
    {"Energy": 70000, "Level": 7, "Name": "Dracovish", "Type": "Dragon"},
    {"Energy": 80000, "Level": 8, "Name": "Ferroclash", "Type": "Steel"},
    {"Energy": 90000, "Level": 9, "Name": "Pixiecharm", "Type": "Fairy"},
    {"Energy": 100000, "Level": 10, "Name": "Brawlerus", "Type": "Fighting"},
    {"Energy": 200000, "Level": 11, "Name": "Electrigon", "Type": "Electric"},
    {"Energy": 400000, "Level": 12, "Name": "Venomshade", "Type": "Poison"},
    {"Energy": 800000, "Level": 13, "Name": "Silvawisp", "Type": "Grass"},
    {"Energy": 1000000, "Level": 14, "Name": "Rocfeather", "Type": "Rock"},
    {"Energy": 2000000, "Level": 15, "Name": "Mindflare", "Type": "Psychic"},
    {"Energy": 3000000, "Level": 16, "Name": "Beetleburst", "Type": "Bug"},
    {"Energy": 4000000, "Level": 17, "Name": "Shadeveil", "Type": "Dark"},
    {"Energy": 5000000, "Level": 18, "Name": "Phantomknight", "Type": "Ghost"},
    {"Energy": 10000000, "Level": 19, "Name": "Ironclash", "Type": "Steel"},
    {"Energy": 20000000, "Level": 20, "Name": "Frostbite", "Type": "Ice"},
    {"Energy": 40000000, "Level": 21, "Name": "Flameheart", "Type": "Fire"},
    {"Energy": 80000000, "Level": 22, "Name": "Aquaforce", "Type": "Water"},
    {"Energy": 160000000, "Level": 23, "Name": "Stormwing", "Type": "Flying"},
    {"Energy": 300000000, "Level": 24, "Name": "Netherwarp", "Type": "Psychic"},
    {"Energy": 600000000, "Level": 25, "Name": "Quakefoot", "Type": "Ground"},
    {"Energy": 1000000000, "Level": 26, "Name": "Thornlash", "Type": "Grass"},
    {"Energy": 2000000000, "Level": 27, "Name": "Cobraweave", "Type": "Poison"},
    {"Energy": 3000000000, "Level": 28, "Name": "Steelwing", "Type": "Steel"},
    {"Energy": 5000000000, "Level": 29, "Name": "Dracoshadow", "Type": "Dragon"},
    {"Energy": 10000000000, "Level": 30, "Name": "Nightstalker", "Type": "Dark"}
]
 
export const weaponNames = {
    "Normal": [
        "Guardian's Staff",
        "Peacemaker Blade",
        "Truth Seeker",
        "Balance Bow",
        "Harmony Mace",
        "Ordinary Spear",
        "Simpleton's Sickle",
        "Plain Rapier",
        "Mundane Hammer",
        "Commoner's Dagger"
    ],
    "Fire": [
        "Blaze Sword",
        "Inferno Axe",
        "Flame Whip",
        "Pyro Mace",
        "Volcano Hammer",
        "Scorching Knives",
        "Firebrand Staff",
        "Ember Spear",
        "Burning Gladius",
        "Hellfire Halberd"
    ],
    "Water": [
        "Tidebringer",
        "Aqua Sabre",
        "Torrential Staff",
        "Frost Wave Trident",
        "Oceanic Rod",
        "Rip Tide Dagger",
        "Seastorm Harpoon",
        "Coral Scythe",
        "Rainmaker Bow",
        "Maelstrom Blade"
    ],
    "Electric": [
        "Stormcaller Staff",
        "Thunderstrike Axe",
        "Bolt Thrower",
        "Volt Whip",
        "Lightning Rod",
        "Sparkblade",
        "Tempest Hammer",
        "Shockwave Mace",
        "Conductor Spear",
        "Electric Edge"
    ],
    "Grass": [
        "Nature's Whisper Bow",
        "Leaf Blade",
        "Vine Whip",
        "Thorn Spiker",
        "Herbal Staff",
        "Grove Guardian's Axe",
        "Sapling Scepter",
        "Bramble Hammer",
        "Flora Falchion",
        "Root Entangler"
    ],
    "Ice": [
        "Frostbite Dagger",
        "Glacier Sword",
        "Snowfall Scythe",
        "Icicle Lance",
        "Permafrost Axe",
        "Winter's Edge",
        "Cold Snap Bow",
        "Freeze Ray Staff",
        "Iceberg Mace",
        "Blizzard Blade"
    ],
    "Fighting": [
        "Warrior's Gauntlet",
        "Combat Staff",
        "Battleaxe",
        "Duelist's Sabre",
        "Champion's Fist",
        "Arena Spear",
        "Gladiator's Pike",
        "Contender's Claw",
        "Brawler's Knuckle",
        "Striker's Rod"
    ],
    "Poison": [
        "Toxin Blade",
        "Venomous Whip",
        "Plague Scepter",
        "Infectious Spear",
        "Poison Barb",
        "Viper's Fang",
        "Noxious Bow",
        "Acidic Ax",
        "Toxic Talon",
        "Corrosive Staff"
    ],
    "Ground": [
        "Earthshaker",
        "Terra Blade",
        "Landslide Axe",
        "Quake Hammer",
        "Boulder Mace",
        "Dust Devil Dagger",
        "Soil Spade",
        "Claymore",
        "Gravel Grip",
        "Groundbreaker Spear"
    ],
    "Flying": [
        "Skyblade",
        "Windfury Bow",
        "Aerial Axe",
        "Gust Glaive",
        "Storm Feather",
        "Celestial Rod",
        "Vortex Spear",
        "Drift Dagger",
        "Zephyr Staff",
        "Hovering Halberd"
    ],
    "Psychic": [
        "Mindspike",
        "Soul Sabre",
        "Ethereal Staff",
        "Aura Blade",
        "Visionary Rod",
        "Psychic Wave Mace",
        "Intuition Spear",
        "Clairvoyant Chain",
        "Telekinetic Axe",
        "Mentalist's Bow"
    ],
    "Bug": [
        "Swarm Staff",
        "Insectoid Axe",
        "Beetle Blade",
        "Locust Lance",
        "Chitin Bow",
        "Arachnid Whip",
        "Mantis Scythe",
        "Cicada Sword",
        "Larva Mace",
        "Hornet's Sting"
    ],
    "Rock": [
        "Granite Maul",
        "Pebble Pounder",
        "Crag Hammer",
        "Boulder Blaster",
        "Stone Edge",
        "Sediment Staff",
        "Rockslide Axe",
        "Rubble Rod",
        "Quarry Lance",
        "Limestone Dagger"
    ],
    "Ghost": [
        "Phantom Blade",
        "Specter Sword",
        "Wraith Whip",
        "Apparition Axe",
        "Haunt Hammer",
        "Spirit Staff",
        "Ghoul Glaive",
        "Ectoplasm Edge",
        "Ghostly Grasp",
        "Shadow Sabre"
    ],
    "Dragon": [
        "Drakon Blade",
        "Wyrm Axe",
        "Serpent Spear",
        "Dragonfire Staff",
        "Scale Scythe",
        "Wingblade",
        "Dragon's Breath Bow",
        "Mythic Maul",
        "Beast Fang",
        "Talon Edge"
    ],
    "Dark": [
        "Nightmare Blade",
        "Shadow Staff",
        "Dark Moon",
        "Eclipse Edge",
        "Twilight Scythe",
        "Oblivion Orb",
        "Abyssal Axe",
        "Gloom Glaive",
        "Void Spear",
        "Nocturne Sabre"
    ],
    "Steel": [
        "Ironclad Blade",
        "Steel Spike",
        "Metal Maul",
        "Alloy Axe",
        "Titanium Trident",
        "Carbon Cutlass",
        "Forge Hammer",
        "Foundry Rod",
        "Anvil Arm",
        "Machined Mace"
    ],
    "Fairy": [
        "Pixie Wand",
        "Mystic Moth Mace",
        "Enchanted Spear",
        "Fable Blade",
        "Glimmer Axe",
        "Charm Chisel",
        "Sprite Staff",
        "Whisper Whip",
        "Magic Mushroom Mallet",
        "Fae Falchion"
    ]
}
 