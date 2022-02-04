function getTotalWood(bedQuantity, chairQuantity, tableQuantity) {
    const perTableWood = 20;
    const perChairWood = 15;
    const perBedWood = 40;
    const totalTableWood = perTableWood * tableQuantity;
    const totalChairWood = perChairWood * chairQuantity;
    const totalBedWood = perBedWood * bedQuantity;

    const totalWood = totalBedWood + totalChairWood + totalTableWood;

    return totalWood;
}

const totalRequiredWood = getTotalWood(1, 2, 3);
console.log(totalRequiredWood);