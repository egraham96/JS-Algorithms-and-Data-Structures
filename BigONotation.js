/*Big O Notation Time Complexity Exercises*/
// 1) Simplify the big O expression as much as possible - O(n + 10):
// O(n)


// 2) Simplify the big O expression as much as possible - O(100 * n) :
// O(n)


// 3) Simplify the following big O expression as much as possible - O(25):
// O(1)


// 4) Simplify the following big O expression as much as possible -  O(n^2 + n^3):
// O (n^3)


// 5) Simplify the following big O expression as much as possible - O(n + n + n + n):
// O(n)


// 6) Determine the time complexity for the following function:
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
console.log("logUpTo:")
logUpTo(60)
//Time complexity = O(n)


// 7) Determine the time complexity for the following function:
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
console.log("logAtMost10")
logAtMost10(12)
//Time complexity = O(1)

// 8) Determine the time complexity for the following function:
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
console.log("logAtLeast10")
logAtLeast10(60)
//Time complexity = O(n)


// 9) Determine the time complexity for the following function:
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
console.log("onlyElementsAtEvenIndex:")
onlyElementsAtEvenIndex(300)
//Time complexity = O(n)


// 10) Determine the time complexity for the following function:
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
console.log("subtotals:")
subtotals(15)
//Time complexity = O(n)


/*Big O Notation Space Complexity Exercises*/
// 1) Determine the space complexity (auxiliary) of the following function:
function logUpToAgain(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
console.log("logUpToAgain:")
logUpToAgain(25)
//Space complexity = O(1)


// 2) Determine the space complexity (auxiliary) for the following function:  
function logAtMost10Again(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
console.log("logAtMost10Again:")
logAtMost10Again(30)
//Space complexity = O(1)


// 3) Determine the space complexity (auxiliary) for the following function:  
function ThirdlogAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
console.log("ThirdlogAtMost10:")
ThirdlogAtMost10(50)
//Space complexity = O(1)

// 4) Determine the space complexity (auxiliary) for the following function: 
function onlyElementsAtEvenIndexAgain(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
console.log("onlyElementsAtEvenIndexAgain:")
onlyElementsAtEvenIndexAgain(100)
//Space complexity = O(n)

// 5) Determine the space complexity for the following function:
function subtotalsAgain(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
console.log("subtotalsAgain:")
subtotalsAgain(200)
//Space complexity = O(n)