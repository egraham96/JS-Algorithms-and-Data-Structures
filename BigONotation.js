

/*Big O Notation Space Complexity Exercises*/
// 1) Determine the space complexity (auxiliary) of the following function:
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
console.log("logUpTo:")
logUpTo(25)
//Space complexity = O(1)


// 2) Determine the space complexity (auxiliary) for the following function:  
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
console.log("logAtMost10:")
logAtMost10(30)
//Space complexity = O(1)


// 3) Determine the space complexity (auxiliary) for the following function:  
function logAtMost10Again(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
console.log("logAtMost10Again:")
logAtMost10Again(50)
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
onlyElementsAtEvenIndexAgain(50)
//Space complexity = O(n)

// 5) Determine the space complexity for the following function:
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
subtotals(50)
//Space complexity = O(n)