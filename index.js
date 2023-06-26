const arr = [10,5,3,6,8];

// double [20, 10, 6, 12, 16]
// tripple [30, 15, 9, 18, 24]
// binary [1010, 101, 11, 110, 1000]

function double(x){
    return x * 2;
}

function tripple(x){
        return x * 3;
}

function binary(x){
        return x.toString(2);
}

const outputDouble = arr.map(double);
const outputTripple = arr.map(tripple);
const outputBinary = arr.map(binary);


console.log(outputDouble, outputTripple, outputBinary);

console.log(outputDouble);
console.log(outputTripple);
console.log(outputBinary);


// Others way to write map function
console.log("Others way to write map function");
console.log("Defining whole fuction in the map function");

const double_example2 = arr.map(function double(x){return x * 2} )

const tripple_example2 = arr.map(function tripple(x){return x * 3} )

const binary_example2 = arr.map(function binary(x){return x.toString(2)} )

console.log(double_example2);
console.log(tripple_example2);
console.log(binary_example2);