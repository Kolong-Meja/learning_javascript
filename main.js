/**
 * Learning Javascript to expert!!!
 */

function showMessage(fullname, message) {
    "use strict";
    let typeOfParam = "string";

    // if null, then return system return message that argument must be not empty
    if (!fullname && !message) {
        return `Argument must filled, not empty!`;
    }

    const checkTypeOfParam = () => {
        if (typeof(fullname) != typeOfParam || typeof(message) != typeOfParam) {
            return `String type must required!`;
        }

        // then the valid condition, may return the real output
        return `Hello ${fullname}, ${message}`;
    }

    return checkTypeOfParam();
}

function assignNewObject(firstObject, secondObject) {
    "use strict";
    const typeOfParam = "object";

    if (!firstObject || !secondObject) {
        return `Argument must be valid, not empty!`;
    }

    const checkTypeOfParam = () => {
        if (typeof(firstObject) != typeOfParam || typeof(secondObject) != typeOfParam) {
            return `Object type must required!`;
        }

        let playerData = {
            id: 1,
            name: "Marcus Rashford",
            age: 25,
            value: 60000000.00,
        };
    
        Object.assign(playerData, firstObject, secondObject);
    
        for (let data in playerData) {
            console.log(`${data}: ${playerData[data]}`);
        }
    }

    return checkTypeOfParam();
}

function createMethodInsideObject() {
    let dataBuah = {
        nama: "Pisang",
        berat: 0.80,
        harga: 20000.00,
        stok: 100,

        output() {
            return `Ini adalah buah ${this.nama}, harganya Rp.${this.harga}`;
        }
    }

    console.log(dataBuah.output());
}

// Class with constructor and a property that actually a method
class Club {
    constructor(name, headquarters, origin) {
        this.name = name;
        this.headquarters = headquarters;
        this.origin = origin;

        this.output = function () {
            "use strict";
            const typeOfParam = "string";

            const checkTypeOfParam = () => {
                if (typeof(this.name) != typeOfParam || typeof(this.headquarters) != typeOfParam || typeof(this.origin) != typeOfParam) {
                    return `Argument must be string!`;
                }
    
                return `This is ${this.name}. It's from ${this.headquarters}, ${this.origin}`;
            }

            return checkTypeOfParam();
        };
    }
}

function createMathLogic(x, y, z) {
    const typeOfParam = "number";

    const checkTypeOfParam = () => {
        if (typeof(x) != typeOfParam || typeof(y) != typeOfParam || typeof(z) != typeOfParam) {
            return "Number type is required!";
        }

        let operator = (x * 2) / 5 + (10 - (y * (5 / 2)) + z);
        console.log(operator.toFixed(2));
    }

    return checkTypeOfParam();
}

function searchHarshWord() {
    let message = "You fuckin bitch!";
    let harshWords = ["fuckin", "bitch"];

    for (let i = 0; i < harshWords.length; i++) {
        if (message.includes(harshWords[i])) {
            message = "You are better!";
            console.log(message);
        }
    }
}

function addAnotherElementToArray(firstElement, secondElement) {
    let fruitArray = ["Apple", "Orange", "Banana"];

    if (fruitArray.length <= 5) {
        fruitArray.splice(0, 0, firstElement, secondElement);
    }

    const convertArrayToObject = () => {
        let fruits = [
            {id: 1, name: fruitArray[0]},
            {id: 2, name: fruitArray[1]},
            {id: 3, name: fruitArray[2]},
            {id: 4, name: fruitArray[3]},
            {id: 5, name: fruitArray[4]}
        ];

        const findElement = () => {
            let rambutan = fruits.find(item => item.name == "Rambutan");
            return rambutan;
        }

        const filterElement = () => {
            let fruit = fruits.filter(item => item.id < 5);
            return fruit;
        }

        // add new properties to current object
        let cloneFruit = Object.assign({}, fruits);
        let newProperties = {price: 12000.00};

        Object.assign(cloneFruit[0], newProperties);
        Object.assign(cloneFruit[1], newProperties);
        Object.assign(cloneFruit[2], newProperties);
        Object.assign(cloneFruit[3], newProperties);
        Object.assign(cloneFruit[4], newProperties);

        return cloneFruit;
    }
    return convertArrayToObject();
}

function purchasing() {
    "use strict";
    const itemData = {
        firstItem: {
            id: 1,
            name: "Samsung Galaxy S21",
            price: 8199000.00,
            stock: 100,
            is_available: true 
        },
        secondItem: {
            id: 2,
            name: "Iphone 14 Promax",
            price: 20595000.00,
            stock: 50,
            is_available: true,
        },
        thirdItem: {
            id: 3,
            name: "Infinix Note 12",
            price: 2549000.00,
            stock: 100,
            is_available: true,
        },
    };

    const feesToBePaid = (itemPrice, totalItemPurchased, coupon) => {
        const discount = 0.3;
        const taxFee = 0.1;

        if (!coupon) {
            let calculateTotalPrice = () => {
                if (totalItemPurchased > 1) {
                    let subTotal = (itemPrice * totalItemPurchased) - (itemPrice * discount) + (itemPrice * taxFee);
                    return `First Total Price (no coupon): Rp. ${subTotal}.00`;
                }

                let subTotal = (itemPrice * totalItemPurchased) + (itemPrice * taxFee);
                return `Second Total Price (no coupon): Rp. ${subTotal}.00`;
            }

            return calculateTotalPrice();
        }

        let calculateTotalPrice = () => {
            if (totalItemPurchased > 1) {
                let subTotal = (itemPrice * totalItemPurchased) - (itemPrice * (discount + coupon)) + (itemPrice * taxFee);
                return `Third Total Price (w coupon): Rp. ${subTotal}.00`;
            }

            let subTotal = ((itemPrice * totalItemPurchased) - (itemPrice * coupon)) + (itemPrice * taxFee);
            return `Fourth Total Price (w coupon): Rp. ${subTotal}.00`;
        }

        return calculateTotalPrice();
    }

    return feesToBePaid(itemData.firstItem.price, 1, 0.3);
}

function cars() {
    "use strict";
    const carData = {
        honda: {
            id: 1,
            name: "Honda",
            engine: "2500 CC",
            price: 25000.00
        },
        toyota: {
            id: 2,
            name: "Toyota",
            engine: "2200 CC",
            price: 28000.00
        }
    };
    const hondaMap = new Map(Object.entries(carData.honda));
    const toyotaMap = new Map(Object.entries(carData.toyota));

    const purchaseCar = (carChoose, totalItem, discount, coupon) => {
        let taxFee = 0.0575;
        let minimumItemOrdered = 1;
        let hondaSubTotalWithoutCoupon, toyotaSubTotalWithoutCoupon;
        let hondaSubTotalWithCoupon, toyotaSubTotalWithCoupon;

        if (!carChoose) throw new Error("You don't order car yet!");
        if (carChoose > 2 || 0) throw new Error(`Car with id ${carChoose} not available!`);

        if (!coupon && carChoose == hondaMap.get("id")) {
            const calculateHondaTotalPrice = (carPrice) => {
                if (totalItem > minimumItemOrdered) {
                    hondaSubTotalWithoutCoupon = (carPrice * totalItem) - (carPrice * discount) + (carPrice * taxFee);
                    for (let [key, value] of hondaMap) {
                        console.log(`${key}: ${value}`);
                    }
                    return `Your receipt (with discount): $${hondaSubTotalWithoutCoupon}`;   
                }

                hondaSubTotalWithoutCoupon = (carPrice * totalItem) + (carPrice * taxFee);
                for (let [key, value] of hondaMap) {
                    console.log(`${key}: ${value}`);
                }
                return `Your receipt (without discount): $${hondaSubTotalWithoutCoupon}`;                
            }

            return calculateHondaTotalPrice(hondaMap.get("price"));
        }

        if (!coupon && carChoose == toyotaMap.get("id")) {
            const calculateToyotaTotalPrice = (carPrice) => {
                if (totalItem > minimumItemOrdered) {
                    toyotaSubTotalWithoutCoupon = (carPrice * totalItem) - (carPrice * discount) + (carPrice * taxFee);
                    for (let [key, value] of toyotaMap) {
                        console.log(`${key}: ${value}`);
                    }
                    return `Your receipt (with discount): $${toyotaSubTotalWithoutCoupon}`;    
                }

                toyotaSubTotalWithoutCoupon = (carPrice * totalItem) + (carPrice * taxFee);
                for (let [key, value] of toyotaMap) {
                    console.log(`${key}: ${value}`);
                }
                return `Your receipt (without discount): $${toyotaSubTotalWithoutCoupon}`;  
            }
            
            return calculateToyotaTotalPrice(toyotaMap.get("price"));
        }

        if (coupon && carChoose == hondaMap.get("id")) {
            const calculateHondaTotalPrice = (carPrice) => {
                if (totalItem > minimumItemOrdered) {
                    hondaSubTotalWithCoupon = ((carPrice * totalItem) - (carPrice * discount) + (carPrice * taxFee)) - (carPrice * coupon);
                    for (let [key, value] of hondaMap) {
                        console.log(`${key}: ${value}`);
                    }
                    return `Your receipt (with discount & coupon): $${hondaSubTotalWithCoupon}`;   
                }

                hondaSubTotalWithCoupon = ((carPrice * totalItem) + (carPrice * taxFee)) - (hondaMap.get("price") * coupon);
                for (let [key, value] of hondaMap) {
                    console.log(`${key}: ${value}`);
                }
                return `Your receipt (with coupon): $${hondaSubTotalWithCoupon}`;                
            }
            return calculateHondaTotalPrice(hondaMap.get("price"));
        }

        if (coupon && carChoose == toyotaMap.get("id")) {
            const calculateToyotaTotalPrice = (carPrice) => {
                if (totalItem > minimumItemOrdered) {
                    toyotaSubTotalWithCoupon = (carPrice * totalItem) - (carPrice * discount) + (carPrice * taxFee);
                    for (let [key, value] of toyotaMap) {
                        console.log(`${key}: ${value}`);
                    }
                    return `Your receipt (with discount): $${toyotaSubTotalWithCoupon}`;    
                }

                toyotaSubTotalWithCoupon = (carPrice * totalItem) + (carPrice * taxFee);
                for (let [key, value] of toyotaMap) {
                    console.log(`${key}: ${value}`);
                }
                return `Your receipt (without discount): $${subTotal}`;  
            }
            return calculateToyotaTotalPrice(toyotaMap.get("price"));
        }
    }

    return purchaseCar(1, 1, 0.2, 0.3);
}

function createNewSymbol() {
    let userData = {
        id: 1,
        name: "Faisal Ramadhan",
        age: 21,
        hobby: ["Playing games", "love listening metal music", "like doing coding"]
    };
    const conversion = () => {
        let cars = {
            name: "Honda",
            price: 21000.00,
            toString() {return `{name: "${this.name}"}`;},
            valueOf() {return this.price;}
        };
        return cars.toString();
    }
}

function learningMap(value) {
    let fruits = {
        apple: {
            id: 1,
            name: "Apple",
            price: value[0]
        },
        banana: {
            id: 2,
            name: "Banana",
            price: value[1]
        },
        orange: {
            id: 3,
            name: "Orange",
            price: value[2]
        }
    };

    const fruitMap = () => {
        let fruit = new Map(Object.entries(fruits.apple));
        return fruit;
    };

    const convertIntoObject = () => {
        let apple = Object.fromEntries(fruitMap());
        fruits = {apple};
        return fruits;
    }

    return convertIntoObject();
}

function learningWeakMap(value) {
    let userData = {name: value};
    let superWeakMap = new WeakMap();
    superWeakMap.set(userData, "I was good!");

    userData = null;
}

function learningSet() {
    let carsData = {
        honda: {
            id: 1,
            name: "Honda Accord",
            year: 2023,
            price: 28930.00,
        },
        toyota: {
            id: 2,
            name: "Toyota GR Supra",
            year: 2023,
            price: 45135.00
        }
    };

    let set = new Set();
    set.add(carsData.honda.name);
    set.add(carsData.toyota.name);

    console.log(set.entries());
}

function learningWeakSet() {
    let listUserVisitedWebsite = new WeakSet();

    let userData = {
        firstUser: {
            id: 1,
            name: "John"
        },
        secondUser: {
            id: 2,
            name: "George"
        },
        thirdUser: {
            id: 3,
            name: "Faisal"
        }
    };

    listUserVisitedWebsite.add(userData.firstUser);
    listUserVisitedWebsite.add(userData.secondUser);
    listUserVisitedWebsite.add(userData.thirdUser);

    console.log(listUserVisitedWebsite);
}

function learningObject() {
    let data = {
        apple: 1.20,
        banana: 1.50,
        orange: 1.00
    };
    let discount = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value - (value * 0.2)]));

    const totalFruitPrice = (itemPrice) => {
        let sum = 0;
        for (let price of Object.values(itemPrice)) {
            sum += price;
        }
        return sum;
    }
}

function learnJSON() {
    let dataObject = {
        id: 1,
        personal_data: {
            name: "Faisal",
            age: 21,
            online_data: {
                email: "faisal12@gmail.com",
                username: "faisal12",
            },
        },
        isOnline: false
    };

    const trainingJSON = () => {
        let roomData = {
            id: 314,
            name: "Privacy Meeting",
            owner: "Faisal"
        };
        let meetingData = {
            title: "Small Conference",
            participants: [
                {id: 1,name: "John"},
                {id: 2,name: "George"},
                {id: 3,name: "Anna"},
                {id: 4, name: "Thomas"}
            ],
            date: new Date(Date.UTC(2023, 1, 12, 17, 30, 0)),
            place: roomData
        };
        let jsonType = JSON.stringify(meetingData, null, 2);
        return jsonType;
    }
    return trainingJSON();
}

function superhero() {
    let heroData = {
        id: 1,
        name: "Batman",
        skill: [{
            firstSkill: {
                id: 1,
                name: "Super Punch",
                power: 500 
            },
            secondSkill: {
                id: 2,
                name: "Flying Bat Blade",
                power: 350 
            },
            thirdSkill: {
                id: 3,
                name: "Bat Flicker",
                power: 25 
            }
        }],
    };
}
superhero();

// exercise
function unique(array) {
    return Array.from(new Set(array));
}

function countProperty(object) {
    return Object.keys(object).length;
}