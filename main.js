class Smoothie {
    constructor(ingredients) {
        this.ingredients = ingredients;
        this.cost = ingredients.reduce((sum, item) => sum + all[item], 0);
    }
    getCost() {
        console.log(`The cost of the cocktail is $${this.cost}.`);
    }
    getPrice() {
        console.log(`The customer price of the cocktail is $${this.cost + this.cost * 1.5}.`);
    }
    getName() {
        let naming = this.ingredients.length == 1 ? 'Smoothie' : 'Fusion';
        console.log(`Enjoy your ${this.ingredients.sort().join('-').replace(/ies/g, 'y')} ${naming}!`);
    }
}

let all = {
    Strawberries: 1.5,
    Banana: 0.5,
    Mango: 2.5,
    Blueberries: 1,
    Raspberries: 1,
    Apple: 1.75,
    Pineapple: 3.5
}

let s1 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"]);
s1.getCost();
s1.getPrice();
s1.getName();
