class Menu {
    constructor(entrees, sides, beverages, condiments = []) {
        this.entrees = entrees;
        this.sides = sides;
        this.beverages = beverages;
        this.condiments = condiments;
    }

    static createMenuForToday(menuArr){
        let entrees = [];
        let sides = [];
        let beverages = [];
        let condiments = [];
        let currentFoodItem = 'entree';
        for(const menuItem of menuArr){
            switch(menuItem.toLowerCase()){
                case 'entree' :
                    currentFoodItem = 'entree';
                    break;
                case 'side' :
                    currentFoodItem = 'side';
                    break;
                case 'condiment' :
                    currentFoodItem = 'condiment';
                    break;
                case 'beverage' :
                    currentFoodItem = 'beverage';
                    break;
                default :
                    if(currentFoodItem === 'entree'){
                        // entrees.push(new Menujs.Item(menuItem, '', '', '', '', '', '', '', '', '', '', '', '', '', ''));
                        entrees.push(menuItem);
                    } else if(currentFoodItem === 'side'){
                        // sides.push(new Menujs.Item(menuItem, '', '', '', '', '', '', '', '', '', '', '', '', '', ''));
                        sides.push(menuItem);
                    } else if(currentFoodItem === 'condiment'){
                        // condiments.push(new Menujs.Item(menuItem, '', '', '', '', '', '', '', '', '', '', '', '', '', ''));
                        condiments.push(menuItem);
                    } else if(currentFoodItem === 'beverage'){
                        // beverages.push(new Menujs.Item(menuItem, '', '', '', '', '', '', '', '', '', '', '', '', '', ''));
                        beverages.push(menuItem);
                    }
                    break;
            }
        }
        return new Menu(entrees, sides, beverages, condiments);
    }
}

class Item {
    //holy crap this was a pain to write
    constructor(name, calories, saturatedFat, cholesterol, carbohydrates, totalSugars, vitaminA, calcium, fat, transFattyAcid, sodium, dietaryFiber, protein, vitaminC, iron) {
        this.name = name;
        this.calories = calories; //1
        this.saturatedFat = saturatedFat; //2
        this.cholesterol = cholesterol; //3
        this.carbohydrates = carbohydrates; //4
        this.totalSugars = totalSugars; //5
        this.vitaminA = vitaminA; //6
        this.calcium = calcium; //7
        this.fat = fat; //8
        this.transFattyAcid = transFattyAcid; //9
        this.sodium = sodium; //10
        this.dietaryFiber = dietaryFiber; //11
        this.protein = protein; //12
        this.vitaminC = vitaminC; //13
        this.iron = iron; //14
    }
}

module.exports = {
    Menu : Menu,
    Item : Item
}




