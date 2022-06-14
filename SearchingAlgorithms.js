/*Searching Algorithms Exercises*/

/* 1) Write a function called linearSearch which accepts an array and a value and returns the index
at which the value exists. If the value does not exist in the array, return -1. Do not use indexOf to implement this function.*/
function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)

/* 2) Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. 
If the value does not exist in the array, return -1. Do not use indexOf to implement this function.*/
function binarySearch(arr, val){
    var left= 0;
    var right=arr.length-1;
    var middle= Math.floor((right+left)/2)

    while (arr[middle]!== val && left<=right){
        if (val <arr[middle]) right=middle-1;
        else left=middle+1;
        middle=Math.floor((right+left)/2)
    }
    return arr[middle]===val? middle:-1;
}
 
binarySearch([34,51,1,2,3,45,56,687], 100)

/* 1) Write a function called naiveSearch which accepts two strings: a longer string and a shorter string. Loop over the longer string and loop over the shorter string. If the characters do not match, break out of inner loop.
If the characters do match, keep going. If you complete the inner loop and find a match, increment the count of matches. Then, return the count.*/
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}


stringSearch("Hi I am emma", "mma")
