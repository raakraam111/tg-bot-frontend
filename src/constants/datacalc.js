function calculateUpgrades(baseEnergy, baseCoinCost, baseRent) {
    let energyLevels = [];
    let coinCosts = [];
    let hourlyRents = [];
    
    let energyIncrement = baseEnergy * 0.5; // Incremental factor for energy, initially assumed
    let rentGrowthRate = 0.9; // Incremental growth rate for rent, initially assumed
    const randomFactor = 0.1; // Randomness factor (5%)

    for (let i = 0; i < 15; i++) {
        // Energy levels calculation with randomness
        if (i === 0) {
            energyLevels.push(baseEnergy);
        } else {
            energyIncrement += baseEnergy * 0.1; // Increment grows by 10% of base each level
            let randomAdjustment = 1 + (Math.random() * 2 * randomFactor - randomFactor); // Random factor between -5% and +5%
            energyLevels.push(Math.round((energyLevels[i - 1] + energyIncrement) * randomAdjustment));
        }

        // Coin cost calculation with randomness
        let coinRandomAdjustment = 1 + (Math.random() * 2 * randomFactor - randomFactor); // Random factor between -5% and +5%
        coinCosts.push(Math.round(baseCoinCost * Math.pow(2, i) * coinRandomAdjustment));

        // Hourly rent calculation with randomness
        if (i === 0) {
            hourlyRents.push(baseRent);
        } else {
            let rentRandomAdjustment = 1 + (Math.random() * 2 * randomFactor - randomFactor); // Random factor between -5% and +5%
            hourlyRents.push(Math.round(hourlyRents[i - 1] * (1 + rentGrowthRate * 0.1) * rentRandomAdjustment));
        }
    }

    return { energyLevels, coinCosts, hourlyRents };
}

// Example usage for Level 1 and Level 2
const level1 = calculateUpgrades(10, 1000, 100);
const level2 = calculateUpgrades(20, 2000, 200);

console.log('Level 1 Upgrades:', level1);
console.log('Level 2 Upgrades:', level2);
