
// Name - Upside vault

import { split } from "postcss/lib/list"

// Main features - 

// ----- Monster

// BaseEnergy - 50000
// Level Multiplier - 3(n-1) + 1 = 3n - 2
// Level 1 -  50000 * 1 = 50000
// Level 2 -  50000 * 4 = 200000
// Level 3 -  50000 * 7 = 350000
// Level 4 -  50000 * 10 = 500000
// Level 5 -  50000 * 13 = 650000
// Level 100 -  50000 * 298 = 14900000

// ----- Chest

// BaseEnergy -  50000 
// Level Multiplier - 3n - 2
// Level 1 -  50000 * 1 = 50000

// ----- User 
// BaseEnergy - 500
// level : {
//   energy: 2, // means User will be given a total of 1000 energy points
//   refill: 2, // means user will refill 2 energy points per second
//   multitap: 5, // means user will get 5 mini coins per tap on the monster and also deduct 5 energy points from the available energy points until its 0
// } 
// Daily booster - 3/3 When user taps on the monster/chest, the user will get 5x mini coins and there will be NO DEDUCTION from the available energy points for 30 seconds. Only 3 times a day.
// Total Refill - 3/3 WHen user energy points are 0, the user can refill to full energy points . Only 3 times a day.  


// I am working a play 2 earn game with theme of stranger things and money heist web series, the initial version of it is a mini app on telegram with over 100 levels where there will be different monsters in each level. After killing key monsters there will be a chest present to the users.

// How it Works?
// Basically a tapping game where user can tap on the MONSTER to kill and get chest rewards after. The rewards will be in the form of mini coins. The user can use these coins to buy weapons, armors, and other stuff to kill the monsters. The user can also upgrade the weapons and armors to kill the monsters faster.
// there will be 100 plus levels and each level will have different monsters and different rewards. The user can also buy coins with real money to buy weapons and armors.
// The user can also invite friends to play the game and get rewards for it. The user can also watch ads to get rewards. The user can also get rewards by completing daily tasks and challenges.
 
// Upside vault Pitch deck
// 1. Introduction
// Upside vault is a combination of different crypto / blockchain products with the theme of stranger things and money heist web series. The initial version of it is a mini app on telegram with over 30 levels where there will be different monsters in each level.
// 2. Current trend
// Telegram mini apps are a trend these days and people are loving it. The tapping games are trending like hell.
// Not coin - Listed on binance
// Hamster Kombat - 100M tappers in 2 months
// Tapswap - 10M users in 1 month

// 3. Business Model
// Business model is simple, the user can join for free and start tapping and receive coins and can upgrade with real money or ingame assets to upgrade weapons and armors. The user can also invite friends to play the game and get rewards for it.  
// 4. Marketing and Sales Strategy
// We will be using telegram ads, google ads, facebook ads, and influencer marketing to promote the game. We will also be using referral marketing to get more users.
// 
// 5. Competition
// Our competition is with other tapping games like Not coin, Hamster Kombat, Tapswap, etc. We are different from them because of our theme and storyline.

// Our competition is with other tapping games like Not coin, Hamster Kombat, Tapswap, etc. We are different from them because of our theme and storyline.
// 6. Revenue Model
// a. In-app purchases
// b. PR Media services
// c. P2E game
// d. P2P trading
// e. Launchpad

// 7. Revenue Projections
// We are expecting to have 1M users in 6 months and 10M users in 1 year. 
// One Year Projection
// Median Revenue - $1M
// Maximum Revenue - $10M
// Minimum Revenue - $100K

// Revenue from
// 1.PR Media services
// Telegram PR media channel - 1k usd per day - 20k usd per month - 240k usd per year
// Youtube  PR media channel - 2k usd per week - 8k usd per month - 96k usd per year
// Facebook PR media channel - 1k usd per day - 20k usd per month - 240k usd per year
// Instagram PR media channel - 1k usd per day - 20k usd per month - 240k usd per year
// Twitter PR media channel - 1k usd per day - 20k usd per month - 240k usd per year
// SubTotal - 1.1M usd per year

// 2. In app purchases
// 1M users - 5% conversion rate - 50k users - 10 usd per user - 500k usd

// 3. P2P trading
// withdrawal fees - 1 usd per transaction - 10k transactions per day - 300k usd per month - 3.6M usd per year

// 4. Launchpad
// 500 projects - 10k usd per project - 5M usd

// Total Revenue - 10.2M usd per year


// Developers documentation
// Game mechanics - Users can tap on the monster to kill it and get rewards. The user can also tap on the chest after killing the monster to level up and to get rewards. The user can also buy weapons and armors to kill the monsters faster. The user can also upgrade the weapons and armors to kill the monsters faster. The user can also invite friends to play the game and get rewards for it. The user can also get rewards by completing daily tasks and challenges.

// Game flow -
// 1. User will be presented with a monster
// 2. User can tap on the monster to kill it
// 3. After killing the monster, the user will get rewards in the form of mini coins
// 4. The user can tap on the chest to get rewards
// 5. The user can use the mini coins to buy/upgrade weapons and armors
// 6. The user can also invite friends to play the game and get rewards for it
// 7. The user can also get rewards by completing daily tasks and challenges

// Game Screens
// 1. Splash Screen
// 2. Game Screen 
// 3. Shop Screen
// 4. Invite Screen
// 5. Daily Tasks Screen
// 6. Weapons Screen

// Skins for VIP users
// 1. Stranger Things
// 2. Money Heist
// 3. Harry Potter
// 4. Avengers
// 5. Game of Thrones

