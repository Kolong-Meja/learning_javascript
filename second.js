function youNeedToLearnLoop() {
    const happinessWhileLooping = (index) => {
        do {
            console.log(index);
            index++;
        } while (index < 10);
    }

    const sadnessForLooping = (defaultNum, maxNum) => {
        for (let i = defaultNum; i < maxNum; i++) {
            console.log(i);
        }
    }
}

function showYourMap() {
    const justCreatingMap = (key, value) => {
        let map = new Map();

        if (!Array.isArray(key) && !Array.isArray(value)) {
            throw new Error("Is not an array!");
        }
        map.set(key[0], value[0]);
        map.set(key[1], value[1]);

        return map;
    }

    const creatingNewMap = () => {
        let thisIsAnObject = {
            name: "Faisal",
            age: 21,
        };
        let map = new Map(Object.entries(thisIsAnObject));
        return map;
    }

    const creatingNewSet = () => {
        let user = {
            id: 1,
            name: "Faisal"
        };
        let setData = new Set();
        setData.add(user);
        return setData;
    }
    return creatingNewSet();
}

function pow(x, n) {
    let number = 1;
    for (let i = 0; i < n; i++) {
        number *= x;
    }
    return number;
}

function anotherFunction() {
    let company = {
        sales: [{name: "Faisal", salary: 500}, {name: "John", salary: 800}],
        development: {
            sites: [{name: "Thomas", salary: 900}, {name: "James", salary: 1200}],
            internals: [{name: "Kevin", salary: 1500}]
        }
    };

    const sumSalaries = (department) => {
        if (!Array.isArray(department)) {
            let sum = 0;
            for (let subDep of Object.values(department)) {
                sum += sumSalaries(subDep);
            }
            return sum;
        }
        return department.reduce((prev, current) => prev + current.salary, 0);
    }

    let objectData = {
        user: {
            id: 1,
            name: "Faisal",
            hobby: [{id: 1,name: "Playing Games"}, {id: 2, name: "Love metal music!"}, {id: 3, name: "Do coding under the table!"}],
            email: [{id: 1, name: "faisal12@gmail.com"}, {id: 2, name: "herosgames12@gmail.com"}]
        }
    };
    console.log(JSON.stringify(objectData, null, 2));
}

function sumOperator(first, last) {
    const typeOfParam = "number";

    if (typeof(first) != typeOfParam || typeof(last) != typeOfParam) {
        throw new Error("Argument must be number type");
    }

    return first + last;
}

function showMaxNumber(firstArray, lastArray) {
    let searchMaxNumberFromFirstArray = Math.max(...firstArray);
    let searchMaxNumberFromLastArray = Math.max(...lastArray);
    let output = `First array max number: ${searchMaxNumberFromFirstArray}\nSecond array max number: ${searchMaxNumberFromLastArray}`; 
    console.log(output);
}

function showName() {
    const myRealName = (fullname) => {
        const typeOfName = "string";
        if (typeof(fullname) != typeOfName) {throw new Error("Name must be a string!");}
        return fullname;
    };
    return myRealName("Faisal Ramadhan");
}

function myProfileData() {
    const userData = {
        id: 1,
        name: showName(),
        age: 21, 
    };
    const userDataController = (data) => {
        if (typeof(data) !== "object") {throw new Error("Data must be an object!");}

        const addNewData = (key, value) => {
            let mapObject = new Map(Object.entries(data));
            mapObject.set(key, value);
            return Object.fromEntries(mapObject);
        };

        const deleteData = (key) => {
            let mapObject = new Map(Object.entries(data));
            if (mapObject.has(key)) {mapObject.delete(key);}
            return Object.fromEntries(mapObject);
        };

        const displayData = () => {return JSON.stringify(data);};
        return displayData();
    };
    return userDataController(userData);
}

const greetings = (whoAreYou) => {
    if (typeof(whoAreYou) !== "string") {throw new Error("Well you are not a string");}

    let time = setInterval(() => console.log(`Hello ${whoAreYou}`), 1000);
    setTimeout(() => {
        clearInterval(time);
        console.log("Stop");
    }, 5000);
};

const firstTesting = () => {
    let start = Date.now();
    let times = [];
    setTimeout(function run() {
        times.push(Date.now() - start);
        if (start + 100 < Date.now()) {console.log(times);}
        setTimeout(run);
    });
};

function slowCache(whatEverItIs) {
    console.log(`Called with ${whatEverItIs}`);
    return whatEverItIs;
}

function cachingDecorator(thisIsFunc) {
    let cache = new Map();

    return function(whatEverItIs) {
        if (cache.has(whatEverItIs)) {return cache.get(whatEverItIs);}
        let result = thisIsFunc(whatEverItIs);
        cache.set(whatEverItIs, result);
        return result;
    };
}

function learnBinding() {
    let user = {
        name: "Faisal Ramadhan",
        age: 21,
        hobbies: ["Playing games", "Love listening deathcore music", "Love doing coding", "Love javascript and python, little bit in php hehe"],
        result: function() {
            let output = `Hello, my name is ${this.name}\nI'm ${this.age} years old.\nMy hobby are so many, likes ${this.hobbies}`;
            console.log(output);
        }
    };
    const bindData = user.result.bind(user);
    bindData();
}

function experimentNumberTwo() {
    let animalData = {
        id: 1,
        objectName: "BobCat",
        aliases: "Red Lynx",
        originPlaces: ["Southern Canada", "United States", "Oaxaca"],
        specific: {
            mass: [
                [{gender: "Male", mass: 18}], 
                [{gender: "Female", mass: 15}]
            ],
        },
        storyTelling: function() {
            let output = `This is ${this.objectName}.\nOften called the ${this.aliases}.\nThe distribution area of this animal is around ${this.originPlaces}`;
            console.log(output);
        },
        funFact: function() {
            let output = `${this.specific.mass[0][0].gender}${this.objectName} has weight about ${this.specific.mass[0][0].mass} Kg.`;
            console.log(output);
        }
    };
    let firstBindData = animalData.storyTelling.bind(animalData);
    let secondBindData = animalData.funFact.bind(animalData);
    firstBindData();
    secondBindData();
}

function moreExperiment(thisIsFunction, ...manyArgument) {
    return function(...anotherArgument) {
        return thisIsFunction.call(this, ...manyArgument, ...anotherArgument);
    }
}

function nextExperiment() {
    let user = {
        name: "Faisal",
        message(time, phrase) {
            console.log(`[${time}] ${this.name} : ${phrase}`);
        }
    };
    user.oncomingMessage = moreExperiment(user.message, new Date().getHours() + ':' + new Date().getMinutes());
    user.oncomingMessage("Hello");
}

function toyStore() {
    const toysData = {
        superheros: [
            {id: 1, name: "Batman The Darknight", price: 89.99, mass: 0.80},
            {id: 2, name: "Superman The Man Of Steel", price: 109.99, mass: 0.90},
            {id: 3, name: "Spiderman (HomeComing Edition)", price: 129.99, mass: 0.75},
        ],
        firstMethod: function() {
            const addAnotherProperty = () => {
                this.superheros.push({id: 4, name: "Thor The Son Of Lightning", price: 79.99, mass: 0.85});

                const showToysWithTheHighestPrice = (priceParam) => {
                    return this.superheros.filter(item => item.price >= priceParam);
                }
                return showToysWithTheHighestPrice(100.00);
            }
            return JSON.stringify(addAnotherProperty(), null, 4);
        },
        secondMethod: function() {
            const sumAllPrices = () => {
                const totalPriceOfAllSuperheros = this.superheros.reduce((sum, hero) => {
                    return sum + hero.price;  
                }, 0);
                return totalPriceOfAllSuperheros;
            }
            return sumAllPrices();
        },
        thirdMethod: function() {
            const deleteProperty = () => {
                this.superheros.splice(2, 1);
                return this.superheros
            };
            return JSON.stringify(deleteProperty(), null, 4);
        }
    };
    for (const method of Object.getOwnPropertyNames(toysData)) {
        if (typeof toysData[method] === "function") {
            toysData[method] = toysData[method].bind(toysData);
            return toysData.firstMethod();
        }
    }
}

function experimentNumberThree() {
    let user = {
        id: 1, name: "John", email: "john12@gmail.com",
        message() {
            return `Hello ${this.name}`;
        }
    };
    let admin = {
        uuid: "XhJklz09Yht12AstegP",
        __proto__: user,
        output() {
            return `${this.email}`;
        }
    };
    let superAdmin = {
        securityKey: "123IsThereAnyKey?",
        __proto__: admin
    };

    superAdmin.message = () => {
        return `Hey ${superAdmin.name} you are super admin now! congrats`;
    }

    for (let property in superAdmin) {
        let isOwnProperty = superAdmin.hasOwnProperty(property);

        if (!isOwnProperty) {return `Inherited: ${property}`;}
        return `It is his property: ${property}`;
    }
}

function experimentNumberFour() {
    const carsObject = {
        id: 1,
        name: "Honda Accord 2015",
        price: 21000.00
    };

    function Honda(engine) {
        this.engine = engine;
    }
    Honda.prototype = carsObject;

    let car = new Honda("250 cc");
    console.log(car);
}

function footballClubForFun() {
    const clubData = {
        id: 1,
        name: "Bayern Munich",
        value: 900000000.00,
        totalPlayer: 25,
        firstMethod() {
            return `Club Value: ${this.value}`;
        }
    };
    const playerData = {
        players: [
            {id: 1, name: "Thomas Muller", value: 32000000.00},
            {id: 2, name: "Serge Gnabry", value: 60000000.00},
            {id: 3, name: "Leroy Sane", value: 60000000.00}
        ],
        __proto__: clubData,
    };

    playerData.firstMethod = function() {
        const sumAllPlayerValue = playerData.players.reduce((sum, player) => {
            return sum + player.value;
        }, 0);
        return sumAllPlayerValue;
    };

    playerData.secondMethod = function() {
        const iterateProperty = () => {
            for (let property in playerData) {
                let isOwnProperty = playerData.hasOwnProperty(property);
        
                if (isOwnProperty) {
                    console.log(`Own property: ${property}`);
                } else {
                    console.log(`Inherited property: ${property}`);
                }
            }
        };
        iterateProperty();
    };
}

function experimentNumberFive() {
    let myArray = [
        {id: 1, name: "The Red of Apple"},
        {id: 2, name: "The Yellow of Banana"},
        {id: 3, name: "The Orange of Orange"},
    ];

    const iterateObject = () => {
        for (let i = 0; i < myArray.length; i++) {
            for (let data in myArray[i]) {
                console.log(`${data}: ${myArray[i][data]}`);
            }
        }
    }

    // mengambil data buah property name
    for (let i = 0; i < myArray.length; i ++) {
        const badCode = () => {
            let nameParts = Object.values(Object.fromEntries(Object.entries(myArray[i]).filter((item) => item.includes("name")))).toString().split(" of ");
            console.log(nameParts[nameParts.length - 1].toLowerCase());
        };

        const greatCode = () => {
            let nameParts = myArray[i].name.split(" of ");
            console.log(nameParts[nameParts.length - 1].toLowerCase());
        };

        const getColor = () => {
            let fruits = myArray[i].name.split(" of ");
            let colorParts = fruits[0].toLowerCase().split("the");
            console.log(colorParts[colorParts.length - 1]);
        }
    }
}
