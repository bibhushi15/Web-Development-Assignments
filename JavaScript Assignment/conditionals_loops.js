// cehck even and odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is an even number.");
    } else {
        console.log(num + " is an odd number.");
    }
}
checkEvenOdd(3);

// multiplication table
function printMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
printMultiplicationTable(5);

// FizBuzz challenge
function fizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

// right-angled triangle
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
printTriangle(5);