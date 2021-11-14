export default class Menu {
    constructor(entrees, sides, condiments, beverages, condiments = []) {
        this.entrees = entrees;
        this.sides = sides;
        this.beverages = beverages;
        this.condiments = condiments;
    }
}

export class Item {
    //holy crap this was a pain to write
    constructor(name, calories, saturatedFat, cholesterol, carbohydrates, totalSugars, vitaminA, calcium, fat, transFattyAcid, sodium, dietaryFiber, protein, vitaminC, iron) {
        this.name = name;
        this.calories = calories;
        this.saturatedFat = saturatedFat;
        this.cholesterol = cholesterol;
        this.carbohydrates = carbohydrates;
        this.totalSugars = totalSugars;
        this.vitaminA = vitaminA;
        this.calcium = calcium;
        this.fat = fat;
        this.transFattyAcid = transFattyAcid;
        this.sodium = sodium;
        this.dietaryFiber = dietaryFiber;
        this.protein = protein;
        this.vitaminC = vitaminC;
        this.iron = iron;
    }
}