import Animal from './Animal.js';
import Dog from './Dog.js';

function isNumber() {
    const argsArr = Array.from(arguments);
    let sum = 0;

    for (let element of argsArr) {
        if(Number.isInteger(element)){
            sum += element;
        }else{
            if(isNaN(element)){
                console.log(`The element ${element} is not a number`);
                return 0;
            }else{
                sum += parseInt(element);
            }
        }
    }
    console.log(sum);
}

isNumber(1, 2, 3, 4, 5, '12px');
isNumber(10, 10);

function translateToObject(...args) {
    return args.reduce((acc, currentValue, index) => {
        acc[index] = currentValue;
        return acc;
    }, {});
}

const object = translateToObject('a', 'b', 'c');
console.log(object);

function executeOperation(n, operation) {
    return operation(n);
}

function squareRoot(n) {
    return n * n;
}

function multiply(n) {
    return n * 2;
}

console.log(executeOperation(5, multiply));
console.log(executeOperation(5, squareRoot));


function Car(model, productionYear, color) {
    this.model = model;
    this.productionYear = productionYear;
    this.color = color;

    this.toString = function() {
        return `${this.model}, ${this.productionYear}, ${this.color}.`;
    }
}

const car2 = new Car("Ford", 2018, "red");
const car1 = new Car("Toyota", 2020, "blue");

console.log(car1.toString());
console.log(car2.toString());


const animal1 = new Animal("Cat","meat");
console.log(animal1.sayHello());

const dog1 = new Dog("Labrador","dog food");
console.log(dog1.sayHello());
console.log(dog1.woof());