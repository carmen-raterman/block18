// //unit tests practice
// //first create a function that multiplies two numbers
// function multiplication(x, y) {
//   return x * y;
// }


// //now run a test, we expect the product of 2 and 10 to be 20
// test('multiply 2 and 10 to get 20', () => {
//     expect(multiplication(2, 10)).toBe(20);
// });
// //test passed!

//unit tests practice pt. 2
//create a function that has 2 arrays as the input, then returns a single array
function concatOdds(array1, array2) {
    const mergedArray = array1.concat(array2);

    const oddNums = mergedArray.filter(num => num % 2 !== 0);

    return mergedArray.sort((a, b) => a - b);
}

//now run a test to check the work
test('concatOdds return merged array from both arrays with just odd numbers', () => {
    const combined = concatOdds([3,2,1], [9,1,1,1,4,15,-1]);
    expect(combined).toEqual([-1,1,3,9,15]);
});

//this failed :(