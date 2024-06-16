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
 
export const damageData = [
    {
        "Normal": {
            "Fighting":2,
            "Ghost":0,
        },
        "Fire": {
          "Fire": 1/2,
          "Water": 2,
          "Grass": 1/2,
          "Ice": 1/2,
          "Ground": 2,
          "Bug": 1/2,
          "Rock": 2,
          "Fairy": 1/2,
          "Steel": 1/2
        },
        "Water": {
          "Fire": 1/2,
          "Water": 1/2,
          "Electric": 2,
          "Grass": 2,
          "Ice": 1/2,
          "Steel": 1/2
        },
        "Electric": {
          "Electric": 1/2,
          "Ground": 2,
          "Flying": 1/2,
          "Steel": 1/2
        },
        "Grass": {
          "Fire": 2,
          "Water": 1/2,
          "Electric": 1/2,
          "Grass": 1/2,
          "Ice": 2,
          "Poison": 2,
          "Ground": 1/2,
          "Flying": 2,
          "Bug":  2, 
        },
        "Ice": {
          "Fire":  2,
          "Ice": 1/2,
          "Fighting": 2,
          "Rock": 2,
          "Steel": 1/2
        },
        "Fighting": {
          "Flying": 1/2,
          "Psychic": 1/2,
          "Bug": 1/2,
          "Rock": 2,
          "Dark": 2,
          "Fairy": 1/2
        },
        "Poison": {
          "Grass": 2,
          "Fighting": 1/2,
          "Poison": 1/2,
          "Ground": 1/2,
          "Psychic": 2,
          "Bug": 1/2,
          "Rock": 1/2,
          "Ghost": 1/2,
          "Steel": 0
        },
        "Ground": {
          "Fire": 2,
          "Electric": 2,
          "Grass": 1/2,
          "Poison": 2,
          "Flying": 0,
          "Bug": 1/2,
          "Rock": 2
        },
        "Flying": {
          "Electric": 1/2,
          "Grass": 2,
          "Fighting": 2,
          "Bug": 2,
          "Rock": 1/2,
          "Steel": 1/2
        },
        "Psychic": {
          "Fighting": 2,
          "Psychic": 1/2,
          "Bug": 2,
          "Ghost": 2,
          "Dark": 0
        },
        "Bug": {
          "Fire": 1/2,
          "Grass": 2,
          "Fighting": 1/2,
          "Ground": 1/2,
          "Flying": 1/2,
          "Rock": 2,
          "Ghost": 1/2,
          "Steel": 1/2,
          "Fairy": 1/2
        },
        "Rock": {
          "Normal": 1/2,
          "Fire": 2,
          "Water": 1/2,
          "Grass": 1/2,
          "Fighting": 1/2,
          "Poison": 2,
          "Ground": 1/2,
          "Flying": 2,
          "Steel": 1/2
        },
        "Ghost": {
          "Normal": 0,
          "Fighting": 0,
          "Poison": 1/2,
          "Bug": 1/2,
          "Ghost": 2,
          "Dark": 2
        },
        "Dragon": {
          "Fire": 1/2,
          "Water": 1/2,
          "Electric": 1/2,
          "Grass": 1/2,
          "Dragon": 2,
          "Fairy": 0
        },
        "Dark": {
          "Fighting": 2,
          "Psychic": 0,
          "Bug": 2,
          "Ghost": 1/2,
          "Dark": 1/2,
          "Fairy": 2
        },
        "Steel": {
          "Fire": 1/2,
          "Water": 1/2,
          "Electric": 1/2,
          "Ice": 2,
          "Rock": 2,
          "Steel": 1/2,
          "Fairy": 2
        },
        "Fairy": {
          "Fighting": 1/2,
          "Poison": 2,
          "Bug": 1/2,
          "Dragon": 0,
          "Dark": 2,
          "Steel": 1/2
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

export const weaponData =  [
        {
            "Level": 1,
            "baseEnergy": 10,
            "coinCost": [
                1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000, 
                1024000, 2048000, 4096000, 8192000, 16384000, 32768000, 49152000, 65536000, 73728000, 81920000, 
                86016000, 90112000, 92160000, 94208000, 96256000, 97280000, 98304000, 99328000, 99664000, 100000000
            ],
            "hourlyRent": [
                100, 190, 230, 280, 350, 450, 600, 800, 1100, 1500, 
                2100, 2900, 4000, 5600, 7800, 10900, 15200, 21200, 29600, 41400, 
                57900, 81000, 113400, 158700, 222200, 311000, 435000, 609000, 853000, 1000000
            ],
            "energyLevels": [
                10, 15, 22, 30, 39, 50, 62, 76, 92, 110, 130, 151, 173, 196, 220, 
                245, 271, 298, 326, 355, 385, 416, 448, 480, 514, 548, 583, 618, 654, 691
            ]
        },
        {
            "Level": 2,
            "baseEnergy": 20,
            "coinCost": [
                2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000, 1024000, 
                2048000, 4096000, 8192000, 16384000, 32768000, 65536000, 131072000, 163840000, 180224000, 196608000, 
                212992000, 229376000, 245760000, 262144000, 278528000, 294912000, 311296000, 327680000, 344064000, 360448000
            ],
            "hourlyRent": [
                200, 380, 460, 560, 700, 900, 1200, 1600, 2200, 3000, 
                4200, 5800, 8000, 11200, 15600, 21800, 30400, 42400, 59200, 82800, 
                115800, 162000, 226800, 317400, 444400, 622000, 870000, 1218000, 1706000, 2400000
            ],
            "energyLevels": [
                20, 30, 45, 61, 80, 102, 128, 157, 190, 226, 265, 308, 353, 402, 453, 508, 565, 625, 688, 754, 823, 895, 970, 1048, 1129, 1213, 1299, 1388, 1480, 1574
            ]
        },
            {
                "Level": 3,
                "baseEnergy": 30,
                "coinCost": [
                    3000, 6000, 12000, 24000, 48000, 96000, 192000, 384000, 768000, 1536000,
                    3072000, 6144000, 12288000, 24576000, 49152000, 98304000, 196608000, 262144000, 327680000, 393216000,
                    458752000, 524288000, 589824000, 655360000, 720896000, 786432000, 851968000, 917504000, 983040000, 1048576000
                ],
                "hourlyRent": [
                    300, 570, 690, 840, 1050, 1350, 1800, 2400, 3300, 4500,
                    6300, 8700, 12000, 16800, 23400, 32700, 45600, 63600, 88800, 124200,
                    173500, 242400, 339400, 474900, 664500, 931800, 1306000, 1830000, 2565000, 3600000
                ],
                "energyLevels": [
                    30, 45, 67, 92, 121, 156, 196, 242, 292, 348, 409, 475, 547, 624, 706, 794, 887, 985, 1089, 1198, 1313, 1433, 1559, 1691, 1830, 1975, 2127, 2286, 2452, 2625
                ]
            },
            {
                "Level": 4,
                "baseEnergy": 40,
                "coinCost": [
                    4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000, 1024000, 2048000,
                    4096000, 8192000, 16384000, 32768000, 65536000, 131072000, 262144000, 524288000, 786432000, 1048576000,
                    1258291200, 1468006400, 1677721600, 1887436800, 2097152000, 2306867200, 2516582400, 2726297600, 2936012800, 3145728000
                ],
                "hourlyRent": [
                    400, 760, 920, 1120, 1400, 1800, 2400, 3200, 4400, 6000,
                    8400, 11600, 16000, 22400, 31200, 43600, 60800, 84800, 118400, 165600,
                    231400, 323400, 452200, 631800, 883600, 1236000, 1729000, 2418000, 3384000, 4738000
                ],
                "energyLevels": [
                    40, 60, 90, 120, 160, 210, 270, 340, 420, 510, 610, 720, 840, 970, 1110, 1260, 1420, 1590, 1770, 1960, 2160, 2370, 2590, 2820, 3060, 3310, 3570, 3840, 4120, 4410
                ]
            },
            {
                "Level": 5,
                "baseEnergy": 50,
                "coinCost": [
                    5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1280000, 2560000,
                    5120000, 10240000, 20480000, 40960000, 81920000, 163840000, 327680000, 655360000, 983040000, 1966080000,
                    2359296000, 2752512000, 3145728000, 3538944000, 3932160000, 4325376000, 4718592000, 5111808000, 5505024000, 6291456000
                ],
                "hourlyRent": [
                    500, 950, 1150, 1400, 1750, 2250, 3000, 4000, 5500, 7500,
                    10500, 14500, 20000, 28000, 39000, 54500, 76000, 106000, 148200, 207400,
                    289700, 404900, 566300, 791800, 1108000, 1549000, 2166000, 3032000, 4239000, 5933000
                ],
                "energyLevels": [
                    50, 75, 112, 154, 203, 260, 325, 401, 487, 583, 693, 819, 960, 1115, 1286, 1475, 1685, 1916, 2168, 2439, 2732, 3046, 3383, 3742, 4124, 4528, 4956, 5407, 5882, 6380
                ]
            },
                {
                    "Level": 6,
                    "baseEnergy": 60,
                    "coinCost": [
                        6000, 12000, 24000, 48000, 96000, 192000, 384000, 768000, 1536000, 3072000,
                        6144000, 12288000, 24576000, 49152000, 98304000, 196608000, 393216000, 786432000, 1572864000, 3145728000,
                        3758096000, 4370464000, 4982832000, 5595200000, 6207568000, 6819936000, 7432304000, 8044672000, 8657040000, 9269408000
                    ],
                    "hourlyRent": [
                        600, 1140, 1380, 1680, 2100, 2700, 3600, 4800, 6600, 9000,
                        12600, 17400, 24000, 33600, 46800, 65400, 91200, 127200, 177600, 248400,
                        347400, 485400, 678600, 948600, 1325400, 1853400, 2590000, 3622000, 5065000, 7081000
                    ],
                    "energyLevels": [
                        60, 90, 135, 182, 240, 312, 397, 501, 626, 769, 941, 1153, 1406, 1718, 2093, 2553, 3113, 3794, 4624, 5634, 6864, 8363, 10196, 12438, 15147, 18439, 22454, 27330, 33260, 40515
                    ]
                },
                {
                    "Level": 7,
                    "baseEnergy": 70,
                    "coinCost": [
                        7000, 14000, 28000, 56000, 112000, 224000, 448000, 896000, 1792000, 3584000,
                        7168000, 14336000, 28672000, 57344000, 114688000, 229376000, 458752000, 917504000, 1835008000, 3670016000,
                        4404019200, 5138022400, 5872025600, 6606028800, 7340032000, 8074035200, 8808038400, 9542041600, 10276044800, 11010048000
                    ],
                    "hourlyRent": [
                        700, 1330, 1610, 1960, 2450, 3150, 4200, 5600, 7700, 10500,
                        14700, 20300, 28100, 39050, 54350, 75650, 105300, 146700, 204300, 284700,
                        397300, 554600, 773900, 1080100, 1507200, 2101800, 2931300, 4090800, 5712000, 7976000
                    ],
                    "energyLevels": [
                        70, 105, 157, 215, 283, 369, 482, 628, 818, 1063, 1381, 1796, 2335, 3035, 3945, 5128, 6666, 8666, 11266, 14645, 19037, 24748, 32172, 41824, 54370, 70680, 91884, 119448, 155282, 201865
                    ]
                },
                {
                    "Level": 8,
                    "baseEnergy": 80,
                    "coinCost": [
                        8000, 16000, 32000, 64000, 128000, 256000, 512000, 1024000, 2048000, 4096000,
                        8192000, 16384000, 32768000, 65536000, 131072000, 262144000, 524288000, 1048576000, 2097152000, 4194304000,
                        5033164800, 5872025600, 6710886400, 7549747200, 8388608000, 9227468800, 10066329600, 10895190400, 11724051200, 12552912000
                    ],
                    "hourlyRent": [
                        800, 1520, 1840, 2240, 2800, 3600, 4800, 6400, 8800, 12000,
                        16800, 23200, 32200, 44800, 62400, 86800, 121000, 168800, 235500, 328600,
                        458600, 640200, 892600, 1245400, 1736000, 2422000, 3380000, 4716000, 6584000, 9198000
                    ],
                    "energyLevels": [
                        80, 120, 180, 246, 324, 422, 551, 719, 937, 1218, 1583, 2058, 2675, 3480, 4524, 5881, 7645, 9948, 12933, 16812, 21855, 28412, 36936, 48016, 62421, 81147, 105491, 137138, 178280, 231664
                    ]
                },
                {
                    "Level": 9,
                    "baseEnergy": 90,
                    "coinCost": [
                        9000, 18000, 36000, 72000, 144000, 288000, 576000, 1152000, 2304000, 4608000,
                        9216000, 18432000, 36864000, 73728000, 147456000, 294912000, 589824000, 1179648000, 2359296000, 4718592000,
                        5662310400, 6606028800, 7549747200, 8493465600, 9437184000, 10380902400, 11324620800, 12268339200, 13212057600, 14155776000
                    ],
                    "hourlyRent": [
                        900, 1710, 2070, 2520, 3150, 4050, 5400, 7200, 9900, 13500,
                        18900, 26100, 36300, 50550, 70350, 97950, 136500, 190200, 265100, 369600,
                        515600, 719100, 1002700, 1397700, 1947000, 2715000, 3786000, 5280000, 7362000, 10266000
                    ],
                    "energyLevels": [
                        90, 135, 202, 277, 365, 476, 621, 810, 1057, 1374, 1786, 2322, 3020, 3926, 5104, 6641, 8633, 11233, 14609, 18995, 24694, 32101, 41731, 54250, 70525, 91683, 119188, 154945, 201429, 261857
                    ]
                },
                {
                    "Level": 10,
                    "baseEnergy": 100,
                    "coinCost": [
                        10000, 20000, 40000, 80000, 160000, 320000, 640000, 1280000, 2560000, 5120000,
                        10240000, 20480000, 40960000, 81920000, 163840000, 327680000, 655360000, 1310720000, 2621440000, 5242880000,
                        6291456000, 7340032000, 8388608000, 9437184000, 10485760000, 11534617600, 12583475200, 13632332800, 14681190400, 15730048000
                    ],
                    "hourlyRent": [
                        1000, 1900, 2300, 2800, 3500, 4500, 6000, 8000, 11000, 15000,
                        21000, 29000, 40000, 56000, 78000, 109000, 152000, 212000, 296000, 414000,
                        578000, 808000, 1128000, 1574000, 2198000, 3070000, 4295000, 6000000, 8380000, 11700000
                    ],
                    "energyLevels": [
                        100, 150, 225, 308, 406, 529, 689, 899, 1170, 1521, 1977, 2570, 3341, 4343, 5646, 7339, 9538, 12399, 16119, 20955, 27242, 35415, 46039, 59850, 77804, 101145, 131489, 171036, 222347, 289050
                    ]
                }
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
 