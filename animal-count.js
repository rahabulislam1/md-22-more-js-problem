function getAimalCount(miles) {
    let animalDensityFirst10Miles = 10
    let animalDensitySecond10Miles = 50
    let animalDensityThird10Miles = 100
    if (miles <= 10) {
        let totalAnimalCount = miles * animalDensityFirst10Miles;
        return totalAnimalCount;
    }
    else if (miles <= 20) {
        let mod = miles % 10;
        let totalAnimalCount = (10 * animalDensityFirst10Miles) + (mod * animalDensitySecond10Miles);
        return totalAnimalCount;
    }
    else if (miles <= 30) {
        let mod = miles % 20;
        let totalAnimalCount = (10 * animalDensityFirst10Miles) + (10 * animalDensitySecond10Miles) + (mod * animalDensityThird10Miles);
        return totalAnimalCount;
    }
    else {
        console.log('Sorry! This man was already eaten by Tiger Mama.')
    }
}

const totalAnimal = getAimalCount(16);
console.log(totalAnimal);