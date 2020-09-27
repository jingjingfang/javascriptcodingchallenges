//use spread operator to find the largerest number of an arry

let array=[0,-1,2,5,10]
console.log(Math.max(...array));

//use Math.max.apply to find the largest number of an arrary

let array1=[0,-1,2,5,10,20,-6]
console.log(Math.max.apply(null,array1));


//use spread operator to find the smallest number of an arry

let array=[0,-1,2,5,10]
console.log(Math.min(...array));

//use Math.max.apply to find the smallest number of an arrary

let array1=[0,-1,2,5,10,20,-6]
console.log(Math.min.apply(null,array1));

