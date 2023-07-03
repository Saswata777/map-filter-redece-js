# map-filter-reduce-js

## Map function 

Map function is such a higher order function that that transform the whole array into a new array .
It transform all the element in the array .



 Here's a step-by-step breakdown of the code and the concepts covered:

1. The code begins by defining an array called `arr` with five values: [10, 5, 3, 6, 8].

2. Three functions are defined: `double`, `tripple`, and `binary`. These functions perform different operations on a given input.

3. The `map` function is used to apply each of these functions to every element of the `arr` array, and the results are stored in separate arrays: `outputDouble`, `outputTripple`, and `outputBinary`.

4. The results are logged to the console using `console.log`.

5. The code then demonstrates alternative ways to write the `map` function using function expressions and arrow functions. It shows examples where the logic functions are defined within the `map` function itself.

6. Next, the code introduces the concept of the `filter` function. It explains that the `filter` function is used to filter out elements from an array based on a specific condition. It defines two filter functions, `isOdd` and `isEven`, which determine whether a number is odd or even, respectively.

7. The `filter` function is applied to the `arr` array using the `isOdd` and `isEven` functions as arguments, and the filtered results are logged to the console.

8. The code continues with the `reduce` function. It explains that the `reduce` function reduces an array to a single value by applying a function to each element of the array and accumulating the result.

9. The first example demonstrates the `reduce` function by summing up all the elements in the `arr` array using a conventional `for` loop.

10. The second example uses the `reduce` function to calculate the sum of all elements in the `arr` array. It uses an anonymous function and initializes the accumulator (`acc`) to 0.

11. The code then shows how to find the maximum element in the array using both a conventional function (`maximum`) and the `reduce` function. The `reduce` function compares the current element (`curr`) with the accumulator (`acc`) and returns the maximum value.

12. The next part of the code demonstrates the usage of `map`, `filter`, and `reduce` functions on an array of objects (`users`). It shows how to extract specific properties from the objects using `map` and how to filter objects based on a condition using `filter`.

13. Finally, the code showcases a chaining example using `map`, `filter`, and `reduce`. It first filters the `users` array to get objects with an age greater than 30 and then maps only the first names of those filtered objects.

