// 1. Create a class named Employee with two properties given person's first and last names. 
//     Add two methods fullname and email in the Employee class

//     The method fullname returns by simply joining the first and last name together, separated by a space. 
//     The method email returns by joining the first and last name together with a . in between, and follow it with @company.com at the end.
//     Make sure the entire email is in lowercase. 

//     Examples:
//     emp1 = Employee("John", "Smith")
//     emp1.fullname() ➞ "John Smith"

//     emp2 = Employee("Mary",  "Sue")
//     emp2.email() ➞ "mary.sue@company.com"

//     emp3 = Employee("Antony", "Walker")
//     emp3.firstname ➞ "Antony"

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    email() {
        console.log(`${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@company.com`);
    }
}
let john = new Employee('John', 'Doe');
john.fullName();
john.email();
console.log('--------------------------------');

// 2. Fruit Smoothie. (Problem solving)
//     Create a class Smoothie and do the following:
//     - Create a constructor property called ingredients.
//     - Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
//     - Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to two decimal places.
//     - Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence.
//     If there are multiple ingredients, add the word "Fusion" to the end but otherwise, add "Smoothie".
//     Remember to change "-berries" to "-berry". See the examples below.

//     Ingredient	    Price
//     Strawberries	    $1.50
//     Banana	        $0.50
//     Mango	        $2.50
//     Blueberries	    $1.00
//     Raspberries	    $1.00
//     Apple	        $1.75
//     Pineapple	    $3.50

//     Examples:
//         s1 = new Smoothie(["Banana"])
//         s1.ingredients ➞ ["Banana"]
//         s1.getCost() ➞ "$0.50"
//         s1.getPrice() ➞ "$1.25"
//         s1.getName() ➞ "Banana Smoothie"

//         s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"])
//         s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]
//         s2.getCost() ➞ "$3.50"
//         s2.getPrice() ➞ "$8.75"
//         s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion"

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
console.log('--------------------------------');

// 3. Coffee Shop App
//     Write a class called CoffeeShop, which has three instance variables:

//         1. name : a string (basically, of the shop)
//         2. menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
//         3. orders : an empty array

//     and seven methods:

//     1. addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
//     2. fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
//     3. listOrders: returns the list of orders taken, otherwise, an empty array.
//     4. dueAmount: returns the total amount due for the orders taken.
//     5. cheapestItem: returns the name of the cheapest item on the menu.
//     6. drinksOnly: returns only the item names of type drink from the menu.
//     7. foodOnly: returns only the item names of type food from the menu.

//     IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.
//     NOTES:  Round off due amount up to two decimal places.

//     Use these mock data:
//         let shopName = "Tesha's coffee shop";
//         let menu = [
//             {item: 'orange juice', type: 'drink' , price: 1.50 },
//             {item: 'lemonade', type: 'drink' , price: 1.25 },
//             {item: 'cranberry juice', type: 'drink' , price: 1.75 },
//             {item: 'pineapple juice', type: 'drink' , price: 2.50 },
//             {item: 'lemon iced tea', type: 'drink' , price: 1.50 },
//             {item: 'vanilla chai latte', type: 'drink' , price: 3.50 },
//             {item: 'hot chocolate', type: 'drink' , price: 3.00 },
//             {item: 'iced coffee', type: 'drink' , price: 1.75 },
//             {item: 'tuna sandwich', type: 'food' , price: 3.75 },
//             {item: 'ham and cheese sandwich', type: 'food' , price: 4.00 },
//             {item: 'bacon and egg', type: 'food' , price: 4.25 },
//             {item: 'hamburger', type: 'food' , price: 5.25 },
//             {item: 'cinnamon roll', type: 'food' , price: 4.75 },
//         ]
//         let orders = [];

//     Examples:
//     // create new instance object    
//     let tcs = new CoffeeShop(shopName, menu, orders);

//     tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
//     // Tesha's coffee shop does not sell hot cocoa
//     tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
//     // specifying the variant of "iced tea" will help the process

//     tcs.addOrder("cinnamon roll") ➞  "Order added!"
//     tcs.addOrder("iced coffee") ➞ "Order added!"
//     tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
//     // the list of all the items in the current order

//     tcs.dueAmount() ➞ 6.50

//     tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
//     tcs.fulfillOrder() ➞ "The iced coffee is ready!"
//     tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
//     // all orders have been presumably served

//     tcs.listOrders() ➞ []
//     // an empty array is returned if all orders have been exhausted

//     tcs.dueAmount() ➞ 0.0
//     // no new orders taken, expect a zero payable

//     tcs.cheapestItem() ➞ "lemonade"
//     tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
//     tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]

let shopName = "Tesha's coffee shop";
let menu = [
    { item: 'orange juice', type: 'drink', price: 1.50 },
    { item: 'lemonade', type: 'drink', price: 1.25 },
    { item: 'cranberry juice', type: 'drink', price: 1.75 },
    { item: 'pineapple juice', type: 'drink', price: 2.50 },
    { item: 'lemon iced tea', type: 'drink', price: 1.50 },
    { item: 'vanilla chai latte', type: 'drink', price: 3.50 },
    { item: 'hot chocolate', type: 'drink', price: 3.00 },
    { item: 'iced coffee', type: 'drink', price: 1.75 },
    { item: 'tuna sandwich', type: 'food', price: 3.75 },
    { item: 'ham and cheese sandwich', type: 'food', price: 4.00 },
    { item: 'bacon and egg', type: 'food', price: 4.25 },
    { item: 'hamburger', type: 'food', price: 5.25 },
    { item: 'cinnamon roll', type: 'food', price: 4.75 }
]
let orders = [];

class CoffeeShop {
    constructor(name, menu, orders) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }
    addOrder = (input) => {
        // check if item exists on the menu
        let testArr = [];
        // push all items to the testArray
        for (let item in menu) {
            testArr.push(Object.values(menu[item])[0]);
        }
        if (testArr.includes(input)) {
            orders.push(input);
            console.log("Order added!");
        } else {
            console.log("This item is currently unavailable!");
        }
    }
    listOrders = () => {
        console.log(this.orders);
    }
    dueAmount = () => {
        let total = 0;
        // get price of each item and add it to total
        for (let i = 0; i < this.orders.length; i++) {
            // get index number of each dish
            let index = menu.findIndex(dish => dish.item == this.orders[i]);
            // get price of that index
            total += menu[index].price;
        }
        console.log(total.toFixed(2));
    }
    fulfillOrder = () => {
        if (this.orders == "") {
            console.log("All orders have been fulfilled!");
        } else {
            console.log(`The ${this.orders[0]} is ready!`);
            this.orders.splice(0, 1);
        }
    }
    cheapestItem = () => {
        let arr = [];
        // get all prices and push it to an array
        for (let i = 0; i < menu.length; i++) {
            arr.push(menu[i].price);
        }
        let cheapest = arr.sort()[0];
        // get the index number of it and log the name
        let index = menu.findIndex(dish => dish.price == cheapest);
        console.log(menu[index].item);
    }
    drinksOnly = () => {
        let arr = [];
        // filter drinks and push them to an array;
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].type == "drink") {
                arr.push(menu[i].item);
            }
        }
        console.log(arr);
    }
    foodOnly = () => {
        let arr = [];
        // filter drinks and push them to an array;
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].type == "food") {
                arr.push(menu[i].item);
            }
        }
        console.log(arr);
    }
}

let tcs = new CoffeeShop(shopName, menu, orders);
tcs.addOrder("hot cocoa"); // ➞ "This item is currently unavailable!"
tcs.addOrder("iced tea"); //➞ "This item is currently unavailable!" 
tcs.addOrder("cinnamon roll") //➞  "Order adedd!"
tcs.addOrder("iced coffee") //➞ "Order added!"
tcs.listOrders(); //➞ ["cinnamon roll", "iced coffee"]
tcs.dueAmount() //➞ 6.50
tcs.fulfillOrder() //➞ "The cinnamon roll is ready!" 
tcs.fulfillOrder() //➞ "The iced coffee is ready!"
tcs.fulfillOrder() //➞ "All orders have been fulfilled!"
tcs.listOrders() //➞ []
tcs.dueAmount() //➞ 0.0
tcs.cheapestItem() //➞ "lemonade"
tcs.drinksOnly() //➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() //➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]