"use strict";
// Question no 1
var sum = 0;
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);
// Question no 2
var array = [20, 56, 77, 89, 44];
var evenNumbers = [];
for (let j = 0; j <= array.length; j++) {
    if (j % 2 == 0) {
        evenNumbers.push(j);
    }
}
console.log(evenNumbers);
