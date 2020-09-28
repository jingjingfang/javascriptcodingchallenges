//rotate an arry to the left 1 position
//roatate the last n number to the left
function rotate(array, stepsToShift) {

    for (var i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
    }

    return array;
}

console.log(rotate([1,2,3,4],2));

console.log("********************");

//slice and destructuring:

const rotateArray = (arr, count = 1) => {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
};

const arr = [1,2,3,4,5];

console.log(rotate(arr, 1));  // [2, 3, 4, 5, 1]
console.log(rotate(arr, 2));  // [3, 4, 5, 1, 2]
console.log(rotate(arr, -2)); // [4, 5, 1, 2, 3]
console.log(rotate(arr, -1)); // [5, 1, 2, 3, 4]

console.log("********************");

// //rotate an array to the left 1 position
function rotateToLeft(arr) {
  let shiftToLeft=arr.shift();  
  let last=arr.push(shiftToLeft);
  return arr;
}

console.log(rotateToLeft([1,2,3,5,0,9]));

console.log("********************");

// //rotate an array to the right 1 position
function rotateToRight(array) {
  let shiftToRight=array.pop();  
  let first=array.unshift(shiftToRight);
  return array;
}

console.log(rotateToRight([0,1,2,3,4]));
