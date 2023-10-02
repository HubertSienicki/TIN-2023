for (let i = 0; i < 10; i++) {
    console.log(i); // prints all the numbers which loop iterates through
}

let intArray = [1,2,3,4,5,6,7]
for (const element of intArray) {
    console.log(element); // prints all elements of an array
}

for (const key in intArray) {
    console.log(key); // prints the indices of an array
}


let x = 0;
let condition = true;

while (condition) { // while the condition is true, loop
    x++;
    if (x === 100) { // if x is equal to 100
        condition = false; // change the condition to false, which will break the loop
    }
}
console.log(x)