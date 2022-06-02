/*Recursions Exercises*/
// 1) What tool does JavaScript use to manage function invocations?
// The call stack

// 2) What is the base case?
// A situation when the recursion ends

/* 3) Write a function called power which accepts a base and an exponent. The function should
return the power of the base to the exponent. This function should mimic the functionality of Math.pow()-
do not worry about negative bases and exponents.*/
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

/* 4) Write a function called factorial which accepts a number and returns the factorial of 
that number. A factorial is a product of an integer and all the integers below it. Factorial 0 (0!)
is always 1.*/
function factorial(num) {
    if (num === 0) return 0;
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

/* 5) Write a function called productofArray which takes in an array of numbers and returns the product
of them all */
function productofArray(arr) {
    if (arr.length === 0) return 0;
    if (arr[0] === 0) return 1; /*My answer checks for when any element in array is 0, but this was not asked in problem*/
    if (arr[0] > 0) {
        return arr[0] * productofArray(arr.slice(1));
    }
}

/* 6) Write a function called recursiveRange which accepts a number and adds up all the numbers
from 0 to the number passed to the function  */
function recursiveRange(num) {
    if (num < 0) return;
    if (num = 0) return 0;
    return num + recursiveRange(num - 1)
}

/* 7) Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence.
Recall that the fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8...which starts with 1 and 1,
and where every number thereafter is equal to the sum of the previous two numbers.*/
function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

/*Challenging Recursion Exercises*/
/* 1) Write a recursive function called reverse which accepts a string and returns a new string in reverse */
    function reverse(str){
        if(str.length <= 1) return str;
        return reverse(str.slice(1)) + str[0];
    }

